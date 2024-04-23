package com.project.school.Service.impl.Students;

import com.project.school.Entity.ResultEntity;
import com.project.school.Repository.ResultRepo;
import com.project.school.Service.interfaces.Students.ViewResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class ViewResultServiceImpl implements ViewResultService {
    @Autowired
    private ResultRepo resultRepo;
    @Override
    public List<Object> viewResult(String indexNo, String term) {
        System.out.println("nooo");
        return resultRepo.getResult(indexNo, term);
    }
}
