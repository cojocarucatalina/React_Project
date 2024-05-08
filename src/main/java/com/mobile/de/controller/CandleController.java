/*
package com.mobile.de.controller;

import com.mobile.de.exception.CandleNotFoundException;
import com.mobile.de.model.Car;
import com.mobile.de.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
public class CarController {

    @Autowired
    private CarRepository carRepository;

    @PostMapping("/car")
    Car newCar(@RequestBody Car newCar) {
        return carRepository.save(newCar);
    }

    @GetMapping("/cars")
    List<Car> getAllCandles() {
        return carRepository.findAll();
    }

    @GetMapping("/car/{id}")
    Car getCarById(@PathVariable Long id) {
        return carRepository.findById(id)
                .orElseThrow(() -> new CandleNotFoundException(id));
    }

    @PutMapping("/car/{id}")
    Car updateCar(@RequestBody Car newCar, @PathVariable Long id) {
        return carRepository.findById(id)
                .map(candle -> {
                    candle.setModel(newCar.getModel());
                    candle.setKm(newCar.getKm());
                    candle.setType(newCar.getType());
                    candle.setGearbox(newCar.getGearbox());
                    candle.setYear(newCar.getYear());
                    return carRepository.save(candle);
                }).orElseThrow(() -> new CandleNotFoundException(id));
    }

    @DeleteMapping("/car/{id}")
    String deleteCar(@PathVariable Long id){
        if(!carRepository.existsById(id)){
            throw new CandleNotFoundException(id);
        }
        carRepository.deleteById(id);
        return  "Car with id "+id+" has been deleted success.";
    }
}
*/
package com.mobile.de.controller;
import com.mobile.de.model.Candle;
import com.mobile.de.model.Candle;
import com.mobile.de.repository.CandleRepository;
import com.mobile.de.repository.CandleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import com.mobile.de.exception.CandleNotFoundExcption;

@RestController
@CrossOrigin("http://localhost:3000")
public class CandleController {
    @Autowired
    private CandleRepository candleRepository;

    @PostMapping("/candle")
    Candle newCandle(@RequestBody Candle newCandle) {

        //newCandle.setCandleRole(CandleRole.USER);
        return candleRepository.save(newCandle);
    }

    @GetMapping("/candles")
    List<Candle> getAllCandles() {
        return candleRepository.findAll();
    }

    @GetMapping("/candle/{id}")
    Candle getCandleById(@PathVariable Long id) {
        return candleRepository.findById(id)
                .orElseThrow(() -> new CandleNotFoundExcption(id));
    }


    @PutMapping("/candle/{id}")
    Candle updateCandle(@RequestBody Candle newCandle, @PathVariable Long id) {
        return candleRepository.findById(id)
                .map(candle -> {
                    candle.setModel(newCandle.getModel());
                    candle.setPrice(newCandle.getPrice());
                    candle.setStock(newCandle.getStock());
                    return candleRepository.save(candle);
                }).orElseThrow(() -> new CandleNotFoundExcption(id));
    }

    @DeleteMapping("/candle/{id}")
    String deleteCandle(@PathVariable Long id){
        if(!candleRepository.existsById(id)){
            throw new CandleNotFoundExcption(id);
        }
        candleRepository.deleteById(id);
        return  "Candle with id "+id+" has been deleted success.";
    }


}


