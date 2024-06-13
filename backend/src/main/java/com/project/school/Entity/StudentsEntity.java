package com.project.school.Entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
@Data
@Entity
@Table(name = "students")
public class StudentsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long student_id;
    private String first_name;
    private String last_name;
    private String index_number;
    @Temporal(TemporalType.DATE)
    private Date date_of_birth;
    private String first_phone_number;
    private String second_phone_number;
    private int grade;
    private String role;
    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private String created_date;
    @Column(name = "updated_date", nullable = true)
    private String updated_date;
    private String password;
    private Boolean active;
    @PrePersist
    protected void onCreate() {
        if (active == null) {
            active = true;
        }
    }

}
