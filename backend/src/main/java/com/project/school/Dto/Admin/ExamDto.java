package com.project.school.Dto.Admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExamDto {
    private Integer subject_id;
    private String exam_hall;
    private Date exam_date;
    private Time exam_time;
}
