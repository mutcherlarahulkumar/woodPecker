package com.woodpecker.woodpecker.Controller;


import com.woodpecker.woodpecker.Dto.UserDto;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")


public class UserController {


    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody UserDto userDto)
    {
        String id = userService.addUser(userDto);
        return id;
    }


}
