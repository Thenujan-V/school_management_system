package com.project.school.Controller.Students;

import com.project.school.Entity.SubjectEntity;
import com.project.school.Service.interfaces.Students.ViewSubjectsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/student")
public class ViewSubjectsController {
    @Autowired
    private ViewSubjectsService viewSubjectsService;

    @GetMapping("/viewsubjects/{grade}/{term}")
    private List<SubjectEntity> viewSubjects(@PathVariable("grade") String grade, @PathVariable("term") String term){
        return viewSubjectsService.viewsub(grade, term);
    }

    @GetMapping("/viewsubjectsname/{grade}")
    private List<String> viewSubjectsName(@PathVariable("grade") String grade){
        return viewSubjectsService.viewsubName(grade);
    }

}
