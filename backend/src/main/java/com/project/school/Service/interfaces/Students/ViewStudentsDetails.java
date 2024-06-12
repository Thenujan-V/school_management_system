package com.project.school.Service.interfaces.Students;

import com.project.school.Entity.StudentsEntity;

import java.util.List;
import java.util.Optional;

public interface ViewStudentsDetails {
    List<StudentsEntity> viewDetails();

    List<StudentsEntity> viewStudent(int grade);

    Optional<StudentsEntity> viewStudentDetails(String indexNo);
}
