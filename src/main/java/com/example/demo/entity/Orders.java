package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

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
  @CreationTimestamp
  private Date order_date;
  private int total_qty;
  private double total_amount;
  @ManyToOne
  @JoinColumn(name = "cus_id")
  private Customers customers;
  @OneToMany(mappedBy = "orders")
  private List<OrderDetails> orderDetailsList;

}
