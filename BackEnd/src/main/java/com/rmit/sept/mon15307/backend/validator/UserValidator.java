package com.rmit.sept.mon15307.backend.validator;


import com.rmit.sept.mon15307.backend.model.UserAccount;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class UserValidator implements Validator {

    @Override
    public boolean supports(Class<?> aClass) {
        return UserAccount.class.equals(aClass);
    }

    @Override
    public void validate(Object object, Errors errors) {

        UserAccount user = (UserAccount) object;

        if(user.getPassword().length() <6){
            errors.rejectValue("password","Length", "Password must be at least 6 characters");
        }

        if(!user.getPassword().equals(user.getConfirmPassword())){
            errors.rejectValue("confirmPassword","Match", "Passwords don't match");

        }
        if(user.getAdmin()) {      
            errors.rejectValue("admin","Match","must be a customer");
        }
        if(user.getWorker()) {
            errors.rejectValue("worker","Match","must be a customer");
        }

    



    }
}
