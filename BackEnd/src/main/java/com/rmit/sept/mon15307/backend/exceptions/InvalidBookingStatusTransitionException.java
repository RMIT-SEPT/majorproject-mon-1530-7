package com.rmit.sept.mon15307.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.BAD_REQUEST)
public class InvalidBookingStatusTransitionException extends BookingException {
    public InvalidBookingStatusTransitionException() {
        super("invalid booking status transition");
    }
}

