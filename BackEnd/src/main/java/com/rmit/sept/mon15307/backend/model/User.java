package com.rmit.sept.mon15307.backend.model;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @NotBlank
    private String fullName;

    @NotNull
    @NotBlank
    private String preferredName;

    @Email
    @Column(unique = true)
    @NotNull
    private String email;

    @Pattern(regexp = "[0-9]{10}")
    @NotNull
    private String phoneNumber;

    @NotNull
    private Boolean isAdmin;
    @NotNull
    private Boolean isWorker;
    @NotNull
    private Boolean isCustomer;

    //Future Milestones.
//    private Booking booking;
//    private List<Booking> pastBooking;
//    private List<Booking> upcomingBooking;

    @CreatedDate
    @NotNull
    private Date createdAt;
    @LastModifiedDate
    private Date updatedAt;
    private Date lastLogin;

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
        return preferredName;
    }

    public void setPreName(String preferredName){
        this.preferredName = preferredName;
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
        return createdAt;
    }

    public void setCreated_At(Date created_At){
        this.createdAt = created_At;
    }

    public Date getUpdated_At(){
        return updatedAt;
    }

    public void setUpdated_At(Date updated_At){
        this.updatedAt = updated_At;
    }

    public Date getLast_Login(){
        return lastLogin;
    }

    public void setLast_Login(Date last_Login){
        this.lastLogin = last_Login;
    }

    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
}
