package com.rmit.sept.mon15307.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.rmit.sept.mon15307.backend.exceptions.InvalidTimeSlotException;
import com.rmit.sept.mon15307.backend.model.enumeration.BookingStatus;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Booking {
    // open hours: 10am – 5pm
    // TODO: make configurable (new Business layer)
    public static Set<String> permittedTimes = new HashSet<>(Arrays.asList(
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30"
    ));

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @Enumerated(EnumType.STRING)
    private BookingStatus status;

    @ManyToOne(optional = false)
    @NotNull
    private UserAccount customer;

    @ManyToOne(optional = false)
    @NotNull
    private Employee employee;

    @ManyToOne(optional = false)
    @NotNull
    private Product product;

    @ManyToOne(optional = false)
    @NotNull
    private Schedule schedule;

    private String time;

    private Date createdAt;
    private Date cancelledAt;
    private Date completedAt;

    public Booking() {}

    public BookingStatus getStatus() {
        return status;
    }

    public void setStatus(BookingStatus status) {
        this.status = status;
    }

    public Long getBookingId() {
        return bookingId;
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

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        if (!permittedTimes.contains(time)) {
            throw new InvalidTimeSlotException("Time slot not supported");
        }

        this.time = time;
    }

    public Date getCreatedDate() {
        return createdAt;
    }

    public Date getCancelledAt() {
        return cancelledAt;
    }

    public void setCancelledAt(Date cancelledAt) {
        this.cancelledAt = cancelledAt;
    }

    @JsonIgnore
    public LocalDateTime getStartTime() {
        return LocalDateTime.of(this.schedule.getDate(), LocalTime.parse(this.time));
    }

    @JsonIgnore
    public LocalDateTime getEndTime() {
        return LocalDateTime
            .of(this.schedule.getDate(), LocalTime.parse(this.time))
            .plusMinutes(this.product.getDuration());
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @PreUpdate
    public void onUpdate() {
        if (this.status != BookingStatus.CANCELLED) {
            this.cancelledAt = null;
        }

        if (this.status != BookingStatus.COMPLETED) {
            this.completedAt = null;
        }

        if (this.status == BookingStatus.CANCELLED && this.cancelledAt == null) {
            this.cancelledAt = new Date();
        }

        if (this.status == BookingStatus.COMPLETED && this.completedAt == null) {
            this.completedAt = new Date();
        }
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Booking{");
        sb.append("bookingId=").append(bookingId);
        sb.append(", status=").append(status);
        sb.append(", customer=").append(customer);
        sb.append(", employee=").append(employee);
        sb.append(", product=").append(product);
        sb.append(", schedule=").append(schedule);
        sb.append(", time='").append(time).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
