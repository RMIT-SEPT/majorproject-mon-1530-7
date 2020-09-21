package com.rmit.sept.mon15307.backend.web;

import com.rmit.sept.mon15307.backend.model.UserAccount;
import com.rmit.sept.mon15307.backend.services.MapValidationErrorService;
import com.rmit.sept.mon15307.backend.services.UserService;
import com.rmit.sept.mon15307.backend.validator.UserValidator;
import com.rmit.sept.mon15307.backend.security.JwtTokenProvider;
import com.rmit.sept.mon15307.backend.payload.LoginRequest;
import com.rmit.sept.mon15307.backend.payload.JWTLoginSucessReponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import static com.rmit.sept.mon15307.backend.security.SecurityConstant.TOKEN_PREFIX;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserValidator userValidator;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX +  tokenProvider.generateToken(authentication);

        return ResponseEntity.ok(new JWTLoginSucessReponse(true, jwt));
    }  

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserAccount user, BindingResult result){
        userValidator.validate(user,result);

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        UserAccount newUser = userService.saveOrUpdateUser(user);

        return  new ResponseEntity<UserAccount>(newUser, HttpStatus.CREATED);
    }


    
}