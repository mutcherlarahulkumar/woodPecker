package com.wp.Backend.response;

public class LoginResponseWithId {
    private LoginResponse loginResponse;
    private Integer userId;

    public LoginResponseWithId(LoginResponse loginResponse, Integer userId) {
        this.loginResponse = loginResponse;
        this.userId = userId;
    }

    // Getters and setters
    public LoginResponse getLoginResponse() {
        return loginResponse;
    }

    public void setLoginResponse(LoginResponse loginResponse) {
        this.loginResponse = loginResponse;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}
