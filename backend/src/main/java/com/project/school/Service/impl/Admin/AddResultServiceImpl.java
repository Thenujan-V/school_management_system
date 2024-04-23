package com.project.school.Service.impl.Admin;

import com.project.school.Dto.Admin.ResultDto;
import com.project.school.Entity.CompositeId;
import com.project.school.Entity.ResultEntity;
import com.project.school.Repository.ResultRepo;
import com.project.school.Service.interfaces.Admin.AddResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddResultServiceImpl implements AddResultService {
    @Autowired
    private ResultRepo resultRepo;
    @Override
    public String addResult(ResultDto resultDto) {
        if(resultDto.getExam_id() == null || resultDto.getMarks() == null || resultDto.getStudent_id() == null){
            return "invalid data try again";
        }

        ResultEntity resultEntity = new ResultEntity();
        CompositeId compositeId = new CompositeId();

        compositeId.setExam_id(resultDto.getExam_id());
        compositeId.setStudent_id((resultDto.getStudent_id()));

        resultEntity.setId(compositeId);
        resultEntity.setMarks(resultDto.getMarks());

        try{
            resultRepo.save(resultEntity);
            return "successfully added";
        }
        catch(Exception e){
            System.out.println("Error Occur : "+e.getMessage());
            return "error";
        }
    }
}
