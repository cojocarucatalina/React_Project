package com.mobile.de.repository;

import com.mobile.de.model.Cart;
import com.mobile.de.model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart,Long> {

    void deleteByUserId(Long userId);

}
