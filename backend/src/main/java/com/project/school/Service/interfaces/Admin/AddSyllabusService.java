package com.project.school.Service.interfaces.Admin;

import com.project.school.Dto.Admin.SyllabusDto;
import org.springframework.stereotype.Service;

import java.io.IOException;


public interface AddSyllabusService {
    String addSyllabus(SyllabusDto syllabusDto) throws IOException;
}
