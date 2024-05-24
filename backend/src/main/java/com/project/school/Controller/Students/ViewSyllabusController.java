package com.project.school.Controller.Students;

import com.project.school.Service.interfaces.Students.ViewSyllabusService;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/student")
@RequiredArgsConstructor
public class ViewSyllabusController {
    @Autowired
    private ViewSyllabusService viewSyllabusService;
    @GetMapping("/viewsyllabus/{grade}/{subject}")
    public ResponseEntity<byte[]> viewSyllabus(@PathVariable("grade") String grade, @PathVariable("subject") String subject) {
        byte[] pdfContent;
        pdfContent = viewSyllabusService.viewSyllabusPDF(grade, subject);

        if (pdfContent != null) {
            return ResponseEntity.ok(pdfContent);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
