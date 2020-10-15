package com.rmit.sept.mon15307.backend.web;

import com.rmit.sept.mon15307.backend.exceptions.EmployeeNotFoundException;
import com.rmit.sept.mon15307.backend.model.Employee;
import com.rmit.sept.mon15307.backend.model.Product;
import com.rmit.sept.mon15307.backend.model.UserAccount;
import com.rmit.sept.mon15307.backend.payload.AdminSetProducts;
import com.rmit.sept.mon15307.backend.payload.EmployeeAvailabilityResponse;
import com.rmit.sept.mon15307.backend.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.HashMap;
import java.util.List;
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
    private ScheduleService scheduleService;

    @Autowired
    private ProductService productService;

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

        EmployeeAvailabilityResponse availability =
            new EmployeeAvailabilityResponse(employee, bookingService, scheduleService);
        return new ResponseEntity<>(availability, HttpStatus.OK);
    }

    @PutMapping("/{staffId}/products")
    public ResponseEntity<?> editService(
            @PathVariable
            @Min(1) @NotNull Long staffId,
            @Valid
            @RequestBody
                AdminSetProducts productsSet,
            BindingResult result,
            @AuthenticationPrincipal
                UserAccount user
    ) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;

        Iterable<Product> allProductsInSystem = productService.findAllProducts();
        Employee employee = employeeService.findByEmployeeId(String.valueOf(staffId));
        List<Product> employeeProducts = employee.getProducts();

        // Checks if specified product ids exist in the system.
        productService.checkNonExistentProductIds(allProductsInSystem, productsSet);

        // Checks if specified set of product ids is an exact match to already
        // set products for the employee (NEEDS TO BE FALSE)
        boolean matchingProductsExistsEntirely
                = employeeService.checkMatchingProductIds(productsSet, employeeProducts);

        if(!matchingProductsExistsEntirely){
            // Returns products specified by admin
            List<Product> setProducts = productService.updatedProducts(productsSet, user);
            // Set updated products to employee requested
            employeeService.setProducts(employee, setProducts);
        }

        return new ResponseEntity<>(employee.getProducts(), HttpStatus.OK);
    }
}
