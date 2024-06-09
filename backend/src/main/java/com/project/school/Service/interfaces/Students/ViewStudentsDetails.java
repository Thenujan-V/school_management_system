package com.project.school.Service.interfaces.Students;

import com.project.school.Entity.StudentsEntity;

import java.util.List;

public interface ViewStudentsDetails {
    List<StudentsEntity> viewDetails();

    List<StudentsEntity> viewStudent(int grade);
}
