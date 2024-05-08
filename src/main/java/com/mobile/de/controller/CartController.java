package com.mobile.de.controller;


import com.mobile.de.exception.CartNotFoundException;
import com.mobile.de.model.Cart;
import com.mobile.de.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//
//@RestController
//@CrossOrigin("http://localhost:3000")
//public class CartController {
//
//    @Autowired
//    private CartRepository cartRepository;
//
//    @PostMapping("/cart")
//    public Cart addCart(@RequestBody Cart newCart) {
//        return cartRepository.save(newCart);
//    }
//
//    @GetMapping("/carts")
//    List<Cart> getAllCarts() {
//        return cartRepository.findAll();
//    }
//
//    @GetMapping("/cart/{id}")
//    Cart getCartById(@PathVariable Long id) {
//        return cartRepository.findById(id)
//                .orElseThrow(() -> new CartNotFoundException(id));
//    }
@RestController
@CrossOrigin("http://localhost:3000")
public class CartController {
//
//    @Autowired
//    private CartRepository cartRepository;
//
//    @PostMapping("/cart")
//    public Cart addCart(@RequestBody Cart newCart) {
//        return cartRepository.save(newCart);
//    }
//
//    @GetMapping("/carts")
//    public List<Cart> getAllCarts() {
//        return cartRepository.findAll();
//    }
//
//    @GetMapping("/cart/{id}")
//    public Cart getCartById(@PathVariable Long id) {
//        return cartRepository.findById(id)
//                .orElseThrow(() -> new CartNotFoundException(id));
//    }

    @Autowired
    private CartRepository cartRepository;

    @PostMapping("/cart")
    public Cart addCart(@RequestBody Cart newCart) {
        return cartRepository.save(newCart);
    }

    @GetMapping("/carts")
    public List<Cart> getAllCarts() {
        return cartRepository.findAll();
    }

    @GetMapping("/cart/{id}")
    public Cart getCartById(@PathVariable Long id) {
        return cartRepository.findById(id)
                .orElseThrow(() -> new CartNotFoundException(id));
    }

    @DeleteMapping("/del-carts")
    public void deleteAllCartsByUserId(@RequestParam Long userId) {
        cartRepository.deleteByUserId(userId);
    }
}