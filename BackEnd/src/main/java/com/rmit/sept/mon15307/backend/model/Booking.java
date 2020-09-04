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
    private String customer_id;
    private String employee_id;
    private String product_id;
    private String schedule_id;
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
        return customer_id;
    }
    
    public void setCustomerId(String customer_id) {
        this.customer_id = customer_id;
    }

    public String getEmployee() {
        return employee_id;
    }
    public void setEmployee(String employee_id) {
        this.employee_id = employee_id;
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

}
