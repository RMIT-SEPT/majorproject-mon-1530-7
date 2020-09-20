package com.rmit.sept.mon15307.backend.model;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.rmit.sept.mon15307.backend.exceptions.ScheduleFullyBookedException;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class EmployeeAvailability {
    private final Employee employee;

    public EmployeeAvailability(Employee employee) {
        this.employee = employee;
    }

    @JsonGetter("staff_id")
    public String getId() {
        if (this.employee.getId() != null) {
            return this.employee.getId().toString();
        } else {
            return null;
        }
    }

    @JsonGetter("times")
    public List<EmployeeTimes> getTimes() {
        List<EmployeeTimes> times = new ArrayList<>();

        // TODO: find a more efficient way to filter
        Calendar yesterdayCal = Calendar.getInstance();
        yesterdayCal.add(Calendar.DATE, -1);
        Date yesterday = yesterdayCal.getTime();

        Calendar plus14Cal = Calendar.getInstance();
        plus14Cal.add(Calendar.DATE, 14);  // TODO: check if off by one
        Date plus14 = plus14Cal.getTime();

        List<Schedule> employeeSchedule = this.employee.getSchedules();
        if (employeeSchedule != null) {
            for (Schedule schedule : employeeSchedule) {
                if (schedule.getDate().after(yesterday) && schedule.getDate().before(plus14)) {
                    try {
                        times.add(new EmployeeTimes(schedule));
                    } catch (ScheduleFullyBookedException e) {
                        // skip this day
                    }
                }
            }
        }

        return times;
    }
}