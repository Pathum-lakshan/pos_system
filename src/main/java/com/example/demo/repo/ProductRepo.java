package com.example.demo.repo;

import com.example.demo.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * ALE IS TER
 * 10/26/2022
 * 3:36 PM
 * pos_system
 * com.example.demo.repo
 * ProductRepo
 */
public interface ProductRepo extends JpaRepository<Product, Integer> {
}
