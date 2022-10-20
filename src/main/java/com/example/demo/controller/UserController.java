package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

  @GetMapping("/login")
  public boolean testRequestParams (@RequestParam(value = "username") String username , @RequestParam(value = "password") String password){
    return userService.isUserExists(username).getPassword().equals(password);
  }
}
