package com.rmit.sept.mon15307.backend;

import com.rmit.sept.mon15307.backend.Repositories.BookingsRepository;
import com.rmit.sept.mon15307.backend.Repositories.EmployeeRepository;
import com.rmit.sept.mon15307.backend.Repositories.ScheduleRepository;
import com.rmit.sept.mon15307.backend.security.JwtAuthenticationEntryPoint;
import com.rmit.sept.mon15307.backend.services.BookingService;
import com.rmit.sept.mon15307.backend.services.EmployeeService;
import com.rmit.sept.mon15307.backend.services.MapValidationErrorService;
import com.rmit.sept.mon15307.backend.services.ScheduleService;
import com.rmit.sept.mon15307.backend.web.EmployeeController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest
@ContextConfiguration(classes = {
    JwtAuthenticationEntryPoint.class
})
@Import({
            EmployeeController.class,
            EmployeeService.class,
            BookingService.class,
            ScheduleService.class,
            MapValidationErrorService.class
        })
public class EmployeeControllerTests {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private EmployeeRepository employeeRepository;

    @MockBean
    private BookingsRepository bookingsRepository;

    @MockBean
    private ScheduleRepository scheduleRepository;

    @Test
    public void contextsLoads() {
    }

    @Test
    @WithMockUser
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
