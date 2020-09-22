package com.rmit.sept.mon15307.backend.exceptions;

import com.rmit.sept.mon15307.backend.model.UserAccount;

public class UserIdExceptionResponse {
    private String userIdentifier;

    public UserIdExceptionResponse(String projectIdentifier) {
        this.userIdentifier = projectIdentifier;
    }

    public String getUserIdentifier() {
        return userIdentifier;
    }

    public void setUserIdentifier(String userIdentifier) {
        this.userIdentifier = userIdentifier;
    }
}

