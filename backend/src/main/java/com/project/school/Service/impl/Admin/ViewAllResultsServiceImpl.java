package com.project.school.Service.impl.Admin;

import com.project.school.Dto.Admin.ResultDto;
import com.project.school.Repository.ExamRepo;
import com.project.school.Repository.ResultRepo;
import com.project.school.Repository.SubjectRepo;
import com.project.school.Service.interfaces.Admin.ViewAllResultsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ViewAllResultsServiceImpl implements ViewAllResultsService {
    @Autowired
    private ResultRepo resultRepo;

    @Autowired
    private SubjectRepo subjectRepo;

    @Autowired
    private ExamRepo examRepo;
    @Override
    public List<ResultDto> viewResult(int grade, int term) {
        List<Integer> subjectIds =  subjectRepo.findSubjectIds(grade, term);
        System.out.println("subject Id :"+subjectIds);

        List<Integer> examIds = new ArrayList<>();
        subjectIds.forEach(subject_id -> {
            Integer examId = examRepo.findExamIds(subject_id);
            examIds.add(examId);
            System.out.println("examId Id :"+examId);
        });
        System.out.println("arraylist :"+examIds);

        List<ResultDto> subjectWiseMarks = new ArrayList<>();
        examIds.forEach(examId -> {
            List<Object[]> marks = resultRepo.findAllMarks(examId);
            marks.forEach(result -> {
                Integer examIdd = (Integer) result[0];
                Integer markss = (Integer) result[1];
                Long stuId = (Long) result[2];
                subjectWiseMarks.add(new ResultDto(examIdd, stuId, markss));
        });
    });
        return subjectWiseMarks;

}
}