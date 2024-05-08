package com.mobile.de.model;

import javax.persistence.*;
import java.util.*;
import java.awt.*;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String name;
    private String email;

    private String password;

    private UserRole userRole;

    @ManyToMany
    private List<Candle> favoriteCandles = new ArrayList<Candle>();

    @ManyToMany
    @JoinTable(name = "user_in_cart",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "candle_id"))
    private List<Candle> inCart = new ArrayList<Candle>();


    public User(Long id, String username, String name, String email, UserRole userRole, List<Candle> favoriteCandles, List<Candle> inCart) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
        this.userRole = userRole;
        this.favoriteCandles = favoriteCandles;
        this.inCart = inCart;
    }

    public User() {

    }

    public List<Candle> getInCart() {
        return inCart;
    }

    public void setInCart(List<Candle> inCart) {
        this.inCart = inCart;
    }

    public List<Candle> getFavoriteCandles() {
        return favoriteCandles;
    }

    public void setFavoriteCandles(List<Candle> favoriteCandles) {
        this.favoriteCandles = favoriteCandles;
    }

    public UserRole getUserRole() {
        return userRole;
    }

    public void setUserRole(UserRole userRole) {
        this.userRole = userRole;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
