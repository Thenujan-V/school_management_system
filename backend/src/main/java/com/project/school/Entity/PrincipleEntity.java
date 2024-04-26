package com.project.school.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "principle_details")
@Data
public class PrincipleEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer principle_id;
    private String p_name;
    private Integer starting_year;
    private Integer ending_year;
    private String details;
    private byte[] photo;

}
