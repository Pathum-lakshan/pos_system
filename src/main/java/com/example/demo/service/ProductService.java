package com.example.demo.service;

import com.example.demo.repo.ProductRepo;
import com.example.demo.repo.UserRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * ALE IS TER
 * 10/26/2022
 * 11:39 PM
 * pos_system
 * com.example.demo.service
 * ProductService
 */
@Service
@Transactional
public class ProductService {
  @Autowired
  private ProductRepo productRepo;
  @Autowired
  private ModelMapper modelMapper;

}
