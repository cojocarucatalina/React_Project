package com.mobile.de.exception;

public class HistoryNotFoundException extends RuntimeException{

        public HistoryNotFoundException(Long id){
            super("Could not find the history with id ");
        }

}
