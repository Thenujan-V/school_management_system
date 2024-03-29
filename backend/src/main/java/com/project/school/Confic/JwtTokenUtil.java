package com.project.school.Confic;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

@Component
public class JwtTokenUtil {
    private static final String SECRET_KEY = "asdfghjklpoiuytrewqasxcvbnmkjuhgfdxcvbnuytfcvbnjutrdcbnjgfnjhgfcnjgfvbnjgfvbhgfvbnjfcvbhdcvgfd";
    private static final String keyValue = "indexNo";

    public String generateToken(String studentIndexNo) {
        return Jwts.builder()
                .claim(keyValue,studentIndexNo)
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }
}
