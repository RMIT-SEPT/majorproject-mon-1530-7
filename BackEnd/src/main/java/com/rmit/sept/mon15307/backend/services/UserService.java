package com.rmit.sept.mon15307.backend.services;

import com.rmit.sept.mon15307.backend.Repositories.UserRepository;
import com.rmit.sept.mon15307.backend.model.User;
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

    public User saveOrUpdateUser(User newUser) {

        try{
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
           
            newUser.setUsername(newUser.getUsername());
            
            newUser.setConfirmPassword("");
            return userRepository.save(newUser);

        }catch (Exception e){
            throw new UsernameAlreadyExistsException("Username '"+newUser.getUsername()+"' already exists");
        }

    }

    

    public User findByUserId(String userId) {
        User user = userRepository.findByUserId(Long.parseLong(userId));

        if (user == null) {
            // TODO: custom exception
            throw new RuntimeException("User ID '" + userId + "' does not exist");
        }

        return user;
    }

    public boolean AuthenticateUser(String userId , String password) {
        User user = userRepository.findByUserId(Long.parseLong(userId));
        if(user.getPassword() == password) {
            return true;
        }
        else {
            return false;
        }
    }
}
