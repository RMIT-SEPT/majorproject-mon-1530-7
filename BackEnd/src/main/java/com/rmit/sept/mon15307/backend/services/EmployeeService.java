package com.rmit.sept.mon15307.backend.services;

import com.rmit.sept.mon15307.backend.Repositories.EmployeeRepository;
import com.rmit.sept.mon15307.backend.exceptions.EmployeeNotFoundException;
import com.rmit.sept.mon15307.backend.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee findByEmployeeId(String employeeId) {
        Employee employee = employeeRepository.findByEmployeeId(Long.parseLong(employeeId));

        if (employee == null) {
            throw new EmployeeNotFoundException();
        }

        return employee;
    }

    public Iterable<Employee> findAllEmployees() {
        return employeeRepository.findAll();
    }
}
