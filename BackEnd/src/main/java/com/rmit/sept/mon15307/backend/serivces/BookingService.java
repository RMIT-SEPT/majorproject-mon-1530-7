package com.rmit.sept.mon15307.backend.services;


import com.rmit.sept.mon15307.backend.Repositories.BookingsRepository;
import com.rmit.sept.mon15307.backend.model.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    @Autowired
    private BookingsRepository bookingsRepository;


    public Booking saveOrUpdateBooking(Booking booking) {

        return bookingsRepository.save(booking);

    }

    public Iterable<Booking> findAllBookings(){
        return bookingsRepository.findAll();
    }
}