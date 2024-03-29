package com.project.school.Controller;

import com.project.school.Dto.StudentSignup;
import com.project.school.Entity.StudentsEntity;
import com.project.school.Service.impl.StudentsSignupServiceImpl;
import com.project.school.Service.interfaces.StudentsSignupService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/student")
@RequiredArgsConstructor
public class StudentSignupController {
    @Autowired
    private StudentsSignupService studentsSignupService;

    @PostMapping("/signup")
    private StudentsEntity studentsRegistration(@RequestBody StudentSignup studentSignup){
        return studentsSignupService.registration(studentSignup);
    }

}
