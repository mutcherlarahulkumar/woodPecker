package com.wp.Backend.controller;


import com.wp.Backend.Dto.LoginDto;
import com.wp.Backend.Dto.UserDto;
import com.wp.Backend.response.LoginResponse;
import com.wp.Backend.response.LoginResponseWithId;
import com.wp.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class usercontroller {

    @Autowired
    private UserService userService;



    @PostMapping(path = "/save")
    public int saveUser(@RequestBody UserDto userDto){
        int id = userService.addUser(userDto);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<LoginResponseWithId> loginUser(@RequestBody LoginDto loginDto){
        LoginResponse loginMessage = userService.loginUser(loginDto);
        Integer user_id = userService.findUser(loginDto);

        LoginResponseWithId response = new LoginResponseWithId(loginMessage,user_id);
        return ResponseEntity.ok(response);
    }
}
