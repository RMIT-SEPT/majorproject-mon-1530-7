package com.rmit.sept.mon15307.backend.model;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.rmit.sept.mon15307.backend.exceptions.ScheduleFullyBookedException;
import com.rmit.sept.mon15307.backend.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class EmployeeTimes {
    private final Date date;
    private final HashSet<String> times;

    @Autowired
    private BookingService bookingService;

    EmployeeTimes(Schedule schedule) throws ScheduleFullyBookedException {
        this.date = schedule.getDate();
        this.times = new HashSet<>();

        // TODO: specify time slots in config
        Collections.addAll(
            this.times,
            "09:00",
            "09:30",
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
            "16:30"
        );

        SimpleDateFormat bookingTimeFormat = new SimpleDateFormat("hh:mm");
        for (Booking booking : this.bookingService.findBookingsBySchedule(schedule)) {
            Date bookingTime = booking.getTime();
            this.times.remove(bookingTimeFormat.format(bookingTime));
        }

        if (this.times.size() == 0) {
            throw new ScheduleFullyBookedException();
        }
    }

    @JsonGetter("date")
    public Date getDate() {
        // TODO: check date format in json output
        return this.date;
    }

    @JsonGetter("times")
    public Set<String> getTimes() {
        return this.times;
    }
}