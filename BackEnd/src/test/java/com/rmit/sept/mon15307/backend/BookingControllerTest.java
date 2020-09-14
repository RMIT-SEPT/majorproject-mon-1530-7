package com.rmit.sept.mon15307.backend;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rmit.sept.mon15307.backend.services.BookingService;
import com.rmit.sept.mon15307.backend.services.MapValidationErrorService;
import com.rmit.sept.mon15307.backend.services.ProductService;
import com.rmit.sept.mon15307.backend.web.BookingController;
import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = BookingController.class)
@RunWith(SpringRunner.class)
public class BookingControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private BookingService bookingService;

    @MockBean
    private ProductService productService;

    @MockBean
    private MapValidationErrorService mapValidationErrorService;

    @Before
    public void setup() {
        // TODO: create test customer (pending UserService)
        // TODO: create test product (pending ProductService enhancements)
        // TODO: create test employee
        // TODO: specify schedule for employee
    }

    @Test
    public void contextLoads() {
    }

    @Test
    public void shouldRejectIncompleteData() throws Exception {
        String body = ("{\"customer_id\": \"1\",") +
                      ("\"product_id\": \"1\",") +
                      ("\"appointment_date\": \"2020-01-01\"}");
        mockMvc
            .perform(post("/api/bookings").contentType("application/json").content(body))
            .andExpect(status().is4xxClientError());
    }

    @Test
    public void shouldRejectNonExistentCustomer() throws Exception {
        String body = ("{\"customer_id\": \"1\",") +
                      ("\"product_id\": \"1\",") +
                      ("\"staff_id\": \"1\",") +
                      ("\"appointment_date\": \"2020-01-01\"}") +
                      ("\"appointment_time\": \"10:30\"}");
        mockMvc
            .perform(post("/api/bookings").contentType("application/json").content(body))
            .andExpect(status().is4xxClientError());
    }

    @After
    public void teardown() {
        // TODO: undo setup
    }

    // TODO: more tests
    // should return booking id on success
    // should reject unrecognised staff member
    // should reject unrecognised product
    // should reject unrecognised customer
    // should reject double booking
    // should reject time employee isn't schedule
    // should reject outside of business hours

}
