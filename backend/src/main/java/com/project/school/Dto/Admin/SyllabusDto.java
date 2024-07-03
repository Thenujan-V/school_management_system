package com.project.school.Dto.Admin;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class SyllabusDto {
    private String subject_name;
    private String subject_contents;
    private String grade;
    private MultipartFile syllabus_pdf;
}
