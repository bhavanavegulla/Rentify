package com.example.rentify.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.rentify.model.Property;

public interface PropertyRepository extends JpaRepository<Property, Long> {
    List<Property> findByUserId(Long userId);
}
