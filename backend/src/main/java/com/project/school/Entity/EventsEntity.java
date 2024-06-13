package com.project.school.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "event_details")
@Data
public class EventsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer event_id;
    private String event_name;
    private String description;
    private LocalDate event_date;
    private String category;
    private byte[] photo;

}
