package com.rmit.sept.mon15307.backend.payload;

import com.fasterxml.jackson.annotation.JsonSetter;
import com.rmit.sept.mon15307.backend.exceptions.InvalidTimeSlotException;
import com.rmit.sept.mon15307.backend.model.Booking;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;


public class BookingRequest {
    @NotNull
    private String customer_id;

    @NotNull
    private String employee_id;

    @NotNull
    private String product_id;

    @NotNull
    @Temporal(TemporalType.DATE)
    @FutureOrPresent
    private LocalDate date;

    @NotBlank
    @NotNull
    private String time_slot;

    public String getCustomerId() {
        return customer_id;
    }

    public String getEmployeeId() {
        return employee_id;
    }

    public String getProductId() {
        return product_id;
    }

    public LocalDate getDate() {
        return date;
    }

    @JsonSetter("appointment_date")
    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getTimeSlot() {
        return time_slot;
    }

    public void setCustomer_id(String customer_id) {
        this.customer_id = customer_id;
    }

    public void setEmployee_id(String employee_id) {
        this.employee_id = employee_id;
    }

    public void setProduct_id(String product_id) {
        this.product_id = product_id;
    }

    @JsonSetter("appointment_time")
    public void setTime_slot(String time_slot) {
        if (!Booking.permittedTimes.contains(time_slot)) {
            throw new InvalidTimeSlotException("Time slot not supported");
        }
        this.time_slot = time_slot;
    }
}
