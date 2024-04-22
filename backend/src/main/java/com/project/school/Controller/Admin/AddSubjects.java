package com.project.school.Controller.Admin;

import com.project.school.Dto.Admin.AddSubjectDto;
import com.project.school.Service.interfaces.Admin.AddSubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/admin")
public class AddSubjects {
    @Autowired
    private AddSubjectService addSubjectService;

    @PostMapping("/addsubject")
    private String addsubjects(@RequestBody AddSubjectDto addSubjectDto){
        return addSubjectService.addsubject(addSubjectDto);
    }
}
