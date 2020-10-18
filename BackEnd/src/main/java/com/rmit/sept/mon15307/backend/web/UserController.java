package com.rmit.sept.mon15307.backend.web;

import com.fasterxml.jackson.annotation.JsonView;
import com.rmit.sept.mon15307.backend.exceptions.UserNotAuthorisedException;
import com.rmit.sept.mon15307.backend.model.UserAccount;
import com.rmit.sept.mon15307.backend.payload.JWTLoginSucessReponse;
import com.rmit.sept.mon15307.backend.payload.LoginRequest;
import com.rmit.sept.mon15307.backend.payload.UserProfilePatch;
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
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null)
            return errorMap;

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX + tokenProvider.generateToken(authentication);
        UserAccount user = userService.findByUsername(loginRequest.getUsername());
        return ResponseEntity.ok(new JWTLoginSucessReponse(true, jwt, user.getAdmin(), user.getUserId().toString()));
    }

    @JsonView(UserAccount.UserAccountViews.Public.class)
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserAccount user, BindingResult result) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null)
            return errorMap;

        userValidator.validate(user, result);
        UserAccount newUser = userService.saveOrUpdateUser(user);

        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @JsonView(UserAccount.UserAccountViews.Public.class)
    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserDetails(@PathVariable Long userId, @AuthenticationPrincipal UserAccount user) {
        UserAccount targetUser = userService.findByUserId(userId.toString());

        boolean userIsAuthorised = user.getAdmin() || user.getWorker() || user.getUserId().equals(userId);
        if (!userIsAuthorised) {
            throw new UserNotAuthorisedException("Permission denied");
        }

        Map<String, UserAccount> response = new HashMap<>();
        response.put("user", targetUser);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @JsonView(UserAccount.UserAccountViews.Public.class)
    @PatchMapping("/profile")
    public ResponseEntity<?> editUserDetails(@Valid @RequestBody UserProfilePatch userProfilePatch,
            BindingResult result, @AuthenticationPrincipal UserAccount user) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null)
            return errorMap;

        UserAccount updatedUser = userService.editUser(user, userProfilePatch);

        Map<String, UserAccount> response = new HashMap<>();
        response.put("user", updatedUser);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}