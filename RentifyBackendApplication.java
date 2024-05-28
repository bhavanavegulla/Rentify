package com.example.rentify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;
@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.example.rentify.repository")
@EntityScan(basePackages = "com.example.rentify.model")
public class RentifyBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(RentifyBackendApplication.class, args);
    }
}
