package com.example.demo.controller;


import com.example.demo.dto.ProductDTO;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


/**
 * ALE IS TER
 * 10/26/2022
 * 10:17 AM
 * pos_system
 * com.example.demo.controller
 * ProductController
 */


@RestController
@RequestMapping(value = "api/v1/product")
@CrossOrigin

public class ProductController {

  @Autowired
  private ProductService productService;
  @PostMapping("/save")
  public boolean save(@RequestBody ProductDTO productDTO){
    return productService.saveProduct(productDTO);
  }
}
