package com.project.school.Controller.Students;

import com.project.school.Entity.ResultEntity;
import com.project.school.Service.interfaces.Students.ViewResultService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/student")
@RequiredArgsConstructor
public class ViewResultController {
    @Autowired
    private ViewResultService viewResultService;

    @GetMapping("/viewresult/{indexno}")
    private List<Object> viewExamResult(@PathVariable ("indexno") String indexNo){
        return viewResultService.viewResult(indexNo);
    }
}
