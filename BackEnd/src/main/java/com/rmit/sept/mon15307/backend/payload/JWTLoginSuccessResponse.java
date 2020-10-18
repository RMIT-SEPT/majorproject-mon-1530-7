package com.rmit.sept.mon15307.backend.payload;

import com.rmit.sept.mon15307.backend.model.UserAccount;

public class JWTLoginSuccessResponse {
    private boolean success;
    private String token;
    private UserAccount user;

    public JWTLoginSuccessResponse(boolean success, String token, UserAccount user) {
        this.success = success;
        this.token = token;
        this.user = user;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getRole() {
        if (user.getAdmin()) {
            return "admin";
        } else if (user.getWorker()) {
            return "worker";
        } else {
            return "customer";
        }
    }

    public String getUserId() {
        return user.getUserId().toString();
    }
}
