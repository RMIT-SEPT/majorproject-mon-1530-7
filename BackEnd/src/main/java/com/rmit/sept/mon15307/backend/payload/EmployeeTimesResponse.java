package com.rmit.sept.mon15307.backend.payload;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.rmit.sept.mon15307.backend.exceptions.ScheduleFullyBookedException;
import com.rmit.sept.mon15307.backend.model.Booking;
import com.rmit.sept.mon15307.backend.model.Schedule;
import com.rmit.sept.mon15307.backend.services.BookingService;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class EmployeeTimesResponse {
    private final LocalDate date;
    private Set<String> times;

    EmployeeTimesResponse(Schedule schedule, BookingService bookingService)
        throws ScheduleFullyBookedException {
        this.date = schedule.getDate();

        if (this.date.isEqual(LocalDate.now())) {
            // only times that are still in the future
            LocalTime now = LocalTime.now();
            this.times = Booking.permittedTimes
                .stream()
                .filter(t -> LocalTime.parse(t).isAfter(now))
                .collect(Collectors.toSet());
        } else {
            // otherwise start with all times
            this.times = Booking.permittedTimes;
        }

        // exclude times that have already been booked
        Iterable<Booking> bookings = bookingService.findBookingsBySchedule(schedule, false);
        if (bookings != null) {
            for (Booking booking : bookings) {
                this.times.remove(booking.getTime());
            }
        }

        if (this.times.size() == 0) {
            throw new ScheduleFullyBookedException();
        }

    }

    @JsonGetter("date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    public LocalDate getDate() {
        // TODO: check date format in json output
        return this.date;
    }

    @JsonGetter("times")
    public List<String> getTimes() {
        List<String> sorted = new ArrayList<>(this.times);
        Collections.sort(sorted);
        return sorted;
    }
}