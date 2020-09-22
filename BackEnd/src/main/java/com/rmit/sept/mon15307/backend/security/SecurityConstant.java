package com.rmit.sept.mon15307.backend.security;

public class SecurityConstant {

    public static final String SIGN_UP_URLS = "/api/**";
    public static final String H2_URL = "/h2-console";
    public static final String SECRET ="SecretKeyToGenJWTs";
    public static final String TOKEN_PREFIX= "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final long EXPIRATION_TIME = 30_000; //30 seconds
}
