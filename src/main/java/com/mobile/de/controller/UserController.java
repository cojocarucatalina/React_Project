
package com.mobile.de.controller;

import com.mobile.de.exception.CandleNotFoundExcption;
import com.mobile.de.exception.UserNotFoundException;
import com.mobile.de.model.Candle;
import com.mobile.de.model.User;
import com.mobile.de.model.UserRole;
import com.mobile.de.repository.CandleRepository;
import com.mobile.de.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {

        newUser.setUserRole(UserRole.USER);
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));


    }


    @GetMapping("/userEmail/{email}")
    Optional<User> getUserByEmail(@RequestParam String email, @RequestParam String password) {
        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();

            // Check if the provided password matches the user's password
            if (password.equals(user.getPassword())) {
                return optionalUser;
            }
        }
        return Optional.empty();
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return  "User with id "+id+" has been deleted success.";
    }

    @GetMapping(value = "/role")
    public UserRole role(@RequestParam String email, @RequestParam String password) {
        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();

            if (user.getPassword().equals(password)) {
                return user.getUserRole();
            }
        }
        return optionalUser.get().getUserRole();
    }

    @Autowired
    private CandleRepository candleRepository;

//    @PostMapping("/login")
//    public ResponseEntity<User> loginUser(@RequestParam String email, @RequestParam String password) {
//        Optional<User> optionalUser = userRepository.findByEmail(email);
//
//        if (optionalUser.isPresent()) {
//            User user = optionalUser.get();
//
//            if (password.equals(user.getPassword())) {
//                return ResponseEntity.ok(user);
//            }
//        }
//        return ResponseEntity.notFound().build();
//    }


//    @PostMapping("/login")
//    public ResponseEntity<User> loginUser(@RequestBody Map<String, String> loginRequest) {
//        String email = loginRequest.get("email");
//        String password = loginRequest.get("password");
//
//        Optional<User> optionalUser = userRepository.findByEmail(email);
//
//        if (optionalUser.isPresent()) {
//            User user = optionalUser.get();
//
//            if (password.equals(user.getPassword())) {
//                return ResponseEntity.ok(user); // 200 OK
//            }
//        }
//        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); // 401 Unauthorized
//    }


    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestParam String email, @RequestParam String password) {
        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();

            if (password.equals(user.getPassword())) {
                return ResponseEntity.ok(user); // Return the user if email and password match
            }
        }

        return ResponseEntity.notFound().build();
    }


    @GetMapping("/user/{userId}/favorites")
    List<Candle> getAllCandlesForUser(@PathVariable Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));
        return user.getFavoriteCandles();
    }

    @PostMapping("/user/{userId}/favorites")
    ResponseEntity<?> addCandleToUserFavorites(@PathVariable Long userId, @RequestBody Candle newCandle) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));

        // Add the new candle to the user's list of favorite candles
        user.getFavoriteCandles().add(newCandle);
        userRepository.save(user);

        return ResponseEntity.ok().build();
    }

/*
    @GetMapping("/favorite/{id}")
    Candle getCandleById(@PathVariable Long id) {
        return candleRepository.findById(id)
                .orElseThrow(() -> new CandleNotFoundExcption(id));
    }

    @PutMapping("/favorite/{id}")
    Candle updateCandle(@RequestBody Candle newCandle, @PathVariable Long id) {
        return candleRepository.findById(id)
                .map(candle -> {
                   // candle.setModel(newCandle.setModel());
                    // Update other properties as needed
                    return candleRepository.save(candle);
                }).orElseThrow(() -> new CandleNotFoundExcption(id));
    }

    @DeleteMapping("/favorite/{id}")
    String deleteCandle(@PathVariable Long id) {
        if (!candleRepository.existsById(id)) {
            throw new CandleNotFoundExcption(id);
        }
        candleRepository.deleteById(id);
        return "Candle with id " + id + " has been deleted successfully.";
    }*/
/*
    @PostMapping("/user/{userId}/add-to-cart")
    ResponseEntity<?> addCandlesToUserCart(@PathVariable Long userId, @RequestBody List<Candle> newCandles) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));

        // Add the new candles to the user's cart
        user.getInCart().addAll(newCandles);
        userRepository.save(user);
        System.out.println(userId);

        return ResponseEntity.ok().build();
    }
*/

    @PostMapping("/user/{userId}/add-to-cart")
    ResponseEntity<?> addCandleToUserCart(@PathVariable Long userId, @RequestBody Candle newCandle) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));

        // Add the new candle to the user's cart
        user.getInCart().add(newCandle);
        userRepository.save(user);
        System.out.println(userId + newCandle.getId());


        return ResponseEntity.ok().build();
    }

    @PostMapping("/user/{userId}/add-to-fav")
    ResponseEntity<?> addCandleToUserFav(@PathVariable Long userId, @RequestBody Candle newCandle) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));

        // Add the new candle to the user's cart
        user.getFavoriteCandles().add(newCandle);
        userRepository.save(user);
        System.out.println(userId + newCandle.getId());


        return ResponseEntity.ok().build();
    }

    @GetMapping("/user/{userId}/cart")
    ResponseEntity<List<Candle>> getCandlesInUserCart(@PathVariable Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));

        List<Candle> candlesInCart = user.getInCart();

        return ResponseEntity.ok(candlesInCart);
    }

//    @GetMapping("/customerEmail")
//    Optional<User> getCustomerByEmail(@RequestParam String email, @RequestParam String password) {
//        Optional<User> optionalCustomer = userRepository.findByEmail(email);
//
//        if (optionalCustomer.isPresent()) {
//            User customer = optionalCustomer.get();
//
//            // Check if the provided password matches the customer's password
//            if (password.equals(customer.getPassword())) {
//                return optionalCustomer;
//            }
//        }
//        return Optional.empty();
//    }

    /*

    Endpoints are provided to add, retrieve, update, and delete favorite items.
@PostMapping("/user/{userId}/favorite") adds a new favorite item for a specific user.
@GetMapping("/user/{userId}/favorites") retrieves all favorite items for a specific user.
@GetMapping("/favorite/{id}") retrieves a specific favorite item by its ID.
@PutMapping("/favorite/{id}") updates an existing favorite item.
@DeleteMapping("/favorite/{id}") deletes a favorite item by its ID.

     */
}
