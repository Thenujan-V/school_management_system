package com.project.school.Controller.Admin;

import com.project.school.Dto.Admin.ResultDto;
import com.project.school.Entity.ResultEntity;
import com.project.school.Entity.StudentsEntity;
import com.project.school.Service.interfaces.Admin.ViewAllResultsService;
import com.project.school.Service.interfaces.Students.ViewStudentsDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class ViewAllResults {
    @Autowired
    private ViewAllResultsService viewAllResultsService;

    @GetMapping("/viewallstudents/{grade}/{term}")
    private List<ResultDto> viewAllStudents(@PathVariable ("grade") int grade, @PathVariable ("term") int term) {
        return viewAllResultsService.viewResult(grade, term);
    }
}
