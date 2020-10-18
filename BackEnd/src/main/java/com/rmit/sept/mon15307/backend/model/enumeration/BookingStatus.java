package com.rmit.sept.mon15307.backend.model.enumeration;

public enum BookingStatus {
    COMPLETED,  // past booking where service was performed
    NOT_COMPLETED,  // past booking where service did not occur (e.g. customer didn't show up)
    PENDING,  // future booking not yet approved by admin (default state for new bookings)
    CONFIRMED,  // future booking after approval by admin
    CANCELLED,  // future or past booking which was cancelled by user or admin
}
