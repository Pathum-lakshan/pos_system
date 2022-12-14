package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

/**
 * ALE IS TER
 * 10/22/2022
 * 1:44 AM
 * pos_system
 * com.example.demo.entity
 * Product
 */

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Product {
  @Id
  @GeneratedValue
  private int product_id;
  private String name,category;
  private int qty;
  private double price;
  @OneToMany(mappedBy = "product")
  private List<OrderDetails> orderDetailsList;
}
