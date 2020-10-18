package com.rmit.sept.mon15307.backend;

import com.rmit.sept.mon15307.backend.Repositories.*;
import com.rmit.sept.mon15307.backend.model.Booking;
import com.rmit.sept.mon15307.backend.security.JwtAuthenticationEntryPoint;
import com.rmit.sept.mon15307.backend.services.*;
import com.rmit.sept.mon15307.backend.web.BookingController;
import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest
@AutoConfigureMockMvc(addFilters = false) // disable CSRF protection
@ContextConfiguration(classes = { JwtAuthenticationEntryPoint.class })
@Import({ BookingController.class, BookingService.class, UserService.class, EmployeeService.class,
        ScheduleService.class, ProductService.class, MapValidationErrorService.class })
class BookingControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private BookingsRepository bookingsRepository;

    @MockBean
    private UserRepository userRepository;

    @MockBean
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @MockBean
    private EmployeeRepository employeeRepository;

    @MockBean
    private ScheduleRepository scheduleRepository;

    @MockBean
    private ProductRepository productRepository;

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
        String body = ("{\"customer_id\": \"1\",") + ("\"product_id\": \"1\",")
                + ("\"appointment_date\": \"2020-01-01\"}");
        mockMvc.perform(post("/api/bookings").contentType("application/json").content(body))
                .andExpect(status().isBadRequest());

        Mockito.verify(bookingsRepository, Mockito.never()).save(Mockito.any(Booking.class));
    }

    @Test
    public void shouldRejectNonExistentCustomer() throws Exception {
        String body = "{\n" + "  \"customer_id\": \"123\",\n" + "  \"employee_id\": \"1\",\n"
                + "  \"product_id\": \"1\",\n" + "  \"appointment_date\": \"2020-10-09\",\n"
                + "  \"appointment_time\": \"15:00\"\n" + "}";
        mockMvc
            .perform(post("/api/bookings").contentType("application/json").content(body))
            .andExpect(status().is4xxClientError());

        Mockito.verify(bookingsRepository, Mockito.never()).save(Mockito.any(Booking.class));
    }

    @Test
    public void shouldRejectDoubleBooking() throws Exception {

    }

    @Test
    public void shouldReturnBookingIdOnSuccess() throws Exception {

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
    // should reject time employee isn't schedule
    // should reject outside of business hours

}
