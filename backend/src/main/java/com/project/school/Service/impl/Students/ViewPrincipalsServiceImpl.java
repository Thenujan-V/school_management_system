package com.project.school.Service.impl.Students;

import com.project.school.Dto.Admin.PrincipleDto;
import com.project.school.Entity.PrincipleEntity;
import com.project.school.Repository.PrincipleRepo;
import com.project.school.Service.interfaces.Students.ViewPrincipalsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ViewPrincipalsServiceImpl implements ViewPrincipalsService {
    @Autowired
    private PrincipleRepo principleRepo;
    @Override
    public List<PrincipleDto> viewDetails() {
        List<PrincipleEntity> principleEntities = principleRepo.findAll();

        return principleEntities.stream().map(principle -> {
            PrincipleDto principleDto = new PrincipleDto();
            principleDto.setDetails(principle.getDetails());
            principleDto.setEnding_year(principle.getEnding_year());
            principleDto.setStarting_year(principle.getStarting_year());
            principleDto.setPhoto(principle.getPhoto());
            principleDto.setP_name(principle.getP_name());
            return principleDto;
        }).collect(Collectors.toList());
    }
}
