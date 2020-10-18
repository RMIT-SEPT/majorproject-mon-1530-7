package com.rmit.sept.mon15307.backend.services;

import com.rmit.sept.mon15307.backend.Repositories.EmployeeRepository;
import com.rmit.sept.mon15307.backend.exceptions.EmployeeNotFoundException;
import com.rmit.sept.mon15307.backend.exceptions.InvalidProductException;
import com.rmit.sept.mon15307.backend.model.Employee;
import com.rmit.sept.mon15307.backend.model.Product;
import com.rmit.sept.mon15307.backend.payload.AdminSetProducts;
import com.rmit.sept.mon15307.backend.model.UserAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Set;
import java.util.HashSet;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee findByEmployeeId(String employeeId) throws EmployeeNotFoundException {
        Employee employee = employeeRepository.findByEmployeeId(Long.parseLong(employeeId));

        if (employee == null) {
            throw new EmployeeNotFoundException("Employee not found");
        }

        return employee;
    }

    public Iterable<Employee> findAllEmployees() {
        return employeeRepository.findAll();
    }

    // Checks if all specified product ids are repeated in the set of
    // employee product ids
    public boolean checkMatchingProductIds(AdminSetProducts productsSet, List<Product> employeeProducts){
        // Checks if the employee product ids and admin specified products
        // collections contain the same ids.
        Set<Long> employeeProductIds = employeeProducts
                .stream()
                .map(p -> Long.parseLong(p.getId()))
                .collect(Collectors.toUnmodifiableSet());

        Set<Long> providedProductIds = new HashSet<>(productsSet.getProductIds());

        return providedProductIds.equals(employeeProductIds);
    }

    // Set products to employee
    public void setProducts(Employee employee, List<Product> products) {
        employee.getProducts().clear();
        employee.setProducts(products);
        employeeRepository.save(employee);
    }

    public Employee findByByUser(UserAccount user) {
        Employee employee = employeeRepository.findEmployeeByUser(user);

        if (employee == null) {
            throw new EmployeeNotFoundException("Employee not found");
        }

        return employee;
    }
}
