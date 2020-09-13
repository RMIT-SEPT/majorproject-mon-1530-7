package com.rmit.sept.mon15307.backend.services;

import com.rmit.sept.mon15307.backend.Repositories.UserRepository;
import com.rmit.sept.mon15307.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User findByUserId(String userId) {
        User user = userRepository.findByUserId(Long.parseLong(userId));

        if (user == null) {
            // TODO: custom exception
            throw new RuntimeException("User ID '" + userId + "' does not exist");
        }

        return user;
    }

    public boolean AuthenticateUser(Long userId, String email) {
        User user = userRepository.findByUserId(userId);
        if(user.getEmail() == email) {
            return true;
        }
        else {
            return false;
        }
    }
}
