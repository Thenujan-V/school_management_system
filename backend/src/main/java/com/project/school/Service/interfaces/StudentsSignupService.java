package com.project.school.Service.interfaces;

import com.project.school.Dto.StudentSigninDto;
import com.project.school.Dto.StudentSignup;
import com.project.school.Entity.StudentsEntity;

public interface StudentsSignupService {
    StudentsEntity registration(StudentSignup studentSignup);

}
