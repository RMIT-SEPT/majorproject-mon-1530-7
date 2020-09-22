package com.rmit.sept.mon15307.backend.RepositoriesTest;

import com.rmit.sept.mon15307.backend.Repositories.EmployeeRepository;
import com.rmit.sept.mon15307.backend.model.Employee;
import com.rmit.sept.mon15307.backend.model.Product;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@DataJpaTest
public class EmployeeRepositoryTest {

    @Autowired
    private EmployeeRepository employeeRepoTest;

    Employee testEmployee;
    long empId;

    @Before
    public void init() {
        testEmployee = new Employee();
        empId = testEmployee.getId();
    }

    @After
    public void tearDown() throws Exception {
        employeeRepoTest.deleteAll();
    }

    @Test
    public void saveAndFetchEmployeeById() throws Exception {
        employeeRepoTest.save(testEmployee);

        Employee repoTest = employeeRepoTest.findByIdEquals(empId);

        assertEquals(repoTest, testEmployee);
    }

}