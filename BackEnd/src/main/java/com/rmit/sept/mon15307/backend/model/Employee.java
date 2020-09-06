package com.rmit.sept.mon15307.backend.model;

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

    // Pending rebase
    //     @OneToOne(optional = false)
    //     @JoinColumn(name="user_id");
    //     private User user;

    @ManyToMany
    @JoinTable(name = "employee_products")
    private List<Product> products;

    @OneToMany
    private List<Schedule> schedules;

    public boolean isScheduled(Date date) {
        // Inefficient but that's fine because there won't be much data to search through
        for (Schedule schedule : this.schedules) {
            if (schedule.getDate().equals(date) && schedule.isScheduled()) {
                return true;
            }
        }

        return false;
    }
}
