package com.rmit.sept.mon15307.backend.web;

import com.rmit.sept.mon15307.backend.model.Booking;
import com.rmit.sept.mon15307.backend.model.User;
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
import java.util.ArrayList;
import java.util.Map;

@RestController
@RequestMapping("/api/booking/bookings")
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
    public ResponseEntity<?> getBookingById(@PathVariable Long bookingId
    

    ){

        Booking booking = bookingService.findByBookingId(bookingId);

        return new ResponseEntity<Booking>(booking, HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<?> listUserBookings(@RequestParam(value="user", required=true) User user) {
        Iterable<Booking> allBookings = bookingService.findAllBookings();
        List<Booking> userBookings = new ArrayList<Booking>();
        for(Booking i:allBookings) {
            if(i.getCustomer() == user) {
                userBookings.add(i);
            }
        }
        return new ResponseEntity<List>(userBookings,HttpStatus.OK);
    }


    @DeleteMapping("/bookings/{bookingId}")
    public ResponseEntity<?> cancelProject(@PathVariable Long bookingId){
        bookingService.cancelBookingById(bookingId);

        return new ResponseEntity<String>("Booking with ID: '"+bookingId+"' was cancelled", HttpStatus.OK);
    }
}