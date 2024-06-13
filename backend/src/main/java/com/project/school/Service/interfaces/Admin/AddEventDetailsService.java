package com.project.school.Service.interfaces.Admin;

import com.project.school.Dto.Admin.EventsDto;

import java.io.IOException;

public interface AddEventDetailsService {
    String addEvent(EventsDto eventsDto) throws IOException;

}
