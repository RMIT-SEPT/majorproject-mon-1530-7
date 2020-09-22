package com.rmit.sept.mon15307.backend.RepositoriesTest;

import com.rmit.sept.mon15307.backend.Repositories.BookingsRepository;
import com.rmit.sept.mon15307.backend.model.Booking;
import com.rmit.sept.mon15307.backend.model.Product;
import com.rmit.sept.mon15307.backend.model.Schedule;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class BookingRepositoryTest {

    @Autowired
    private BookingsRepository bookRepoTest;

    Booking testBooking;
    Schedule testSchedule;

    @Before
    public void init() {
        testBooking = new Booking();
        testSchedule = new Schedule();
        testBooking.setBookingId(11);
        testBooking.setSchedule(testSchedule);
    }

    @After
    public void tearDown() throws Exception {
        bookRepoTest.deleteAll();
    }

    @Test
    public void saveAndFetchBooking() throws Exception {
        bookRepoTest.save(testBooking);

        Booking repoTest = bookRepoTest.findByBookingId(11);

        assertEquals(repoTest, testBooking);
    }

    @Test
    public void saveAndFetchBookingBySchdeduleId() throws Exception {
        bookRepoTest.save(testBooking);

        Schedule repoTestS = testBooking.getSchedule();
        Booking repoTest = (Booking) bookRepoTest.findBookingsByScheduleId(repoTestS.getId());

        assertEquals(repoTest, testBooking);
    }
}