package com.wp.Backend.impl;

import com.wp.Backend.Dto.LoginDto;
import com.wp.Backend.Dto.UserDto;
import com.wp.Backend.Entity.User;
import com.wp.Backend.repo.UserRepo;
import com.wp.Backend.response.LoginResponse;
import com.wp.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public int addUser(UserDto userDto) {

        User user = new User(
                userDto.getUser_id(),
                userDto.getEmail(),
                this.passwordEncoder.encode(userDto.getPassword())
        );

        userRepo.save(user);



        return user.getUser_id();
    }
    
    private UserDto userDto;

    @Override
    public LoginResponse loginUser(LoginDto loginDto) {
        String msg = "";

        User user1 = userRepo.findByEmail(loginDto.getEmail());
        if (user1 != null) {
            String password = loginDto.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepo.findOneByEmailAndPassword(loginDto.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {

                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
        }


    }

    @Override
    public Integer findUser(LoginDto loginDto) {
        User user1 = userRepo.findByEmail(loginDto.getEmail());
        if (user1 != null) {
            String password = loginDto.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepo.findOneByEmailAndPassword(loginDto.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    return user.get().getUser_id();
                } else {
                    return -1;
                }
            } else {

                return -1;
            }
        }else {
            return -1;
        }
    }
}
