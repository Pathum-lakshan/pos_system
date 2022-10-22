package com.example.demo.entity;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * ALE IS TER
 * 10/22/2022
 * 5:13 AM
 * pos_system
 * com.example.demo.entity
 * OrderDetails
 */
public class OrderDetails {
  private int id;
  @ManyToOne
  @JoinColumn(name = "product_id")
  Product product;
  @ManyToOne
  @JoinColumn(name = "order_id")
  Orders orders;
  private int qty;
}
