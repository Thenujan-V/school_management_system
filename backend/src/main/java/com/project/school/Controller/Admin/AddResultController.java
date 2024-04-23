package com.project.school.Controller.Admin;

import com.project.school.Dto.Admin.ResultDto;
import com.project.school.Service.interfaces.Admin.AddResultService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class AddResultController {
    @Autowired
    private AddResultService addResultService;

    @PostMapping("/addresult")
    private String addExamResult(@RequestBody ResultDto resultDto){
        return addResultService.addResult(resultDto);
    }

}
