package com.rmit.sept.mon15307.backend.model;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.Collection;
import java.util.Date;

@Entity
public class UserAccount implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonView(UserAccountViews.Public.class)
    private Long userId;

    @NotNull
    @NotBlank
    @JsonView(UserAccountViews.Public.class)
    private String fullName;

    @JsonView(UserAccountViews.Public.class)
    private String preferredName;

    @NotBlank(message = "Password field is required")
    @JsonView(UserAccountViews.Internal.class)
    private String password;

    @Email
    @Column(unique = true)
    @NotNull
    @JsonView(UserAccountViews.Public.class)
    private String username;

    @Pattern(regexp = "[0-9]{10}")
    @NotNull
    @JsonView(UserAccountViews.Public.class)
    private String phoneNumber;

    @NotNull
    @JsonView(UserAccountViews.Internal.class)
    private Boolean isAdmin;

    @NotNull
    @JsonView(UserAccountViews.Internal.class)
    private Boolean isWorker;

    @NotNull
    @JsonView(UserAccountViews.Internal.class)
    private Boolean isCustomer;

    @Transient
    @JsonView(UserAccountViews.Internal.class)
    private String confirmPassword;

    @CreatedDate
    private Date createdAt;

    @LastModifiedDate
    private Date updatedAt;

    public UserAccount() {}

    @JsonGetter("id")
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPreferredName(){
        return preferredName;
    }

    public void setPreferredName(String preferredName) {
        this.preferredName = preferredName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public Boolean getAdmin() {
        return isAdmin;
    }

    public void setAdmin(Boolean admin) {
        isAdmin = admin;
    }

    public Boolean getWorker() {
        return isWorker;
    }

    public void setWorker(Boolean worker) {
        isWorker = worker;
    }

    public Boolean getCustomer() {
        return isCustomer;
    }

    public void setCustomer(Boolean customer) {
        isCustomer = customer;
    }

    @JsonGetter("role")
    @JsonView(UserAccountViews.Public.class)
    public String getRole() {
        return this.isAdmin ? "admin" : this.isWorker ? "worker" : "customer";
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = new Date();
    }

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @JsonGetter("email")
    @JsonAlias("username")
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }

     /*
    UserDetails interface methods
     */

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

    public static class UserAccountViews {
        public static class Public {}

        public static class Internal extends Public {}
    }
}
