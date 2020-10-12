package com.rmit.sept.mon15307.backend.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.rmit.sept.mon15307.backend.customSerializers.BookingSerializer;

import java.util.ArrayList;
import java.util.List;

@JsonSerialize(using = BookingSerializer.class)
public class BookingsList {

    private List<Booking> bookingsList = new ArrayList<Booking>();

    public BookingsList(){
        this.bookingsList = new ArrayList<Booking>();
    }

    public BookingsList(List<Booking> bookingsList){
        super();
        this.bookingsList = bookingsList;
    }

    public List<Booking> getBookingsList() { return this.bookingsList; }

    public void setBookingsList(List<Booking> bookingsList) { this.bookingsList = bookingsList; }

}
