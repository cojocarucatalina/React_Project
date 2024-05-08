package com.mobile.de.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class MessageNew {


    @Id
    @GeneratedValue
    private Long id;

    private Long userId;
    private String message;

    public MessageNew(Long id, Long userId, String message) {
        this.id = id;
        this.userId = userId;
        this.message = message;
    }

    public MessageNew(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}