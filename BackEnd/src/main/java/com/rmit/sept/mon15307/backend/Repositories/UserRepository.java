package com.rmit.sept.mon15307.backend.Repositories;

import com.rmit.sept.mon15307.backend.model.UserAccount;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserAccount, Long> {

        UserAccount findByUserId(Long userId);
        UserAccount findByUsername(String username);
        
}