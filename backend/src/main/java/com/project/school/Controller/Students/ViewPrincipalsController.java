package com.project.school.Controller.Students;

import com.project.school.Dto.Admin.PrincipleDto;
import com.project.school.Service.interfaces.Students.ViewPrincipalsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/student")
public class ViewPrincipalsController {
    @Autowired
    private ViewPrincipalsService viewPrincipalsService;

    @GetMapping("/getPrincipalsDetails")
    private ResponseEntity<List<PrincipleDto>> viewPrincipals(){
        List<PrincipleDto> principleDto = viewPrincipalsService.viewDetails();
        if (principleDto != null) {
            return ResponseEntity.ok(principleDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
