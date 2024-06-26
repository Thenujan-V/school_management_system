package com.project.school.Service.impl.Admin;

import com.project.school.Entity.StudentsEntity;
import com.project.school.Repository.StudentsRepo;
import com.project.school.Service.interfaces.Students.ViewStudentsDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ViewStudentsDetailsServiceImpl implements ViewStudentsDetails {
    @Autowired
    private StudentsRepo studentsRepo;
    @Override
    public List<StudentsEntity> viewDetails() {
        return studentsRepo.findAll(Sort.by(Sort.Direction.ASC, "grade"));
    }

    @Override
    public List<StudentsEntity> viewStudent(int grade) {
        return studentsRepo.findByGrade(grade);
    }

    @Override
    public Optional<StudentsEntity> viewStudentDetails(String indexNo) {
        return studentsRepo.findByIndexNo(String.valueOf(indexNo));
    }
}
