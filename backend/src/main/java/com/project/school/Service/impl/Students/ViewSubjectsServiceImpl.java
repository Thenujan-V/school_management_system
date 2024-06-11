package com.project.school.Service.impl.Students;

import com.project.school.Entity.SubjectEntity;
import com.project.school.Repository.SubjectRepo;
import com.project.school.Service.interfaces.Students.ViewSubjectsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class ViewSubjectsServiceImpl implements ViewSubjectsService {
    @Autowired
    private SubjectRepo subjectRepo;
    @Override
    public List<SubjectEntity> viewsub(String grade, String term) {
        try{
            return subjectRepo.gettingSubjects(grade, term);
        }
        catch(Exception e){
            System.out.println("Some Error Occurs :"+e.getMessage());
            return null;
        }
    }

    @Override
    public List<String> viewsubName(String grade) {
        try{
            return subjectRepo.getSubjectsName(grade, "1");
        }
        catch(Exception e){
            System.out.println("Some Error Occurs :"+e.getMessage());
            return Collections.singletonList("error getting data");
        }
    }
}
