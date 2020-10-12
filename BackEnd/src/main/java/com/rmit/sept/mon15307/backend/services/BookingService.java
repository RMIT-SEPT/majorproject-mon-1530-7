package com.rmit.sept.mon15307.backend.services;

import com.rmit.sept.mon15307.backend.Repositories.BookingsRepository;
import com.rmit.sept.mon15307.backend.exceptions.*;
import com.rmit.sept.mon15307.backend.model.*;
import com.rmit.sept.mon15307.backend.model.enumeration.BookingStatus;
import com.rmit.sept.mon15307.backend.payload.BookingPatch;
import com.rmit.sept.mon15307.backend.payload.BookingRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Service
public class BookingService {
    @Autowired
    private BookingsRepository bookingsRepository;

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private ScheduleService scheduleService;

    public Booking saveOrUpdateBooking(Booking booking) {
        return bookingsRepository.save(booking);
    }

    public Iterable<Booking> findBookingsBySchedule(Schedule schedule) {
        return this.bookingsRepository.findBookingsByScheduleId(schedule.getId());
    }

    public Booking findByBookingId(Long bookingId) throws BookingNotFoundException {
        Booking booking = bookingsRepository.findByBookingId(bookingId);

        if (booking == null) {
            throw new BookingNotFoundException("Booking ID '" + bookingId + "' was not found");
        }

        return booking;
    }

    public boolean conflictsWithExisting(
        Schedule schedule, Employee employee, LocalDateTime startTime, LocalDateTime endTime
    ) {
        Iterable<Booking> employeeBookingsForDay =
            this.bookingsRepository.findByScheduleAndEmployee(schedule, employee);

        // max 16 bookings for a single employee in a day
        for (Booking booking : employeeBookingsForDay) {
            boolean startsDuring = booking.getStartTime().isAfter(startTime) &&
                                   booking.getStartTime().isBefore(endTime);
            boolean endsDuring =
                booking.getEndTime().isAfter(startTime) && booking.getEndTime().isBefore(endTime);

            if (startsDuring || endsDuring) {
                return true;
            }
        }

        // no conflicts found
        return false;
    }

    public Iterable<Booking> findUserBookingsByStatus(UserAccount user, BookingStatus status) {
        return bookingsRepository.findBookingsByCustomerAndStatus(user, status);
    }

    public Iterable<Booking> findWorkerBookingsByStatus(UserAccount user, BookingStatus status) {
        Employee employee = employeeService.findByByUser(user);
        return bookingsRepository.findBookingsByEmployeeAndStatus(employee, status);
    }

    public Iterable<Booking> findAllBookingsByStatus(BookingStatus status) {
        return bookingsRepository.findBookingsByStatus(status);
    }

    public Booking setBookingStatus(Booking booking, BookingStatus status) {

        booking.setStatus(status);
        return bookingsRepository.save(booking);
    }

    public Booking createBooking(
        UserAccount customer, Employee employee, Product product, BookingRequest bookingRequest
    ) {
        // employee must be scheduled for the selected date
        Schedule schedule =
            scheduleService.findByEmployeeAndDate(employee, bookingRequest.getDate());
        boolean employeeNotScheduled = schedule == null;

        // date must be in next 14 days (including today)
        LocalDate future = LocalDate.now().plusDays(14);
        boolean invalidDate = !bookingRequest.getDate().isBefore(future);

        // time must be one of the permitted options
        boolean unsupportedTime = !Booking.permittedTimes.contains(bookingRequest.getTimeSlot());

        // booking must not have already started
        LocalDateTime startTime = LocalDateTime.of(bookingRequest.getDate(),
                                                   LocalTime.parse(bookingRequest.getTimeSlot())
        );
        boolean invalidAppointmentStart = !startTime.isAfter(LocalDateTime.now());

        // employee must not have any preexisting overlapping bookings
        LocalDateTime endTime = startTime.plusMinutes(product.getDuration());
        boolean bookingConflict =
            this.conflictsWithExisting(schedule, employee, startTime, endTime);

        if (employeeNotScheduled ||
            invalidDate ||
            unsupportedTime ||
            invalidAppointmentStart ||
            bookingConflict) {
            throw new ConflictException("Appointment time not available");
        }

        // now we can make the booking (and hopefully no new conflict has arisen in the
        // meantime)
        // TODO: handle race conditions (create, check conflicts, maybe rollback and error)

        Booking booking = new Booking();
        booking.setStatus(BookingStatus.PENDING);
        booking.setCustomer(customer);
        booking.setEmployee(employee);
        booking.setProduct(product);
        booking.setSchedule(schedule);
        booking.setTime(bookingRequest.getTimeSlot());
        this.saveOrUpdateBooking(booking);

        return booking;
    }

    public Booking updateBooking(Booking booking, BookingPatch bookingPatch, UserAccount user) {
        // user must have authority to edit this booking
        boolean bookingIsForUser = booking.getCustomer().getUserId().equals(user.getUserId());
        if (!bookingIsForUser && !user.getAdmin() && !user.getWorker()) {
            throw new NotAuthorisedException("User not authorised");
        }

        // admin can set pending -> confirmed or confirmed -> pending
        BookingStatus currentStatus = booking.getStatus();
        BookingStatus targetStatus = bookingPatch.getStatus();
        boolean isAdminConfirmation =
            (currentStatus == BookingStatus.PENDING && targetStatus == BookingStatus.CONFIRMED) ||
            (currentStatus == BookingStatus.CONFIRMED && targetStatus == BookingStatus.PENDING);

        // worker can set notcompleted -> completed or completed -> notcompleted
        boolean isWorkerCompletion = (currentStatus == BookingStatus.NOT_COMPLETED &&
                                      targetStatus == BookingStatus.COMPLETED) ||
                                     (currentStatus == BookingStatus.COMPLETED &&
                                      targetStatus == BookingStatus.NOT_COMPLETED);

        // admin or applicable user can set (confirmed or pending) -> cancelled
        boolean isAdminOrUserCancellation =
            (currentStatus == BookingStatus.CONFIRMED || currentStatus == BookingStatus.PENDING) &&
            targetStatus == BookingStatus.CANCELLED;

        // change must be a valid operation given current status
        if (!(isAdminConfirmation || isWorkerCompletion || isAdminOrUserCancellation)) {
            throw new InvalidBookingStatusTransitionException();
        }

        // user must be authorised to make this change
        boolean isAuthorisedAdminConfirmation = isAdminConfirmation && user.getAdmin();
        boolean isAuthorisedWorkerCompletion = isWorkerCompletion && user.getWorker();
        boolean isAuthorisedAdminOrUserCancellation =
            isAdminOrUserCancellation && (user.getAdmin() || bookingIsForUser);

        if (!(isAuthorisedAdminConfirmation ||
              isAuthorisedWorkerCompletion ||
              isAuthorisedAdminOrUserCancellation)) {
            throw new UserNotAuthorisedException("User not authorised to make this change");
        }

        return this.setBookingStatus(booking, targetStatus);
    }
}
