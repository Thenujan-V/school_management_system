package com.project.school.Service.impl.Students;

import com.project.school.Repository.ExamRepo;
import com.project.school.Service.interfaces.Students.ViewExamDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ViewExamDateServiceImpl implements ViewExamDateService {
    @Autowired
    private ExamRepo examRepo;
    @Override
    public List<String> getExamDate(String grade, String term) {
        System.out.println("grade");
        return examRepo.gettingDate(grade, term);
    }
}
