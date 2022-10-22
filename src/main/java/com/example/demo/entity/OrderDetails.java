package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * ALE IS TER
 * 10/22/2022
 * 5:13 AM
 * pos_system
 * com.example.demo.entity
 * OrderDetails
 */

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class OrderDetails {
  @Id
  @GeneratedValue
  private int id;
  @ManyToOne
  @JoinColumn(name = "product_id")
  Product product;
  @ManyToOne
  @JoinColumn(name = "order_id")
  Orders orders;
  private int qty;
}
