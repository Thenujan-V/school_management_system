package com.project.school.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentSignup {
    private Long student_id;
    private String first_name;
    private String last_name;
    private String index_number;
    private Date date_of_birth;
    private String first_phone_number;
    private String second_phone_number;
    private String password;
}
