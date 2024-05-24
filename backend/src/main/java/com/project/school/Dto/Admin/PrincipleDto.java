package com.project.school.Dto.Admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PrincipleDto {
    private String p_name;
    private Integer starting_year;
    private Integer ending_year;
    private String details;
    private byte[] photo;
    private MultipartFile photoFile;
}
