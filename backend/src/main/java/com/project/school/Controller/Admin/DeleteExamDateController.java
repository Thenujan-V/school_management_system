package com.project.school.Controller.Admin;

import com.project.school.Dto.Admin.ExamDto;
import com.project.school.Service.interfaces.Admin.AddExamDateService;
import com.project.school.Service.interfaces.Admin.AddResultService;
import com.project.school.Service.interfaces.Admin.DeleteExamDateService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
public class DeleteExamDateController {
    @Autowired
    private DeleteExamDateService deleteExamDateService;
    @DeleteMapping("/deleteexamdate/{exam_id}/{subject_id}")
    private void deleteDate(@PathVariable ("subject_id") int subject_id, @PathVariable ("exam_id") int exam_id){
        deleteExamDateService.deleteResults(exam_id);
        deleteExamDateService.deleteExamDate(subject_id);
    }
}
