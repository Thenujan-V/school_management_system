package com.project.school.Controller.Admin;

import com.project.school.Dto.Admin.EventsDto;
import com.project.school.Dto.Admin.PrincipleDto;
import com.project.school.Service.interfaces.Admin.AddEventDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class AddEventDetailsController {
    @Autowired
    private AddEventDetailsService addEventDetailsService;
    @PostMapping("/addevent")
    private String addPrincipleDetails(@RequestParam("photo") MultipartFile photoFile, @RequestParam("event_name") String event_name, @RequestParam("description") String description, @RequestParam("event_date") LocalDate event_date, @RequestParam("category") String category) throws IOException {
        EventsDto eventsDto = new EventsDto();

        eventsDto.setEvent_date(event_date);
        eventsDto.setEvent_name(event_name);
        eventsDto.setPhotoFile(photoFile);
        eventsDto.setCategory(category);
        eventsDto.setDescription((description));

        return addEventDetailsService.addEvent(eventsDto);
    }
}
