package com.project.school.Controller.Students;

import com.project.school.Service.interfaces.Students.ViewSubjectsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/v1/student")
public class ViewSubjectsController {
    @Autowired
    private ViewSubjectsService viewSubjectsService;

    @GetMapping("/viewsubjects/{grade}/{term}")
    private List<String> viewSubjects(@PathVariable("grade") String grade, @PathVariable("term") String term){
        return Collections.singletonList(viewSubjectsService.viewsub(grade, term));
    }
}
