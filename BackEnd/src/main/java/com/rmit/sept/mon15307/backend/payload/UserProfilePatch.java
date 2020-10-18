package com.rmit.sept.mon15307.backend.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class UserProfilePatch {
    @Email
    String email = null;

    @Size(min=1, max=1024, message="must not be empty")
    String preferredName = null;

    @Size(min=1, max=1024, message="must not be empty")
    String fullName = null;

    @Pattern(regexp = "[0-9]{10}")
    String phoneNumber = null;

    public String getEmail() {
        return email;
    }

    public String getPreferredName() {
        return preferredName;
    }

    public String getFullName() {
        return fullName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }
}
