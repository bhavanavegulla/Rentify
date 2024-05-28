package com.example.rentify.controller;

import com.example.rentify.model.Property;
import com.example.rentify.model.User;
import com.example.rentify.service.PropertyService;
import com.example.rentify.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/properties")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @Autowired
    private UserService userService;

    @PostMapping
    public Property createProperty(@RequestBody Property property, Authentication authentication) {
        User user = userService.findByEmail(authentication.getName()).orElse(null);
        property.setUser(user);
        return propertyService.saveProperty(property);
    }

    @GetMapping("/my-properties")
    public List<Property> getMyProperties(Authentication authentication) {
        User user = userService.findByEmail(authentication.getName()).orElse(null);
        return propertyService.getPropertiesByUserId(user.getId());
    }

    @GetMapping
    public List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }

    @DeleteMapping("/{id}")
    public void deleteProperty(@PathVariable Long id) {
        propertyService.deleteProperty(id);
    }

    @PutMapping("/like/{id}")
    public Property likeProperty(@PathVariable Long id) {
        return propertyService.likeProperty(id);
    }
}
