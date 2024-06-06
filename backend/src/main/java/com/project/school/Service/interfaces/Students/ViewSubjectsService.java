package com.project.school.Service.interfaces.Students;

import com.project.school.Entity.SubjectEntity;

import java.util.List;

public interface ViewSubjectsService {
    List<SubjectEntity> viewsub(String grade, String term);

    List<String> viewsubName(String grade);
}
