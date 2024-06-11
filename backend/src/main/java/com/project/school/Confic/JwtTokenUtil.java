package com.project.school.Confic;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Calendar;
import java.util.Date;

@Component
public class JwtTokenUtil {
    private static final String SECRET_KEY = "asdfghjklpoiuytrewqasxcvbnmkjuhgfdxcvbnuytfcvbnjutrdcbnjgfnjhgfcnjgfvbnjgfvbhgfvbnjfcvbhdcvgfd";
    private static final String keyValue = "indexNo";

    public String generateToken(String studentIndexNo) {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.HOUR, 24);
        Date expirationDate = calendar.getTime();

        return Jwts.builder()
                .claim(keyValue,studentIndexNo)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }
}
