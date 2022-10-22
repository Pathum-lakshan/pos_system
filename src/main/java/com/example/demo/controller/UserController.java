package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "api/v1/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

  @GetMapping("/login")
  public UserDTO isUserExists (@RequestParam(value = "username",required = false) String username , @RequestParam(value = "password",required = false) String password){
    return userService.isUserExists(username,password);
  }
}
