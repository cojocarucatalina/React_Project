package com.mobile.de.repository;

import com.mobile.de.model.Candle;
import com.mobile.de.model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoriteRepository extends JpaRepository<Favorite,Long> {

}
