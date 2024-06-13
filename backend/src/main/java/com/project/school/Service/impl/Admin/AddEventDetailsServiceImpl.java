package com.project.school.Service.impl.Admin;

import com.project.school.Dto.Admin.EventsDto;
import com.project.school.Entity.EventsEntity;
import com.project.school.Entity.PrincipleEntity;
import com.project.school.Repository.EventsRepo;
import com.project.school.Service.interfaces.Admin.AddEventDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class AddEventDetailsServiceImpl implements AddEventDetailsService {
    @Autowired
    private EventsRepo eventsRepo;

    @Override
    public String addEvent(EventsDto eventsDto) throws IOException{
        System.out.println("ppp :"+eventsDto);

        if(eventsDto.getEvent_date() == null || eventsDto.getEvent_name() == null || eventsDto.getCategory() == null || eventsDto.getDescription() == null || eventsDto.getPhotoFile() == null ){
            return "invalid data";
        }
        EventsEntity eventsEntity = new EventsEntity();

       eventsEntity.setEvent_date(eventsDto.getEvent_date());
       eventsEntity.setEvent_name(eventsDto.getEvent_name());
       eventsEntity.setDescription(eventsDto.getDescription());
       eventsEntity.setCategory(eventsDto.getCategory());
       eventsEntity.setPhoto(eventsDto.getPhotoFile().getBytes());

        try{
            eventsRepo.save(eventsEntity);
            return "successfully added";
        }
        catch(Exception e){
            System.out.println("Error Occur: "+e.getMessage());
            return "error";
        }
    }
}
