package com.project.school.Service.impl.Students;

import com.project.school.Dto.Admin.EventsDto;
import com.project.school.Dto.Admin.PrincipleDto;
import com.project.school.Entity.EventsEntity;
import com.project.school.Entity.PrincipleEntity;
import com.project.school.Repository.EventsRepo;
import com.project.school.Service.interfaces.Students.GetEventDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GetEventDetailsServiceImpl implements GetEventDetailsService {

    @Autowired
    private EventsRepo eventsRepo;
    @Override
    public List<EventsDto> viewDetails() {
        List<EventsEntity> eventsEntities = eventsRepo.findAll();

        return eventsEntities.stream().map(event -> {
            EventsDto eventsDto = new EventsDto();

            eventsDto.setEvent_name(event.getEvent_name());
            eventsDto.setCategory(event.getCategory());
            eventsDto.setDescription(event.getDescription());
            eventsDto.setPhoto(event.getPhoto());
            eventsDto.setEvent_date(event.getEvent_date());
            return eventsDto;

        }).collect(Collectors.toList());
    }
}
