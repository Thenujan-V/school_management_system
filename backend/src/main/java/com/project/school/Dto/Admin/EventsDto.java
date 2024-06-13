package com.project.school.Dto.Admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventsDto {
    private String event_name;
    private String description;
    private LocalDate event_date;
    private String category;
    private byte[] photo;
    private MultipartFile photoFile;
}
