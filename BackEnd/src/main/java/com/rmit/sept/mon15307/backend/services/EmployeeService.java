package com.rmit.sept.mon15307.backend.services;

import com.rmit.sept.mon15307.backend.Repositories.EmployeeRepository;
import com.rmit.sept.mon15307.backend.exceptions.EmployeeNotFoundException;
import com.rmit.sept.mon15307.backend.exceptions.InvalidProductException;
import com.rmit.sept.mon15307.backend.model.Employee;
import com.rmit.sept.mon15307.backend.model.Product;
import com.rmit.sept.mon15307.backend.payload.AdminSetProducts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
        boolean matchList = true;
        // Creates list of set employee product ids
        List<Long> employeeProductIds = new ArrayList<>();
        for(Product product: employeeProducts){
            employeeProductIds.add(Long.parseLong(product.getId()));
        }
        // Checks if the employee product ids and admin specified products
        // collections contain the same ids.
        for(Long specifiedProductId: productsSet.getProductIds()){
            if(!employeeProductIds.contains(specifiedProductId)){
                matchList = false;
            }
        }
        return matchList;
    }

    // Set products to employee --v need to test if this is done correctly
    public void setProducts(Employee employee, List<Product> products){
//        employee.setProducts(products);
//        employeeRepository.findByEmployeeId(Long.parseLong(employee.getId()));
        employee.setProducts(products);
        employeeRepository.save(employee);
    }
}
