/*package com.rmit.sept.mon15307.backend;

import static org.assertj.core.api.Assertions.assertThat;

import java.sql.Date;

import com.rmit.sept.mon15307.backend.model.User;
import com.rmit.sept.mon15307.backend.services.UserService;
import com.rmit.sept.mon15307.backend.web.UserController;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeAll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import jdk.internal.jline.internal.TestAccessible;

@SpringBootTest
public class UserAuthenticationTests {

	@Autowired
	private UserController userController;

	private User user;

	@BeforeAll
	public void createBooking() {
		Date date =new Date();
		user = new User(1,"Joel Whitley","Joel","jwhitley@gmail.com","0452165887",false,false,true,date,date,date);
	}

	@Test
	public void contexLoads() throws Exception {
		assertThat(bookingController).isNotNull();
	}

	@Test
	public void userConstraints() throws Exception {
		
		assertThat(u).isNotNull();
	}

	@Test
	public void authUserTest() throws Exception {
		bool valid = userController.AuthenticateUser(user);
		assertThat(valid).isTrue();
    }
    
    @Test
	public void authUserHackTest() throws Exception {
        user.setEmail("dodgyEmail@gmail.com");
        bool valid = userController.AuthenticateUser(user);
		assertThat(valid).isFalse();
	}

}*/