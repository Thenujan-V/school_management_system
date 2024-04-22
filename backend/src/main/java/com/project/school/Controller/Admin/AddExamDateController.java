package com.project.school.Controller.Admin;

import com.project.school.Dto.Admin.ExamDto;
import com.project.school.Service.interfaces.Admin.AddExamDateService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class AddExamDateController {
    @Autowired
    private AddExamDateService addExamDateService;
    @PostMapping("/addexamdate")
    private String addDate(@RequestBody ExamDto examDto){
        return addExamDateService.addExamDate(examDto);
    }
}
