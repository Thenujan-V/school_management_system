package com.project.school.Controller;

import com.project.school.Dto.StudentSignup;
import com.project.school.Entity.StudentsEntity;
import com.project.school.Service.impl.StudentsSignupServiceImpl;
import com.project.school.Service.interfaces.StudentsSignupService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/admin")
@RequiredArgsConstructor
public class StudentSignupController {
    @Autowired
    private StudentsSignupService studentsSignupService;

    @PostMapping("/signup")
    private StudentsEntity studentsRegistration(@RequestBody StudentSignup studentSignup){
        return studentsSignupService.registration(studentSignup);
    }

}
