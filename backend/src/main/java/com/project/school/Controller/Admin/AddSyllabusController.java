package com.project.school.Controller.Admin;

import com.project.school.Dto.Admin.PrincipleDto;
import com.project.school.Dto.Admin.SyllabusDto;
import com.project.school.Service.interfaces.Admin.AddSyllabusService;
import com.project.school.Service.interfaces.Admin.PrincipleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor

public class AddSyllabusController {
    @Autowired
    private AddSyllabusService addSyllabusService;

    @PostMapping("/addsyllabus")
    private String addPrincipleDetails(@RequestParam("syllabus_pdf") MultipartFile syllabus_pdf, @RequestParam("subject_name") String subject_name, @RequestParam("grade") String grade, @RequestParam("subject_contents") String subject_contents) throws IOException {
        SyllabusDto syllabusDto = new SyllabusDto();

        syllabusDto.setSyllabus_pdf(syllabus_pdf);
        syllabusDto.setGrade(grade);
        syllabusDto.setSubject_name(subject_name);
        syllabusDto.setSubject_contents(subject_contents);

        return addSyllabusService.addSyllabus(syllabusDto);
    }
}
