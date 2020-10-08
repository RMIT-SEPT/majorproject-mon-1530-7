package com.rmit.sept.mon15307.backend.ModelTests;

import com.rmit.sept.mon15307.backend.model.Employee;
import com.rmit.sept.mon15307.backend.model.Schedule;
import com.rmit.sept.mon15307.backend.model.UserAccount;
import com.rmit.sept.mon15307.backend.services.EmployeeService;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
public class EmployeeTest {

    Employee testEmployee;
    EmployeeService testService;
    Schedule testSchedule;
    UserAccount employeeUser;
    String id;

    @Before
    public void init() {
        testEmployee = new Employee();
        testSchedule = new Schedule();
        employeeUser = new UserAccount();
        testService = new EmployeeService();
        id = testEmployee.getId();
    }

    @Test
    public void idGenerationTest(){
        assertNotNull("Checks ID is actaully being generated", id);
    }

    @Test
    public void employeeSearchByIdTest(){
        Employee testEmpDup = testService.findByEmployeeId(id);

        assertEquals("Should save and locate the saved employee by ID: ",testEmployee, testEmpDup);
    }

    @Test
    public void employeeScheduleTest(){
        boolean testTrue = testEmployee.isScheduled(testSchedule.getDate());

        assertTrue("Employee is booked for date: ",testTrue);
    }

    @Test
    public void employeeUserTest(){
        UserAccount userTest = testEmployee.getUser();

        assertEquals("Employee that belongs to a user is valid: ", userTest, employeeUser);
    }
}
