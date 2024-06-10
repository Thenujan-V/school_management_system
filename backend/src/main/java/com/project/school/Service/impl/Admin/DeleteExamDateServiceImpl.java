package com.project.school.Service.impl.Admin;

import com.project.school.Repository.ExamRepo;
import com.project.school.Repository.ResultRepo;
import com.project.school.Service.interfaces.Admin.DeleteExamDateService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class DeleteExamDateServiceImpl implements DeleteExamDateService {
    @Autowired
    private ResultRepo resultRepo;
    @Autowired
    private ExamRepo examRepo;
    @Transactional
    public void deleteResults(int examId) {
        resultRepo.deleteResultByexamId(examId);
    }
    @Transactional
    public void deleteExamDate(int subjectId) {
        examRepo.deleteBySubjectId(subjectId);
    }
}
