package com.project.school.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "syllabus")
public class SyllabusEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long syllabus_id;
    private String subject_name;
    private String grade;
    private byte[] syllabus_pdf;
}
