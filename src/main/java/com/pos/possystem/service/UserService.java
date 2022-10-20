package com.pos.possystem.service;

import com.pos.possystem.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * ALE IS TER
 * 10/20/2022
 * 12:15 PM
 * pos_system
 * com.pos.possystem.service
 * UserService
 */

@Service
@Transactional
public class UserService {
  @Autowired
  private UserRepository userRepository;
}
