package com.rmit.sept.mon15307.backend.services;

import com.rmit.sept.mon15307.backend.Repositories.BookingsRepository;
import com.rmit.sept.mon15307.backend.exceptions.BookingException;
import com.rmit.sept.mon15307.backend.model.Booking;
import com.rmit.sept.mon15307.backend.model.Employee;
import com.rmit.sept.mon15307.backend.model.Schedule;
import com.rmit.sept.mon15307.backend.model.UserAccount;
import com.rmit.sept.mon15307.backend.model.enumeration.BookingStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;

@Service
public class BookingService {
    @Autowired
    private BookingsRepository bookingsRepository;

    public Booking saveOrUpdateBooking(Booking booking) {
        return bookingsRepository.save(booking);
    }

    public Iterable<Booking> findBookingsBySchedule(Schedule schedule) {
        return this.bookingsRepository.findBookingsByScheduleId(schedule.getId());
    }

    public Booking findByBookingId(Long bookingId) {

        Booking booking = bookingsRepository.findByBookingId(bookingId);

        if (booking == null) {
            throw new BookingException("Booking ID '" + bookingId + "' does not exist");

        }

        return booking;
    }

    public void cancelBookingById(Long bookingId) {
        Booking booking = bookingsRepository.findByBookingId(bookingId);

        if (booking == null) {
            throw new BookingException("Cannot find booking with ID '" +
                                       bookingId +
                                       "'. This booking does not exist");
        }

        Date cancelledAt = new Date();

        booking.setCancelledAt(cancelledAt);
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

    public Iterable<Booking> findAllBookingsByStatus(BookingStatus status) {
        return bookingsRepository.findBookingsByStatus(status);
    }
}

