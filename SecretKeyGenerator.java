package com.example.rentify.utils;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;

public class SecretKeyGenerator {

    // Method to generate a secret key
    public static Key generateSecretKey() {
        return Keys.secretKeyFor(SignatureAlgorithm.HS512);
    }
}
