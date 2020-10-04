package com.rmit.sept.mon15307.backend.payload;

public class JWTLoginSucessReponse {
    private boolean success;
    private String token;
    private boolean isAdmin;
    private String userId;

    public JWTLoginSucessReponse(boolean success, String token, boolean isAdmin, String userId) {
        this.success = success;
        this.token = token;
        this.isAdmin = isAdmin;
        this.userId = userId;
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

    public boolean isAdmin() {
        return isAdmin;
    }

    public String getUserId() {
        return userId;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("JWTLoginSucessReponse{");
        sb.append("success=").append(success);
        sb.append(", token='").append(token).append('\'');
        sb.append(", isAdmin=").append(isAdmin);
        sb.append(", userId='").append(userId).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
