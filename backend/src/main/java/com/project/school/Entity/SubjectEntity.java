package com.project.school.Entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

@Data
@Entity
@Table(name = "subjects")
public class SubjectEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer subject_id;
    private String subject_name;
    private String grade;
    private String term;
    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private String created_date;
}
