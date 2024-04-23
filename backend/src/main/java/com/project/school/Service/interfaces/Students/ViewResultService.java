package com.project.school.Service.interfaces.Students;

import com.project.school.Entity.ResultEntity;

import java.util.List;

public interface ViewResultService {
    List<Object> viewResult(String indexNo, String term);
}
