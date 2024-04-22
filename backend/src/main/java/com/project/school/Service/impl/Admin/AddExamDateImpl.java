package com.project.school.Service.impl.Admin;

import com.project.school.Dto.Admin.ExamDto;
import com.project.school.Entity.ExamEntity;
import com.project.school.Repository.ExamRepo;
import com.project.school.Service.interfaces.Admin.AddExamDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddExamDateImpl implements AddExamDateService {
    @Autowired
    private ExamRepo examRepo;
    @Override
    public String addExamDate(ExamDto examDto) {
        if(examDto.getSubject_id() == null || examDto.getExam_date() == null || examDto.getExam_time() == null || examDto.getExam_hall() == null){
                        return "invalid data try again";
        }
        ExamEntity examEntity = new ExamEntity();

        examEntity.setExam_date(examDto.getExam_date());
        examEntity.setExam_hall(examDto.getExam_hall());
        examEntity.setExam_time(examDto.getExam_time());
        examEntity.setSubject_id(examDto.getSubject_id());

        try{
            examRepo.save(examEntity);
            return "successfully added datas";
        }
        catch(Exception e){
            System.out.println("Error Occur : "+e.getMessage());
            return "error";
        }
    }
}
