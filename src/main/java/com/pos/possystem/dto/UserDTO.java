package com.pos.possystem.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * ALE IS TER
 * 10/20/2022
 * 12:11 PM
 * pos_system
 * com.pos.possystem.dto
 * UserDTO
 */


@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDTO {
  private int id;
  private String name;
  private String address;
  private boolean rememberMe;
}
