package com.mobile.de.exception;

public class MessageNotFoundException extends RuntimeException{

    public MessageNotFoundException(Long id){
        super("Could not find the message with id ");
    }

}
