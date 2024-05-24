package com.project.school.Service.interfaces.Admin;

import com.project.school.Dto.Admin.PrincipleDto;

import java.io.IOException;

public interface PrincipleService {
    String addDetails(PrincipleDto principleDto) throws IOException;
}
