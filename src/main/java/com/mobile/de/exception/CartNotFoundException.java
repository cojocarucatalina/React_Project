package com.mobile.de.exception;

public class CartNotFoundException extends RuntimeException  {

    public CartNotFoundException(Long id){
        super("Could not find the favorite with id ");
    }

}
