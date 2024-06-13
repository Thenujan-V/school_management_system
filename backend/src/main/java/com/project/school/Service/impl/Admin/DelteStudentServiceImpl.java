package com.project.school.Service.impl.Admin;

import com.project.school.Repository.StudentsRepo;
import com.project.school.Service.interfaces.Admin.DelteStudentService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DelteStudentServiceImpl implements DelteStudentService {
    @Autowired
    private StudentsRepo studentsRepo;
    @Override
    public String deleteAccount(String indexNumber) {
        int deleteStudents = studentsRepo.deleteStudent(indexNumber);
        if (deleteStudents > 0) {
            return "deleted";
        } else {
            return "not found";
        }
    }
}
