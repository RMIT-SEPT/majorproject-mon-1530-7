package com.rmit.sept.mon15307.backend.services;

import com.rmit.sept.mon15307.backend.Repositories.ScheduleRepository;
import com.rmit.sept.mon15307.backend.model.Employee;
import com.rmit.sept.mon15307.backend.model.Schedule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class ScheduleService {
    @Autowired
    private ScheduleRepository scheduleRepository;

    public Schedule findByEmployeeAndDate(Employee employee, LocalDate date) {
        // Only one per day per employee
        return scheduleRepository.findScheduleByEmployeeAndDate(employee, date);
    }

    public Iterable<Schedule> findByEmployeeAndDateRange(
        Employee employee, LocalDate startDate, LocalDate endDate
    ) {
        return scheduleRepository.findSchedulesByEmployeeAndDateBetween(
            employee,
            startDate,
            endDate
        );
    }
}
