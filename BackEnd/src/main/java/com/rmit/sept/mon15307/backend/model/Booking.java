package com.rmit.sept.mon15307.backend.model;

import com.rmit.sept.mon15307.backend.model.Schedule;
//import com.rmit.sept.mon15307.backend.model.User;
import com.rmit.sept.mon15307.backend.model.Product;
import com.rmit.sept.mon15307.backend.model.Employee;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import com.fasterxml.jackson.annotation.*;
import com.rmit.sept.mon15307.backend.model.enumeration.BookingStatus;

import java.util.Date;



@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   @NotBlank(message = "Booking ID is required")
    private Long bookingId;

    @Enumerated(EnumType.STRING)
    private BookingStatus status;

    
    /* User model must be finished and rebased onto this branch before these are functional,
    customerId is a temporary filler
    @ManyToOne(optional = false)
    @JoinColumn(name = "customer_id", nullable = false)
    private User customer;*/

    private String customerId;

    @ManyToOne(optional = false)
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee employee;
    @ManyToOne(optional = false)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @ManyToOne(optional = false)
    @JoinColumn(name = "schedule_id", nullable = false)
    private Schedule schedule;

    @JsonFormat(pattern = "hh-mm")
    private Date time;
    private Date createdAt;
    private Date cancelledAt;
    private Date completedAt;
    

    public Booking() {
    }
    public Long getBookingId() {
        return bookingId;
    }

    public void setBookingId(Long bookingId) {
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

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }
}
