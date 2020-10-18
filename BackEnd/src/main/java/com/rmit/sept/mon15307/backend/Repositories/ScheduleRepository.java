package com.rmit.sept.mon15307.backend.Repositories;

import com.rmit.sept.mon15307.backend.model.Employee;
import com.rmit.sept.mon15307.backend.model.Schedule;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface ScheduleRepository extends CrudRepository<Schedule, Long> {
    Schedule findScheduleByEmployeeAndDate(Employee employee, LocalDate date);

    Iterable<Schedule> findSchedulesByEmployeeAndDateBetween(Employee employee,
                                                             LocalDate startDate,
                                                             LocalDate endDate);
}
