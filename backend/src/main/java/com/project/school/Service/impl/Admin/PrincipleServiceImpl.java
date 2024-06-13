package com.project.school.Service.impl.Admin;

import com.project.school.Dto.Admin.PrincipleDto;
import com.project.school.Entity.PrincipleEntity;
import com.project.school.Repository.PrincipleRepo;
import com.project.school.Service.interfaces.Admin.PrincipleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class PrincipleServiceImpl implements PrincipleService {
    @Autowired
    private PrincipleRepo principleRepo;
    @Override
    public String addDetails(PrincipleDto principleDto) throws IOException {
        System.out.println("ppp :"+principleDto);

        if(principleDto.getP_name() == null || principleDto.getStarting_year() == null || principleDto.getEnding_year() == null || principleDto.getDetails() == null || principleDto.getPhotoFile() == null ){
            return "invalid data";
        }
        PrincipleEntity principleEntity = new PrincipleEntity();

        principleEntity.setP_name(principleDto.getP_name());
        principleEntity.setStarting_year(principleDto.getStarting_year());
        principleEntity.setEnding_year(principleDto.getEnding_year());
        principleEntity.setDetails(principleDto.getDetails());
        principleEntity.setPhoto(principleDto.getPhotoFile().getBytes());

        try{
            principleRepo.save(principleEntity);
            return "successfully added";
        }
        catch(Exception e){
            System.out.println("Error Occur: "+e.getMessage());
            return "error";
        }
    }
}
