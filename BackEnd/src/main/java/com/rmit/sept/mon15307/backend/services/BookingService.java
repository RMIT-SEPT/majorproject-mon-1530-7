package com.rmit.sept.mon15307.backend.services;


import com.rmit.sept.mon15307.backend.Repositories.BookingsRepository;
import com.rmit.sept.mon15307.backend.model.Booking;
import com.rmit.sept.mon15307.backend.exceptions.BookingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;

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

    public Booking findByBookingId(String bookingId){

        Booking booking = bookingsRepository.findByBookingId(bookingId.toUpperCase());

        if(booking == null){
            throw new BookingException("Booking ID '"+bookingId+"' does not exist");

        }


        return booking;
    }
   

    public void cancelBookingById(String bookingId){
        Booking booking= bookingsRepository.findByBookingId(bookingId.toUpperCase());

        if(booking == null){
            throw  new  BookingException("Cannot find booking with ID '"+bookingId+"'. This booking does not exist");
        }

        Date cancelledAt = new Date();

        booking.setCancelledAt(cancelledAt);
    }
}
