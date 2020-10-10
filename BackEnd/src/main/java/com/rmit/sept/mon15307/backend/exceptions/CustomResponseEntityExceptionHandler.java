package com.rmit.sept.mon15307.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    private final ResponseEntity<Object> handleCustomException(
        Exception ex, HttpStatus httpStatus
    ) {
        return new ResponseEntity<>(new CustomErrorResponse(ex.getMessage()), httpStatus);
    }

    @ExceptionHandler
    public final ResponseEntity<Object> handleProjectIdException(
        UserException ex, WebRequest request
    ) {
        UserIdExceptionResponse exceptionResponse = new UserIdExceptionResponse(ex.getMessage());
        return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public final ResponseEntity<Object> handleUsernameAlreadyExists(
        UsernameAlreadyExistsException ex, WebRequest request
    ) {
        UsernameAlreadyExistsResponse exceptionResponse =
            new UsernameAlreadyExistsResponse(ex.getMessage());
        return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public final ResponseEntity<Object> handleBookingException(BookingException ex) {
        return this.handleCustomException(ex, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public final ResponseEntity<Object> handleNotFoundException(NotFoundException ex) {
        return this.handleCustomException(ex, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    public final ResponseEntity<Object> handleNotAuthorisedException(NotAuthorisedException ex) {
        return this.handleCustomException(ex, HttpStatus.FORBIDDEN);
    }
}

