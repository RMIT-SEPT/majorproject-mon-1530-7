package com.rmit.sept.mon15307.backend.model.enumeration;

public enum BookingStatus {
    completed,  // past booking where service was performed
    notcompleted,  // past booking where service did not occur (e.g. customer didn't show up)
    pending,  // future booking not yet approved by admin (default state for new bookings)
    confirmed,  // future booking after approval by admin
    cancelled,  // future or past booking which was cancelled by user or admin
}
