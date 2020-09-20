package com.rmit.sept.mon15307.backend.model;

import com.rmit.sept.mon15307.backend.model.Schedule;
import com.rmit.sept.mon15307.backend.model.UserAccount;
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

    
   
    @ManyToOne(optional = false)
    @JoinColumn(name = "customer_id", nullable = false)
    private UserAccount customer;

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

    public UserAccount getCustomer() {
        return customer;
    }
    public void setCustomer(UserAccount customer) {
        this.customer = customer;
    }

    public Employee getEmployee() {
        return employee;
    }
    public void setEmployee(Employee employee) {
        this.employee = employee;
    } 

    public Product getProduct() {
        return product;
    }
    public void setProduct(Product product) {
        this.product = product;
    }

    public Schedule getSchedule() {
        return schedule;
    }
    public void setSchedule(Schedule schedule) {
        this.schedule = schedule;
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
