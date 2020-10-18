package com.rmit.sept.mon15307.backend.security;

public class SecurityConstant {

    public static final String SIGN_UP_URL = "/api/user/register";
    public static final String LOGIN_URL = "/api/user/login";
    public static final String H2_URL = "/h2-console";
    public static final String SECRET = "SecretKeyToGenJWTs";
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final long EXPIRATION_TIME = Long.MAX_VALUE;
}
