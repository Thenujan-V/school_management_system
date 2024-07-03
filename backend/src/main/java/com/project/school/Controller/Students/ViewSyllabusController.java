package com.project.school.Controller.Students;

import com.project.school.Service.interfaces.Students.ViewSyllabusService;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/student")
@RequiredArgsConstructor
public class ViewSyllabusController {
    @Autowired
    private ViewSyllabusService viewSyllabusService;
    @GetMapping("/viewsyllabus/{grade}/{subject}/{subject_content}")
    public ResponseEntity<byte[]> viewSyllabus(@PathVariable("grade") String grade, @PathVariable("subject") String subject, @PathVariable("subject_content") String subject_content) {
        try {
            byte[] pdfContent = viewSyllabusService.viewSyllabusPDF(grade, subject, subject_content);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);
            headers.setContentDisposition(ContentDisposition.inline().filename("syllabus.pdf").build());

            return ResponseEntity
                    .ok()
                    .headers(headers)
                    .body(pdfContent);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("/viewsyllabuscontents/{grade}/{subject}")
    public List<String> viewSyllabusContents(@PathVariable("grade") String grade, @PathVariable("subject") String subject){
        return viewSyllabusService.viewContents(grade, subject);
    }
}

