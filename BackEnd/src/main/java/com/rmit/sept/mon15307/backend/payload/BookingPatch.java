package com.rmit.sept.mon15307.backend.payload;

import com.rmit.sept.mon15307.backend.exceptions.BookingException;
import com.rmit.sept.mon15307.backend.model.enumeration.BookingStatus;

import javax.validation.constraints.NotNull;

public class BookingPatch {
    // Only booking status can be edited (with restrictions).
    // For all other changes, cancel and create a new booking.

    @NotNull
    private String status;

    public BookingStatus getStatus() {
        try {
            return BookingStatus.valueOf(status.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new BookingException("Invalid booking status");
        }
    }
}
