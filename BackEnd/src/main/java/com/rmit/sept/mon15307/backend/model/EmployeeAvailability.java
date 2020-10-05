package com.rmit.sept.mon15307.backend.model;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.rmit.sept.mon15307.backend.exceptions.ScheduleFullyBookedException;
import com.rmit.sept.mon15307.backend.services.BookingService;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class EmployeeAvailability {
    private final Employee employee;
    private final BookingService bookingService;

    private boolean monday = false;
    private boolean tuesday = false;
    private boolean wednesday = false;
    private boolean thursday = false;
    private boolean friday = false;
    private boolean weekend = false;

    public EmployeeAvailability(Employee employee, BookingService bookingService) {
        this.employee = employee;
        this.bookingService = bookingService;
    }

    @JsonGetter("staff_id")
    public String getId() {
        if (this.employee.getId() != null) {
            return this.employee.getId();
        } else {
            return null;
        }
    }

    public boolean setAvailableMonday(){
        return monday = true;
    }

    public boolean setAvailableTuesday(){
        return tuesday = true;
    }

    public boolean setAvailableWednesday(){
        return wednesday = true;
    }

    public boolean setAvailableThursday(){
        return thursday = true;
    }

    public boolean setAvailableFriday(){
        return friday = true;
    }

    public boolean setAvailableWeekend(){
        return weekend = true;
    }

    public List<String> getDaysAvailable(){
        List<String> days = new ArrayList<>();

        if(monday=true){
            days.add("Monday");
        }
        if(tuesday=true){
            days.add("Tuesday");
        }
        if(wednesday=true){
            days.add("Wednesday");
        }
        if(thursday=true){
            days.add("Thursday");
        }
        if(friday=true){
            days.add("Friday");
        }
        if(weekend=true){
            days.add("Saturday");
            days.add("Sunday");
        }

        return days;
    }

    @JsonGetter("days")
    public List<EmployeeTimes> getTimes() {
        List<EmployeeTimes> times = new ArrayList<>();

        Calendar yesterdayCal = Calendar.getInstance();
        yesterdayCal.add(Calendar.DATE, -1);
        Date yesterday = yesterdayCal.getTime();

        Calendar plus14Cal = Calendar.getInstance();
        plus14Cal.add(Calendar.DATE, 14);  // TODO: check if off by one
        Date plus14 = plus14Cal.getTime();

        // TODO: find a more efficient way to filter dates
        List<Schedule> employeeSchedule = this.employee.getSchedules();
        for (Schedule schedule : employeeSchedule) {
            if (schedule.getDate().after(yesterday) && schedule.getDate().before(plus14)) {
                try {
                    times.add(new EmployeeTimes(schedule, bookingService));
                } catch (ScheduleFullyBookedException e) {
                    // skip this day
                }
            }
        }

        return times;
    }
}