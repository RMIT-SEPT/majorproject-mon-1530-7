package com.rmit.sept.mon15307.backend.model;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @CreatedDate
    private Date createdAt;

    @NotNull
    @LastModifiedDate
    private Date updatedAt;

    @OneToOne(optional = false)
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private UserAccount user;

    @ManyToMany
    @JoinTable(name = "employee_products")
    @JsonIgnore
    private List<Product> products;

    @OneToMany
    @JsonIgnore
    private List<Schedule> schedules;

    public boolean isScheduled(Date date) {
        // Inefficient but that's fine because there won't be much data to search
        // through

        if (this.schedules == null) {
            return false;
        }

        for (Schedule schedule : this.schedules) {
            if (schedule.getDate().equals(date) && schedule.isScheduled()) {
                return true;
            }
        }

        return false;
    }

    public String getId() {
        return id.toString();
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @JsonGetter("name")
    public String getName() {
        return this.user.getPreferredName();
    }

    @JsonGetter("phoneNumber")
    public String getPhoneNumber() {
        return this.user.getPhoneNumber();
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public List<Schedule> getSchedules() {
        return this.schedules;
    }

    public void setSchedules(List<Schedule> schedules) {
        this.schedules = schedules;
    }

    @JsonGetter("scheduledToday")
    public boolean getScheduledToday() {
        Date today = new Date();
        return this.isScheduled(today);
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = new Date();
    }
}
