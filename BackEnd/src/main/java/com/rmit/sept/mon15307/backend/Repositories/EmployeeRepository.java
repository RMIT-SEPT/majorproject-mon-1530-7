package com.rmit.sept.mon15307.backend.Repositories;

import com.rmit.sept.mon15307.backend.model.Employee;
import com.rmit.sept.mon15307.backend.model.Product;
import com.rmit.sept.mon15307.backend.model.UserAccount;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
    Employee findByEmployeeId(Long employeeId);

    Employee findEmployeeByUser(UserAccount user);
}