package com.rmit.sept.mon15307.backend.payload;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.rmit.sept.mon15307.backend.exceptions.ScheduleFullyBookedException;
import com.rmit.sept.mon15307.backend.model.Booking;
import com.rmit.sept.mon15307.backend.model.Schedule;
import com.rmit.sept.mon15307.backend.services.BookingService;

import java.util.*;

public class EmployeeTimesResponse {
    private final Date date;
    private final HashSet<String> times;

    EmployeeTimesResponse(Schedule schedule, BookingService bookingService)
        throws ScheduleFullyBookedException {
        this.date = schedule.getDate();
        this.times = new HashSet<>();

        // TODO: specify time slots in config
        // open hours: 10am – 5pm
        Collections.addAll(
            this.times,
            "10:00",
            "10:30",
            "11:00",
            "11:30",
            "12:00",
            "12:30",
            "13:00",
            "13:30",
            "14:00",
            "14:30",
            "15:00",
            "15:30",
            "16:00",
            "16:30"
        );

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
    public Date getDate() {
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