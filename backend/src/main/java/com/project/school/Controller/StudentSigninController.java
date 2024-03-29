package com.project.school.Controller;

import com.project.school.Dto.StudentSigninDto;
import com.project.school.Service.interfaces.StudentsSigninService;
import com.project.school.Service.impl.StudentsSigninServiceImpl;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/student")
@RequiredArgsConstructor
public class StudentSigninController {
    @Autowired
    private StudentsSigninService studentsSigninService;

    @PostMapping("/signin")
    private String signinStudent(@RequestBody StudentSigninDto studentSigninDto){
        return studentsSigninService.signin(studentSigninDto);
    }
}
