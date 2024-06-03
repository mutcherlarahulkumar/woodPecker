package com.wp.Backend.service;

import com.wp.Backend.Dto.LoginDto;
import com.wp.Backend.Dto.UserDto;
import com.wp.Backend.response.LoginResponse;
import lombok.Builder;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public int addUser(UserDto userDto);

    public LoginResponse loginUser(LoginDto loginDto);

    public Integer findUser(LoginDto loginDto);
}
