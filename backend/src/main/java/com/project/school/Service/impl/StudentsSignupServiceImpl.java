package com.project.school.Service.impl;

import com.project.school.Dto.StudentSigninDto;
import com.project.school.Dto.StudentSignup;
import com.project.school.Entity.StudentsEntity;
import com.project.school.Repository.StudentsRepo;
import com.project.school.Service.interfaces.StudentsSignupService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StudentsSignupServiceImpl implements StudentsSignupService {
    @Autowired
    private StudentsRepo studentsRepo;
    @Override
    public StudentsEntity registration(StudentSignup studentSignup) {
        StudentsEntity studentsEntity = new StudentsEntity();

        studentsEntity.setFirst_name(studentSignup.getFirst_name());
        studentsEntity.setLast_name(studentSignup.getLast_name());
        studentsEntity.setDate_of_birth(studentSignup.getDate_of_birth());
        studentsEntity.setIndex_number(studentSignup.getIndex_number());
        studentsEntity.setFirst_phone_number(studentSignup.getFirst_phone_number());
        studentsEntity.setSecond_phone_number(studentSignup.getSecond_phone_number());
        studentsEntity.setPassword(studentSignup.getPassword());

        return studentsRepo.save(studentsEntity);
    }
}
