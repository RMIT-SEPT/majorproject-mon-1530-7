package com.rmit.sept.mon15307.backend.services;

import com.rmit.sept.mon15307.backend.Repositories.BookingsRepository;
import com.rmit.sept.mon15307.backend.exceptions.BookingNotFoundException;
import com.rmit.sept.mon15307.backend.exceptions.InvalidBookingStatusTransitionException;
import com.rmit.sept.mon15307.backend.exceptions.NotAuthorisedException;
import com.rmit.sept.mon15307.backend.exceptions.UserNotAuthorisedException;
import com.rmit.sept.mon15307.backend.model.Booking;
import com.rmit.sept.mon15307.backend.model.Employee;
import com.rmit.sept.mon15307.backend.model.Schedule;
import com.rmit.sept.mon15307.backend.model.UserAccount;
import com.rmit.sept.mon15307.backend.model.enumeration.BookingStatus;
import com.rmit.sept.mon15307.backend.payload.BookingPatch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class BookingService {
    @Autowired
    private BookingsRepository bookingsRepository;

    @Autowired
    private EmployeeService employeeService;

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
            (currentStatus == BookingStatus.pending && targetStatus == BookingStatus.confirmed) ||
            (currentStatus == BookingStatus.confirmed && targetStatus == BookingStatus.pending);

        // worker can set notcompleted -> completed or completed -> notcompleted
        boolean isWorkerCompletion = (currentStatus == BookingStatus.notcompleted &&
                                      targetStatus == BookingStatus.completed) ||
                                     (currentStatus == BookingStatus.completed &&
                                      targetStatus == BookingStatus.notcompleted);

        // admin or applicable user can set (confirmed or pending) -> cancelled
        boolean isAdminOrUserCancellation =
            (currentStatus == BookingStatus.confirmed || currentStatus == BookingStatus.pending) &&
            targetStatus == BookingStatus.cancelled;

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

