package com.project.school.Service.interfaces.Students;

import java.util.List;

public interface ViewSubjectsService {
    String viewsub(String grade, String term);

    List<String> viewsubName(String grade);
}
