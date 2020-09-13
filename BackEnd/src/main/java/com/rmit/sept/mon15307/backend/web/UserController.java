package com.rmit.sept.mon15307.backend.web;

import com.rmit.sept.mon15307.backend.model.User;
import com.rmit.sept.mon15307.backend.services.MapValidationErrorService;
import com.rmit.sept.mon15307.backend.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

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
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> AuthenticateUser(@RequestParam(value="user", required=true) User user) {

        Boolean valid = userService.AuthenticateUser(user.getUserId(),user.getEmail());

        return new ResponseEntity<Boolean>(valid,HttpStatus.OK);
    }


    
}