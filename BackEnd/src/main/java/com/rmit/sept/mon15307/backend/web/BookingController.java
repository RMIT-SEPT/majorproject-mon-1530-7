package com.rmit.sept.mon15307.backend.web;

import com.rmit.sept.mon15307.backend.model.Booking;
import com.rmit.sept.mon15307.backend.services.BookingService;
import com.rmit.sept.mon15307.backend.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;


    @PostMapping("")
    public ResponseEntity<?> createNewBooking(@Valid @RequestBody Booking booking, BindingResult result){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap!=null) return errorMap;

        Booking project1 = bookingService.saveOrUpdateBooking(booking);
        return new ResponseEntity<Booking>(project1, HttpStatus.CREATED);
    }


    @GetMapping("/{bookingId}")
    public ResponseEntity<?> getBookingById(@PathVariable String bookingId


    ){

        Booking booking = bookingService.findByBookingId(bookingId);

        return new ResponseEntity<Booking>(booking, HttpStatus.OK);
    }


    @GetMapping("/all")
    public Iterable<Booking> getAllBookings(){return

            bookingService.findAllBookings();}


    @DeleteMapping("/{bookingId}")
    public ResponseEntity<?> deleteProject(@PathVariable String bookingId){
        bookingService.deleteBookingById(bookingId);

        return new ResponseEntity<String>("Booking with ID: '"+bookingId+"' was deleted", HttpStatus.OK);
    }
}