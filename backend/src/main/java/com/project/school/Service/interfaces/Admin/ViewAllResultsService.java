package com.project.school.Service.interfaces.Admin;

import com.project.school.Entity.ResultEntity;

import java.util.List;

public interface ViewAllResultsService {
    List<ResultEntity> viewResult(int examId);
}
