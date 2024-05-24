package com.project.school.Controller.Admin;

import com.project.school.Dto.Admin.PrincipleDto;
import com.project.school.Service.interfaces.Admin.PrincipleService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class addPrincipleDetailsController {
    @Autowired
    private PrincipleService principleService;

        @PostMapping("/addprinciple")
    private String addPrincipleDetails(@RequestParam("photo") MultipartFile photo, @RequestParam("p_name") String p_name, @RequestParam("starting_year") Integer starting_year, @RequestParam("ending_year") Integer ending_year, @RequestParam("details") String details) throws IOException {
        PrincipleDto principleDto = new PrincipleDto();
        principleDto.setDetails(details);
        principleDto.setEnding_year(ending_year);
        principleDto.setPhoto(photo);
            principleDto.setP_name(p_name);
        principleDto.setStarting_year((starting_year));

        return principleService.addDetails(principleDto);
    }
}
