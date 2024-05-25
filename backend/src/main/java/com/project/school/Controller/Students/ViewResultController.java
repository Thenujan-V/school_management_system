package com.project.school.Controller.Students;

import com.project.school.Entity.ResultEntity;
import com.project.school.Service.interfaces.Students.ViewResultService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/student")
@RequiredArgsConstructor
public class ViewResultController {
    @Autowired
    private ViewResultService viewResultService;

    @GetMapping("/viewresult/{indexno}/{term}")
    private List<Object> viewExamResult(@PathVariable ("indexno") String indexNo, @PathVariable ("term") String term){
        return viewResultService.viewResult(indexNo, term);
    }
}
