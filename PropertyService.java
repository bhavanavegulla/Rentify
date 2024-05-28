package com.example.rentify.service;

import com.example.rentify.model.Property;
import com.example.rentify.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    public Property saveProperty(Property property) {
        return propertyRepository.save(property);
    }

    public List<Property> getPropertiesByUserId(Long userId) {
        return propertyRepository.findByUserId(userId);
    }

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public void deleteProperty(Long id) {
        propertyRepository.deleteById(id);
    }

    public Property likeProperty(Long id) {
        Property property = propertyRepository.findById(id).orElse(null);
        if (property != null) {
            property.setLikes(property.getLikes() + 1);
            propertyRepository.save(property);
        }
        return property;
    }
}
