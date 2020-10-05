package com.rmit.sept.mon15307.backend.Repositories;

import com.rmit.sept.mon15307.backend.model.Booking;
import com.rmit.sept.mon15307.backend.model.Employee;
import com.rmit.sept.mon15307.backend.model.Schedule;
import com.rmit.sept.mon15307.backend.model.UserAccount;
import com.rmit.sept.mon15307.backend.model.enumeration.BookingStatus;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingsRepository extends CrudRepository<Booking, Long> {
    Iterable<Booking> findBookingsByCustomerAndStatus(UserAccount customer, BookingStatus status);

    Iterable<Booking> findBookingsByStatus(BookingStatus status);

    Iterable<Booking> findBookingsByScheduleId(Long scheduleId);

    Booking findByBookingId(Long bookingId);

    Iterable<Booking> findByScheduleAndEmployee(Schedule schedule, Employee employee);
}