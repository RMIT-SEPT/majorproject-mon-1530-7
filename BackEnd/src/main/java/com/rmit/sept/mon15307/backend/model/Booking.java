package com.rmit.sept.mon15307.backend.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import com.fasterxml.jackson.annotation.*;
import java.util.Date;



@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
  //@NotBlank(message = "Customer ID is required")
    private String bookingId;
    private String status;
    private String customerId;
    private String employeeId;
    private String productId;
    private String scheduleId;
    @JsonFormat(pattern = "hh-mm")
    private Date time;
    @JsonFormat(pattern ="yyyy-mm-dd")
    private Date createdAt;
    @JsonFormat(pattern ="yyyy-mm-dd")
    private Date cancelledAt;
    @JsonFormat(pattern ="yyyy-mm-dd")
    private Date completedAt;
    

    public Booking() {
    }
    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }
    public String getCustomerId() {
        return customerId;
    }
    
    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public String getEmployee() {
        return employeeId;
    }
    public void setEmployee(String employeeId) {
        this.employeeId = employeeId;
    } 

    public Date getTime() {
        return time;
    }
    public void setTime(Date time) {
        this.time = time;
    }

    public Date getCreatedDate() {
        return createdAt;
    }
    public void setCreatedDate(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getCancelledAt() {
        return cancelledAt;
    }
    public void setCancelledAt(Date cancelledAt) {
        this.cancelledAt = cancelledAt;
    }

}
