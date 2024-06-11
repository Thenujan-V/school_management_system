package com.project.school.Service.impl.Admin;

import com.project.school.Entity.ResultEntity;
import com.project.school.Repository.ResultRepo;
import com.project.school.Service.interfaces.Admin.ViewAllResultsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ViewAllResultsServiceImpl implements ViewAllResultsService {
    @Autowired
    private ResultRepo resultRepo;
    @Override
    public List<ResultEntity> viewResult(int examId) {
        return resultRepo.findByExamId(examId);
    }
}
