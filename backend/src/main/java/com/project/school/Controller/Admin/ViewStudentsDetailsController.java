package com.project.school.Controller.Admin;
import com.project.school.Entity.StudentsEntity;
import com.project.school.Service.interfaces.Students.ViewStudentsDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor

public class ViewStudentsDetailsController {
    @Autowired
    private ViewStudentsDetails viewStudentsDetails;

    @GetMapping("/viewallstudents")
    private List<StudentsEntity> viewAllStudents() {
        return viewStudentsDetails.viewDetails();
    }

    @GetMapping("/viewstudentsgradewish/{grade}")
    private List<StudentsEntity> viewStudents(@PathVariable("grade") int grade){
        return viewStudentsDetails.viewStudent(grade);
    }
}






