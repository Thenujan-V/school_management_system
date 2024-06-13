package com.project.school.Service.impl.Students;

import com.project.school.Dto.Admin.EventsDto;
import com.project.school.Entity.EventsEntity;
import com.project.school.Repository.EventsRepo;
import com.project.school.Service.interfaces.Students.GetEventDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GetEventDetailsServiceImpl implements GetEventDetailsService {

    @Autowired
    private EventsRepo eventsRepo;

    @Value("${file.upload-dir}")
    private String uploadDir;

    @Override
    public List<EventsDto> viewDetails() {
        List<EventsEntity> eventsEntities = eventsRepo.findAllEvents();

        return eventsEntities.stream().map(event -> {
            EventsDto eventsDto = new EventsDto();
            eventsDto.setEvent_name(event.getEvent_name());
            eventsDto.setCategory(event.getCategory());
            eventsDto.setDescription(event.getDescription());
            eventsDto.setEvent_date(event.getEvent_date());

            // Construct photo URL
            String photoUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/" + uploadDir + "/" + event.getPhoto_path())
                    .toUriString();
            eventsDto.setPhoto_url(photoUrl);

            return eventsDto;
        }).collect(Collectors.toList());
    }
}
