package com.mobile.de.controller;

import com.mobile.de.exception.MessageNotFoundException;
import com.mobile.de.model.MessageNew;
import com.mobile.de.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class MessageController {

    @Autowired
    private MessageRepository messageRepository;

    @PostMapping("/message")
    public MessageNew addMessage(@RequestBody MessageNew newMessage) {
        return messageRepository.save(newMessage);
    }

    @GetMapping("/messages")
    public List<MessageNew> getAllMessages() {
        return messageRepository.findAll();
    }

    @GetMapping("/message/{id}")
    public MessageNew getMessageById(@PathVariable Long id) {
        return messageRepository.findById(id)
                .orElseThrow(() -> new MessageNotFoundException(id));
    }

}
