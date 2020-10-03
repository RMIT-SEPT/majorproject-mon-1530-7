package com.rmit.sept.mon15307.backend.payload;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.rmit.sept.mon15307.backend.exceptions.ScheduleFullyBookedException;
import com.rmit.sept.mon15307.backend.model.Booking;
import com.rmit.sept.mon15307.backend.model.Schedule;
import com.rmit.sept.mon15307.backend.services.BookingService;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

public class EmployeeTimesResponse {
    private final LocalDate date;
    private final Set<String> times;

    EmployeeTimesResponse(Schedule schedule, BookingService bookingService)
        throws ScheduleFullyBookedException {
        this.date = schedule.getDate();
        this.times = Booking.permittedTimes;

        Iterable<Booking> bookings = bookingService.findBookingsBySchedule(schedule);

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