package com.project.school.Entity;

import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;
import java.math.BigInteger;

@Embeddable
@Data
public class CompositeId implements Serializable{
    private Integer exam_id;
    private Long student_id;
}
