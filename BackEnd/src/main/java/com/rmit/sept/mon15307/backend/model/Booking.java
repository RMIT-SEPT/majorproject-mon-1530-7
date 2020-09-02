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
    private String customer_id;
    private String staff_id;
    private int booked_time;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date booked_date;
    @JsonFormat(pattern ="yyyy-mm-dd")
    private Date created_At;
    

    public Booking() {
    }

    public String getCustomer() {
        return customer_id;
    }
    public void setCustomer(String customer_id) {
        this.customer_id = customer_id;
    }

    public String getStaff() {
        return staff_id;
    }
    public void setStaff(String staff_id) {
        this.staff_id = staff_id;
    } 

    public Date getBookedDate() {
        return booked_date;
    }
    public void setBookedDate(Date booked_date) {
        this.booked_date = booked_date;
    }

    public Date getCreatedDate() {
        return created_At;
    }
    public void setCreatedDate(Date created_At) {
        this.created_At = created_At;
    }

}
