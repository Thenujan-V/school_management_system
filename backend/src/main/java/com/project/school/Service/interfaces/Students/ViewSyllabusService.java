package com.project.school.Service.interfaces.Students;

import java.util.List;

public interface ViewSyllabusService {
    byte[] viewSyllabusPDF(String grade, String subject, String subject_content);

    List<String> viewContents(String grade, String subject);
}
