package com.rmit.sept.mon15307.backend;

import com.rmit.sept.mon15307.backend.services.EmployeeService;
import com.rmit.sept.mon15307.backend.services.MapValidationErrorService;
import com.rmit.sept.mon15307.backend.web.EmployeeController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(EmployeeController.class)
public class EmployeeControllerTests {
    @MockBean
    EmployeeService employeeService;
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private MapValidationErrorService mapValidationErrorService;

    @Test
    public void contextsLoads() {
    }

    @Test
    public void shouldListWithNoEmployees() throws Exception {
        String expected = "{\n  \"staff\": []\n}";
        mockMvc
            .perform(get("/api/staff"))
            .andExpect(status().is2xxSuccessful())
            .andExpect(content().json(expected));
    }

    @Test
    public void shouldListWithEmployees() throws Exception {
        // TODO: pending functionality to create employees
    }

    @Test
    public void shouldCreateValidEmployees() throws Exception {
        // TODO: pending create method
    }

    @Test
    public void shouldRejectInvalidEmployee() throws Exception {
        // TODO: pending create method
    }

    @Test
    public void shouldRejectUnrecognisedId() throws Exception {
        mockMvc.perform(get("/api/staff/1/times")).andExpect(status().is4xxClientError());
    }

    @Test
    public void shouldListTimesForEmployee() throws Exception {
        // TODO: pending functionality to create employees and schedules
    }
}
