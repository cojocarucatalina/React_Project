package com.mobile.de.controller;

import com.mobile.de.exception.HistoryNotFoundException;
import com.mobile.de.model.Candle;
import com.mobile.de.model.History;
import com.mobile.de.repository.CandleRepository;
import com.mobile.de.repository.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class HistoryController {

    @Autowired
    private HistoryRepository historyRepository;

    @PostMapping("/history")
    History addHistory(@RequestBody History newHistory) {
        return historyRepository.save(newHistory);
    }

    @GetMapping("/historys")
    List<History> getAllHistorys() {
        return historyRepository.findAll();
    }

    @GetMapping("/history/{id}")
    History getHistoryById(@PathVariable Long id) {
        return historyRepository.findById(id)
                .orElseThrow(() -> new HistoryNotFoundException(id));
    }

}
