package com.rmit.sept.mon15307.backend.Repositories;

import com.rmit.sept.mon15307.backend.model.Booking;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingsRepository extends CrudRepository<Booking, Long> {
        @Query("select b from Booking b where b.schedule.id = :scheduleId")
        Iterable<Booking> findBookingsByScheduleId(
            Long scheduleId
        );

        Booking findByBookingId(Long bookingId);

        @Override
        Iterable<Booking> findAll();
}