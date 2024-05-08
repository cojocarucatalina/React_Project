package com.mobile.de.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

@Entity

public class Candle {

    @Id
    @GeneratedValue
    private Long id;

    private String model;

    private int stock;

    private int price;
    private String distribuitor;

  //  @JoinColumn(name = "user_id") // Name of the foreign key column in the Candle table
  //  private User user;


    public Candle(Long id, String model, int stock, int price, String Distribuitor){
        this.id = id;
        this.model = model;
        this.stock = stock;
        this.price = price;
        this.distribuitor = Distribuitor;

    }

    public Candle() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int km) {
        this.stock = km;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int year) {
        this.price = year;
    }

    public String getDistribuitor() {
        return distribuitor;
    }

    public void setDistribuitor(String type) {
        this.distribuitor = type;
    }


}
