package com.mobile.de.exception;

public class FavoriteNotFoundException extends RuntimeException{

    public FavoriteNotFoundException(Long id){
        super("Could not find the favorite with id ");
    }

}
