package com.project.school.Entity;

import jakarta.persistence.*;
import lombok.Data;
import org.w3c.dom.Text;

import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "exam_time")
@Data
public class ExamEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer exam_id;
    private Integer subject_id;
    private String exam_hall;
    private Date exam_date;
    private Time exam_time;
}
