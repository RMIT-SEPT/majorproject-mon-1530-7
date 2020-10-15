package com.rmit.sept.mon15307.backend.web;

import com.rmit.sept.mon15307.backend.model.UserAccount;
import com.rmit.sept.mon15307.backend.payload.JWTLoginSucessReponse;
import com.rmit.sept.mon15307.backend.payload.LoginRequest;
import com.rmit.sept.mon15307.backend.payload.ProfileLoadRequest;
import com.rmit.sept.mon15307.backend.security.JwtTokenProvider;
import com.rmit.sept.mon15307.backend.services.MapValidationErrorService;
import com.rmit.sept.mon15307.backend.services.UserService;
import com.rmit.sept.mon15307.backend.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static com.rmit.sept.mon15307.backend.security.SecurityConstant.TOKEN_PREFIX;

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
    public ResponseEntity<?> authenticateUser(
        @Valid
        @RequestBody
            LoginRequest loginRequest, BindingResult result
    ) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;

        Authentication authentication =
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(),
                                                                                       loginRequest.getPassword()
            ));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX + tokenProvider.generateToken(authentication);
        UserAccount user = userService.findByUsername(loginRequest.getUsername());
        return ResponseEntity.ok(new JWTLoginSucessReponse(true,
                                                           jwt,
                                                           user.getAdmin(),
                                                           user.getUserId().toString()
        ));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserAccount user, BindingResult result){
        userValidator.validate(user,result);

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        UserAccount newUser = userService.saveOrUpdateUser(user);

        return  new ResponseEntity<UserAccount>(newUser, HttpStatus.CREATED);
    }

    @PostMapping("/profile")
    public ResponseEntity<?> getUserDetails(@Valid @RequestBody ProfileLoadRequest profileLoadRequest, BindingResult result) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null)return errorMap;
        UserAccount user = userService.findByUserId(profileLoadRequest.getUsername());

        return new ResponseEntity<UserAccount>(user,HttpStatus.OK);
    }



}