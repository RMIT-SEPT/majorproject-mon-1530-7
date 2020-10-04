package com.rmit.sept.mon15307.backend.payload;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.rmit.sept.mon15307.backend.exceptions.ScheduleFullyBookedException;
import com.rmit.sept.mon15307.backend.model.Employee;
import com.rmit.sept.mon15307.backend.model.Schedule;
import com.rmit.sept.mon15307.backend.services.BookingService;
import com.rmit.sept.mon15307.backend.services.ScheduleService;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class EmployeeAvailabilityResponse {
    private final Employee employee;
    private final BookingService bookingService;
    private final ScheduleService scheduleService;

    public EmployeeAvailabilityResponse(
        Employee employee, BookingService bookingService, ScheduleService scheduleService
    ) {
        this.employee = employee;
        this.bookingService = bookingService;
        this.scheduleService = scheduleService;
    }

    @JsonGetter("staff_id")
    public String getId() {
        if (this.employee.getId() != null) {
            return this.employee.getId();
        } else {
            return null;
        }
    }

    @JsonGetter("days")
    public List<EmployeeTimesResponse> getTimes() {
        List<EmployeeTimesResponse> times = new ArrayList<>();

        LocalDate startDate = LocalDate.now().minusDays(1);
        LocalDate endDate = LocalDate.now().plusDays(13);

        Iterable<Schedule> employeeSchedules =
            scheduleService.findByEmployeeAndDateRange(employee, startDate, endDate);

        for (Schedule schedule : employeeSchedules) {
            try {
                times.add(new EmployeeTimesResponse(schedule, bookingService));
            } catch (ScheduleFullyBookedException e) {
                // skip this day
            }
        }

        return times;
    }
}