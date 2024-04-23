package com.project.school.Service.impl.Admin;

import com.project.school.Dto.Admin.AddSubjectDto;
import com.project.school.Entity.SubjectEntity;
import com.project.school.Repository.SubjectRepo;
import com.project.school.Service.interfaces.Admin.AddSubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddSubjectImpl implements AddSubjectService {
    @Autowired
    private SubjectRepo subjectRepo;
    @Override
    public String addsubject(AddSubjectDto addSubjectDto) {

        if (addSubjectDto.getSubject_name().trim().isEmpty() || addSubjectDto.getGrade().trim().isEmpty() || addSubjectDto.getTerm().trim().isEmpty()) {
            return "Invalid input data";
        }
        SubjectEntity subjectEntity = new SubjectEntity();

        subjectEntity.setSubject_name(addSubjectDto.getSubject_name());
        subjectEntity.setGrade(addSubjectDto.getGrade());
        subjectEntity.setTerm(addSubjectDto.getTerm());

        try {
            subjectRepo.save(subjectEntity);
            return "Subject added successfully";
        }
        catch (Exception e) {
            System.err.println("Error adding subject: " + e.getMessage());
            return "Error adding subject";
        }
    }
}
