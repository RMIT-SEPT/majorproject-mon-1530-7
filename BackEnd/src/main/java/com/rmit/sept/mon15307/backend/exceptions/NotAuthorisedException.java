package com.rmit.sept.mon15307.backend.exceptions;

public class NotAuthorisedException extends RuntimeException {
    public NotAuthorisedException(String message) {
        super(message);
    }
}
