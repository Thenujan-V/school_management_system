package com.project.school.Service.interfaces;

import com.project.school.Dto.StudentSignup;
import com.project.school.Entity.StudentsEntity;

public interface StudentsService {
    StudentsEntity registration(StudentSignup studentSignup);
}
