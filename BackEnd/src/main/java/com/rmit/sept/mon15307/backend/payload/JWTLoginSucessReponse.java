package com.rmit.sept.mon15307.backend.payload;

public class JWTLoginSucessReponse {
    private boolean success;
    private String token;
    private boolean isAdmin;

    public JWTLoginSucessReponse(boolean success, String token, boolean isAdmin) {
        this.success = success;
        this.token = token;
        this.isAdmin = isAdmin;
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
   

    @Override
    public String toString() {
        return "JWTLoginSucessReponse{" +
                "success=" + success +
                ", token='" + token + '\'' +
                '}';
    }
}
