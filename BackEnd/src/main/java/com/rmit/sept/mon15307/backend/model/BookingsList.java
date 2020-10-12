package com.rmit.sept.mon15307.backend.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.rmit.sept.mon15307.backend.customSerializers.BookingsListSerializer;

import java.util.Iterator;

@JsonSerialize(using = BookingsListSerializer.class)
public class BookingsList implements Iterable<Booking> {

    private final Iterable<Booking> bookingsList;

    public BookingsList(Iterable<Booking> bookingsList) {
        this.bookingsList = bookingsList;
    }

    @Override
    public Iterator<Booking> iterator() {
        return this.bookingsList.iterator();
    }
}
