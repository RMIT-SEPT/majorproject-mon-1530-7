package com.rmit.sept.mon15307.backend.web;

import com.rmit.sept.mon15307.backend.exceptions.EmployeeNotFoundException;
import com.rmit.sept.mon15307.backend.model.Employee;
import com.rmit.sept.mon15307.backend.model.EmployeeAvailability;
import com.rmit.sept.mon15307.backend.services.BookingService;
import com.rmit.sept.mon15307.backend.services.EmployeeService;
import com.rmit.sept.mon15307.backend.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/staff")
@CrossOrigin
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private BookingService bookingService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @GetMapping("")
    public ResponseEntity<?> listEmployees() {
        // TODO: authentication
        // TODO: restrict response fields based on authenticated user role

        Map<String, Iterable<Employee>> response = new HashMap<>();
        Iterable<Employee> employees = employeeService.findAllEmployees();
        response.put("staff", employees);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{employeeId}/times")
    public ResponseEntity<?> getEmployeeTimesById(
        @PathVariable
            String employeeId
    ) {
        // TODO: authentication

        Employee employee;
        try {
            employee = employeeService.findByEmployeeId(employeeId);
        } catch (EmployeeNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        EmployeeAvailability availability = new EmployeeAvailability(employee, bookingService);
        return new ResponseEntity<>(availability, HttpStatus.OK);
    }
}
