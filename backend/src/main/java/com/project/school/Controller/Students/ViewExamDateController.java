package com.project.school.Controller.Students;

import com.project.school.Service.interfaces.Students.ViewExamDateService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/student")
public class ViewExamDateController {
    @Autowired
    private ViewExamDateService viewExamDateService;
    @GetMapping("/viewexamdate/{grade}/{term}")
    private List<String> viewDate(@PathVariable("grade") String grade, @PathVariable("term") String term){
        System.out.println("term");
        return viewExamDateService.getExamDate(grade, term);
    }
}
