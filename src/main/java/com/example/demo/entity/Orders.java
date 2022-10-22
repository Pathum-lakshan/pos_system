package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

/**
 * ALE IS TER
 * 10/21/2022
 * 8:23 PM
 * pos_system
 * com.example.demo.entity
 * Orders
 */
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Orders {
  @Id
  @GeneratedValue
  private int order_id;
  private Date order_date;
  private int total_qty;
  private double total_amount;
  @ManyToOne
  @JoinColumn(name="cus_id")
  private Customers customers;
}
