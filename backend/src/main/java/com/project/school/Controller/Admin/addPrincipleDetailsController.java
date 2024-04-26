package com.project.school.Controller.Admin;

import com.project.school.Dto.Admin.PrincipleDto;
import com.project.school.Service.interfaces.Admin.PrincipleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class addPrincipleDetailsController {
    @Autowired
    private PrincipleService principleService;

    @PostMapping("/addprinciple")
    private String addPrincipleDetails(@RequestBody PrincipleDto principleDto) {
        return principleService.addDetails(principleDto);
    }
}
