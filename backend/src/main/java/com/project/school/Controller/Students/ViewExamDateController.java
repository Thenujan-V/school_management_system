package com.project.school.Controller.Students;

import com.project.school.Service.interfaces.Students.ViewExamDateService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/student")
public class ViewExamDateController {
    @Autowired
    private ViewExamDateService viewExamDateService;
    @GetMapping("/viewexamdate/{grade}")
    private List<String> viewDate(@PathVariable("grade") String grade){
        System.out.println("term");
        return viewExamDateService.getExamDate(grade);
    }
}
