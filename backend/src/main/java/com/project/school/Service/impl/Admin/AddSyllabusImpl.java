package com.project.school.Service.impl.Admin;

import com.project.school.Dto.Admin.SyllabusDto;
import com.project.school.Entity.PrincipleEntity;
import com.project.school.Entity.SyllabusEntity;
import com.project.school.Repository.SyllabusRepo;
import com.project.school.Service.interfaces.Admin.AddSyllabusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
@Service
public class AddSyllabusImpl implements AddSyllabusService {
    @Autowired
    private SyllabusRepo syllabusRepo;
    @Override
    public String addSyllabus(SyllabusDto syllabusDto) throws IOException {
        if(syllabusDto.getSyllabus_pdf() == null || syllabusDto.getSubject_name() == null || syllabusDto.getGrade() == null || syllabusDto.getSubject_contents() == null){
            return "invalid data";
        }
        SyllabusEntity syllabusEntity = new SyllabusEntity();

        syllabusEntity.setSyllabus_pdf(syllabusDto.getSyllabus_pdf().getBytes());
        syllabusEntity.setGrade(syllabusDto.getGrade());
        syllabusEntity.setSubject_name(syllabusDto.getSubject_name());
        syllabusEntity.setSubject_contents(syllabusDto.getSubject_contents());

        try{
            syllabusRepo.save(syllabusEntity);
            return "successfully added";
        }
        catch(Exception e){
            System.out.println("Error Occur: "+e.getMessage());
            return "error";
        }
    }
}
