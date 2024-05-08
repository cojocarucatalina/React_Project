package com.mobile.de.exception;

public class CandleNotFoundExcption extends RuntimeException {

        public CandleNotFoundExcption(Long id){
            super("Could not find the candle with id " + id);
        }

}
