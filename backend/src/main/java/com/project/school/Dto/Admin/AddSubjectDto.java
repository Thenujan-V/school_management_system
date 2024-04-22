package com.project.school.Dto.Admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddSubjectDto {
    private String subject_name;
    private String grade;
    private String term;
}
