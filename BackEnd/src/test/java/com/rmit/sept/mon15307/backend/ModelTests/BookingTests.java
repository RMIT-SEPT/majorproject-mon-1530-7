package com.rmit.sept.mon15307.backend.ModelTests;

import com.rmit.sept.mon15307.backend.model.Booking;
import com.rmit.sept.mon15307.backend.model.Schedule;
import com.rmit.sept.mon15307.backend.services.BookingService;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;


import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
public class BookingTests {

    Booking testBooking;
    BookingService testService;
    Schedule testSchedule;
    long id;

    @Before
    public void init() {
        testService = new BookingService();
        testBooking = new Booking();
        testSchedule = new Schedule();
        testBooking.setSchedule(testSchedule);
        id = testBooking.getBookingId();
    }

    @Test
    public void idGenerationTest(){
        assertNotNull("Checks ID is actaully being generated", id);
    }

    @Test
    public void bookingSearchByIdTest(){
        testService.saveOrUpdateBooking(testBooking);
        Booking testBookDup = testService.findByBookingId(id);

        assertEquals("Should save and locate the saved booking by ID: ",testBooking, testBookDup);
    }

    @Test
    public void bookingSearchbyScheduleTest(){
        testService.saveOrUpdateBooking(testBooking);
        Booking testBookDup = (Booking) testService.findBookingsBySchedule(testSchedule);

        assertEquals("Should save and locate the saved booking by schedule: ",testBooking, testBookDup);
    }

    @Test
    public void cancelBookingTest(){
        testService.saveOrUpdateBooking(testBooking);
        testService.cancelBookingById(testBooking.getBookingId());

        assertNotNull("Booking should be cancelled: ", testBooking.getCancelledAt());
    }
}