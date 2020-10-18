package com.rmit.sept.mon15307.backend.services;

import com.rmit.sept.mon15307.backend.Repositories.UserRepository;
import com.rmit.sept.mon15307.backend.exceptions.UserNotFoundException;
import com.rmit.sept.mon15307.backend.exceptions.UsernameAlreadyExistsException;
import com.rmit.sept.mon15307.backend.model.UserAccount;
import com.rmit.sept.mon15307.backend.payload.UserProfilePatch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserAccount saveOrUpdateUser(UserAccount newUser) {

        try{
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));

            newUser.setUsername(newUser.getUsername());

            newUser.setConfirmPassword("");
            return userRepository.save(newUser);

        }catch (Exception e){
            throw new UsernameAlreadyExistsException("Username '"+newUser.getUsername()+"' already exists");
        }

    }

    

    public UserAccount findByUserId(String userId) {
        UserAccount user = userRepository.findByUserId(Long.parseLong(userId));

        if (user == null) {
            throw new UserNotFoundException("User ID '" + userId + "' not found");
        }

        return user;
    }

    public UserAccount findByUsername(String username) {
        UserAccount user = userRepository.findByUsername(username);

        if (user == null) {
            throw new UserNotFoundException("Username '" + username + "' not found");
        }

        return user;
    }

    public boolean AuthenticateUser(String userId, String password) {
        UserAccount user = userRepository.findByUserId(Long.parseLong(userId));
        if (user.getPassword() == password) {
            return true;
        } else {
            return false;
        }
    }

    public UserAccount editUser(UserAccount user, UserProfilePatch patch) {
        if (patch.getPreferredName() != null) {
            user.setPreferredName(patch.getPreferredName());
        }

        if (patch.getEmail() != null) {
            user.setUsername(patch.getEmail());
        }

        if (patch.getFullName() != null) {
            user.setFullName(patch.getFullName());
        }

        if (patch.getPhoneNumber() != null) {
            user.setPhoneNumber(patch.getPhoneNumber());
        }

        return userRepository.save(user);
    }
}
