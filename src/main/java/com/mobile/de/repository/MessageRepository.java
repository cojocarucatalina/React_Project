package com.mobile.de.repository;

import com.mobile.de.model.MessageNew;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<MessageNew,Long> {

}
