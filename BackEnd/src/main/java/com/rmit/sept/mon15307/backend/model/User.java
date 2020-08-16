package com.rmit.sept.mon15307.backend.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String preferedName;
    private String email;

    private Boolean isAdmin;
    private Boolean isWorker;
    private Boolean isCustomer;

    //Future Milestones.
//    private Booking booking;
//    private List<Booking> pastBooking;
//    private List<Booking> upcomingBooking;

    private Date created_At;
    private Date updated_At;
    private Date last_Login;

    public User(){

    }

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getFullName(){
        return fullName;
    }

    public void setFullName(String fullName){
        this.fullName = fullName;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getPreName(){
        return preferedName;
    }

    public void setPreName(String preferedName){
        this.preferedName = preferedName;
    }

    public Boolean getAdmin(){
        return isAdmin;
    }

    public void setAdmin(Boolean isAdmin){
        this.isAdmin = isAdmin;
    }

    public Boolean getWorker(){
        return isWorker;
    }

    public void setWorker(Boolean isWorker){
        this.isWorker = isWorker;
    }

    public Boolean getCustomer(){
        return isCustomer;
    }

    public void setCustomer(Boolean isCustomer){
        this.isCustomer = isCustomer;
    }

    public Date getCreated_At(){
        return created_At;
    }

    public void setCreated_At(Date created_At){
        this.created_At = created_At;
    }

    public Date getUpdated_At(){
        return updated_At;
    }

    public void setUpdated_At(Date updated_At){
        this.updated_At = updated_At;
    }

    public Date getLast_Login(){
        return last_Login;
    }

    public void setLast_Login(Date last_Login){
        this.last_Login = last_Login;
    }

    @PrePersist
    protected void onCreate(){
        this.created_At = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.updated_At = new Date();
    }




}
