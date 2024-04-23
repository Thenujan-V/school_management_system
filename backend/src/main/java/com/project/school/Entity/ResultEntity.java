package com.project.school.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "results")
@Data
public class ResultEntity {
    @EmbeddedId
    private CompositeId id;
    private Integer marks;
    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private String created_date;
    @Column(name = "updated_date", nullable = true)
    private String updated_date;
}
