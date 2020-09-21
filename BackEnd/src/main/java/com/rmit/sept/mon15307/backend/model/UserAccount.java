package com.rmit.sept.mon15307.backend.model;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Collection;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

@Entity
public class UserAccount implements UserDetails{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @NotNull
    @NotBlank
    private String fullName;

    
    private String preferredName;
    @NotBlank(message = "Password field is required")
    private String password;

    @Email
    @Column(unique = true)
    @NotNull
    private String username;

    @Pattern(regexp = "[0-9]{10}")
    @NotNull
    private String phoneNumber;

    
    private Boolean isAdmin;
    
    private Boolean isWorker;
    
    private Boolean isCustomer;
    @Transient
    private String confirmPassword;
    //Future Milestones.
//    private Booking booking;
//    private List<Booking> pastBooking;
//    private List<Booking> upcomingBooking;

    @CreatedDate
    private Date createdAt;
    @LastModifiedDate
    private Date updatedAt;
    private Date lastLogin;

    public UserAccount(){

    }

    public Long getUserId(){
        return userId;
    }

    public void setUserId(Long userId){
        this.userId = userId;
    }

    public String getFullName(){
        return fullName;
    }

    public void setFullName(String fullName){
        this.fullName = fullName;
    }

    public String getUsername(){
        return username;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public String getPreName(){
        return preferredName;
    }

    public void setPreName(String preferredName){
        this.preferredName = preferredName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
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

     /*
    UserDetails interface methods
     */

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return true;
    }
}
