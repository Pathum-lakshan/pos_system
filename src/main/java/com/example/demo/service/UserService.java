package com.example.demo.service;

import com.example.demo.dto.UserDTO;
import com.example.demo.entity.User;
import com.example.demo.repo.UserRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * ALE IS TER
 * 10/16/2022
 * 9:45 AM
 * Spring-Boot-Demo-Test
 * com.example.demo.service
 * UserService
 */
@Service
@Transactional
public class UserService {
  @Autowired
  private UserRepo userRepo;
  @Autowired
  private ModelMapper modelMapper;

  public UserDTO isUserExists(String username, String password) {
    User userByUsername = userRepo.getUserByUsername(username, password);

    if (userByUsername != null) {
      return modelMapper.map(userByUsername, UserDTO.class);
    } else {
      return new UserDTO();
    }

  }

}
