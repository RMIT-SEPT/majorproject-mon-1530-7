package com.rmit.sept.mon15307.backend.web;

import com.rmit.sept.mon15307.backend.model.Employee;
import com.rmit.sept.mon15307.backend.model.EmployeeAvailability;
import com.rmit.sept.mon15307.backend.model.UserAccount;
import com.rmit.sept.mon15307.backend.payload.JWTLoginSucessReponse;
import com.rmit.sept.mon15307.backend.payload.LoginRequest;
import com.rmit.sept.mon15307.backend.payload.ProfileLoadRequest;
import com.rmit.sept.mon15307.backend.security.JwtTokenProvider;
import com.rmit.sept.mon15307.backend.services.BookingService;
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
import java.util.HashMap;
import java.util.Map;

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
        Boolean adminStatus = userService.findByUsername(loginRequest.getUsername()).getAdmin();
        return ResponseEntity.ok(new JWTLoginSucessReponse(true, jwt,adminStatus));
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
        UserAccount user = userService.findByUsername(profileLoadRequest.getUsername());

        return new ResponseEntity<UserAccount>(user,HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> createNewEmployee(
            @Valid
            @RequestBody
                    ProfileLoadRequest profileRequest,
            BindingResult result,
            @AuthenticationPrincipal
                    UserAccount user
    ) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;

        Map<String, Map<String, String>> errorResponse = new HashMap<>();
        Map<String, String> errorMessage = new HashMap<>();

        // entities
        UserAccount admin;
        UserAccount newUser;
        EmployeeAvailability weeklyAvailabilty;
        Employee newEmployee;

        try {
            admin = userService.findByUsername(profileRequest.getUsername());
        } catch (NotFoundException e) {
            errorMessage.put("message", e.getMessage());
            errorResponse.put("error", errorMessage);
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }

        // admin must be the same as inputted user AND must be admin
        if (!user.getUserId().equals(admin.getUserId()) && user.getAdmin()) {
            errorMessage.put("message", "Action not permitted for non Admin Accounts");
            errorResponse.put("error", errorMessage);
            return new ResponseEntity<>(errorResponse, HttpStatus.FORBIDDEN);
        }

        newUser = new UserAccount();
        newEmployee = new Employee();

        BookingService bookingService = new BookingService();
        weeklyAvailabilty = new EmployeeAvailability(newEmployee, bookingService);

        //Filling In User Details for new Employee
        newUser.setAdmin(false);
        newUser.setCustomer(false);
        newUser.setWorker(true);

        //Default Use Admins Number
        newUser.setPhoneNumber(admin.getPhoneNumber());

        //Default Password
        newUser.setPassword("1234");
        newUser.setConfirmPassword("1234");

        //WEB INPUT
        newUser.setFullName();
        newUser.setPreferredName();
        newUser.setUsername();//Must be unique


        //Employee Details
        newEmployee.setUser(newUser);


        //SOMEHOW GET INPUTTED FRONT END DATES TO ADD TO WEEKLY AVAILABLITY
        //if(inputted monday){}
        weeklyAvailabilty.setAvailableMonday();



        UserService.saveOrUpdateUser(newUser);

        Map<String, String> response = new HashMap<>();
        response.put("user_id", user.getUserId().toString());

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


    
}