package com.project.school.Service.interfaces.Admin;

import com.project.school.Dto.Admin.ResultDto;

import java.util.List;

public interface ViewAllResultsService {
    List<ResultDto> viewResult(int grade, int term);
}
