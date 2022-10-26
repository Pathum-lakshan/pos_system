package com.example.demo.dto;

import com.example.demo.entity.OrderDetails;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * ALE IS TER
 * 10/26/2022
 * 11:44 PM
 * pos_system
 * com.example.demo.dto
 * ProductDTO
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductDTO {
  private int product_id;
  private String name, category;
  private int qty;
  private double price;
  private List<OrderDetails> orderDetailsList;
}
