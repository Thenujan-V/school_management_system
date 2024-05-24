package com.project.school.Service.impl.Students;

import com.project.school.Repository.SyllabusRepo;
import com.project.school.Service.interfaces.Students.ViewSyllabusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ViewSyllabusServiceImpl implements ViewSyllabusService {
    @Autowired
    private SyllabusRepo syllabusRepo;
    @Override
    public byte[] viewSyllabusPDF(String grade, String subject) {

        Optional<byte[]> pdfContentOptional = syllabusRepo.findSubjectPDF(grade, subject);
        return pdfContentOptional.orElseThrow(() -> new RuntimeException("PDF not found for grade: " + grade + ", subject: " + subject));
    }
}
