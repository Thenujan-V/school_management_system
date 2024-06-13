package com.project.school.Controller.Admin;

import com.project.school.Dto.StudentSignup;
import com.project.school.Entity.StudentsEntity;
import com.project.school.Service.interfaces.Admin.DelteStudentService;
import com.project.school.Service.interfaces.StudentsSignupService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class DelteStudentContoller {
    @Autowired
    private DelteStudentService delteStudentService;

    @PostMapping("/deleteStudent/{indexNo}")
    private String deleteStudent(@PathVariable("indexNo") String index_number){
        System.out.println("ss :"+index_number);
        return delteStudentService.deleteAccount(index_number);
    }

}
