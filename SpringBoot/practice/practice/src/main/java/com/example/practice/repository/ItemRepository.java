package com.example.practice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.practice.entity.Item;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Integer> {
    List<Item> findByitemName(String itemName);
}
