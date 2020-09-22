package com.rmit.sept.mon15307.backend.services;

import com.rmit.sept.mon15307.backend.Repositories.UserRepository;
import com.rmit.sept.mon15307.backend.model.UserAccount;
import com.rmit.sept.mon15307.backend.exceptions.UsernameAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

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
            // TODO: custom exception
            throw new RuntimeException("User ID '" + userId + "' does not exist");
        }

        return user;
    }

    public UserAccount findByUsername(String username) {
        UserAccount user = userRepository.findByUsername(username);

        if (user == null) {
            // TODO: custom exception
            throw new RuntimeException("Username '" + username + "' does not exist");
        }

        return user;
    }

    public boolean AuthenticateUser(String userId , String password) {
        UserAccount user = userRepository.findByUserId(Long.parseLong(userId));
        if(user.getPassword() == password) {
            return true;
        }
        else {
            return false;
        }
    }
}
