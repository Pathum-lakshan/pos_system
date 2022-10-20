package com.pos.possystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * ALE IS TER
 * 10/20/2022
 * 12:09 PM
 * pos_system
 * com.pos.possystem.entity
 * User
 */

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
  @Id
  private int id;
  private String name;
  private String address;
  private boolean rememberMe;
}
