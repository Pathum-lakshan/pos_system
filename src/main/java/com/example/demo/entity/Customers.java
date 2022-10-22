package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

/**
 * ALE IS TER
 * 10/21/2022
 * 8:38 PM
 * pos_system
 * com.example.demo.entity
 * Customers
 */
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Customers {
  @Id
  @GeneratedValue
  private int customer_id;
  private String name,address,contact,nic;
  @OneToMany(mappedBy = "customers" ,fetch = FetchType.LAZY ,orphanRemoval = true,cascade = CascadeType.ALL)
  private List<Orders> orders;
}
