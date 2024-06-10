package com.project.school.Service.interfaces.Admin;

import org.springframework.stereotype.Service;

public interface DeleteExamDateService {
    void deleteResults(int examId);

    void deleteExamDate(int subjectId);
}
