package com.rmit.sept.mon15307.backend.Repositories;

import com.rmit.sept.mon15307.backend.model.Booking;
import com.rmit.sept.mon15307.backend.model.Employee;
import com.rmit.sept.mon15307.backend.model.Schedule;
import com.rmit.sept.mon15307.backend.model.UserAccount;
import com.rmit.sept.mon15307.backend.model.enumeration.BookingStatus;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface BookingsRepository extends CrudRepository<Booking, Long> {
    Iterable<Booking> findByCustomerAndStatusIn(
        UserAccount user, Collection<BookingStatus> statuses
    );

    Iterable<Booking> findBookingsByEmployeeAndStatusIsIn(
        Employee employee, Collection<BookingStatus> statuses
    );

    Iterable<Booking> findBookingsByStatusIsIn(Collection<BookingStatus> statuses);

    Iterable<Booking> findBookingsByScheduleId(Long scheduleId);

    Booking findByBookingId(Long bookingId);

    Iterable<Booking> findByScheduleAndEmployee(Schedule schedule, Employee employee);
}