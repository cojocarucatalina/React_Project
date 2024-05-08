package com.mobile.de.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Cart {


    @Id
    @GeneratedValue
    private Long id;

    private Long userId;
    private Long candleId;
    private String candleModel;

    public Cart(Long id, Long userId, Long candleId, String candleModel) {
        this.id = id;
        this.userId = userId;
        this.candleId = candleId;
        this.candleModel = candleModel;
    }

    public Cart(){

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

    public Long getCandleId() {
        return candleId;
    }

    public void setCandleId(Long candleId) {
        this.candleId = candleId;
    }

    public String getCandleModel() {
        return candleModel;
    }

    public void setCandleModel(String candleModel) {
        this.candleModel = candleModel;
    }
}
