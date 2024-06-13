package com.project.school.Controller.Students;

import com.project.school.Dto.Admin.EventsDto;
import com.project.school.Dto.Admin.PrincipleDto;
import com.project.school.Service.interfaces.Students.GetEventDetailsService;
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
public class GetEventDetailsController {
    @Autowired
    private GetEventDetailsService getEventDetailsService;

    @GetMapping("/getevents")
    private ResponseEntity<List<EventsDto>> viewPrincipals(){
        List<EventsDto> eventsDtos = getEventDetailsService.viewDetails();
        if (eventsDtos != null) {
            return ResponseEntity.ok(eventsDtos);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
