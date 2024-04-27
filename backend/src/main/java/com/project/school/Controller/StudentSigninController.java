package com.project.school.Controller;

import com.project.school.Dto.StudentSigninDto;
import com.project.school.Service.interfaces.StudentsSigninService;
import com.project.school.Service.impl.StudentsSigninServiceImpl;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/student")
@RequiredArgsConstructor
@CrossOrigin("*")
public class StudentSigninController {
    @Autowired
    private StudentsSigninService studentsSigninService;

    @PostMapping("/signin")
    private String signinStudent(@RequestBody StudentSigninDto studentSigninDto){
//        System.out.println("index : "+studentSigninDto.getIndex_number());
//        System.out.println("password : "+studentSigninDto.getPassword());
        return studentsSigninService.signin(studentSigninDto);
    }
}
