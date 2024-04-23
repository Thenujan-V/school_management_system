package com.project.school.Dto.Admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ResultDto {
    private Integer exam_id;
    private Long student_id;
    private Integer marks;
}
