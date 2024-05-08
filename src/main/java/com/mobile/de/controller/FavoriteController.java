package com.mobile.de.controller;

import com.mobile.de.exception.FavoriteNotFoundException;
import com.mobile.de.model.Candle;
import com.mobile.de.model.Favorite;
import com.mobile.de.repository.CandleRepository;
import com.mobile.de.repository.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class FavoriteController {

    @Autowired
    private FavoriteRepository favoriteRepository;

    @PostMapping("/favorite")
    Favorite addFavorite(@RequestBody Favorite newFavorite) {
        return favoriteRepository.save(newFavorite);
    }

    @GetMapping("/favorites")
    List<Favorite> getAllFavorites() {
        return favoriteRepository.findAll();
    }

    @GetMapping("/favorite/{id}")
    Favorite getFavoriteById(@PathVariable Long id) {
        return favoriteRepository.findById(id)
                .orElseThrow(() -> new FavoriteNotFoundException(id));
    }

}
