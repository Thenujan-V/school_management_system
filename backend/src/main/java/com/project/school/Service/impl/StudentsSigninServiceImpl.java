package com.project.school.Service.impl;

import com.project.school.Confic.JwtTokenUtil;
import com.project.school.Dto.StudentSigninDto;
import com.project.school.Entity.AdminEntity;
import com.project.school.Entity.StudentsEntity;
import com.project.school.Repository.AdminRepo;
import com.project.school.Repository.StudentsRepo;
import com.project.school.Service.interfaces.StudentsSigninService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentsSigninServiceImpl implements StudentsSigninService {
    @Autowired
    private StudentsRepo studentsRepo;
    @Autowired
    private AdminRepo adminRepo;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Override
    public String signin(StudentSigninDto studentSigninDto) {
        String studentIndexNo = studentSigninDto.getIndex_number();
        Optional<StudentsEntity> optionalStudent = studentsRepo.findByIndexNo(studentIndexNo);

        if(optionalStudent.isPresent()){
            StudentsEntity studentsEntity = optionalStudent.get();
            String storedPassword = studentsEntity.getPassword();
            String role = studentsEntity.getRole();

            String enteredPassword = studentSigninDto.getPassword();
            storedPassword.equals(enteredPassword);

            String token = jwtTokenUtil.generateToken(studentIndexNo,role);

            return token;
            }
        else{
            String userName = studentSigninDto.getIndex_number();
            Optional<AdminEntity> optionalAdmin = adminRepo.findByUserName(userName);

            if(optionalAdmin.isPresent()){
                AdminEntity adminEntity = optionalAdmin.get();
                String storedPassword = adminEntity.getPassword();
                String role = adminEntity.getRole();

                String enteredPassword = studentSigninDto.getPassword();
                storedPassword.equals(enteredPassword);

                String token = jwtTokenUtil.generateToken(userName,role);

                return token;
            }
            else{
                return "signin field";
            }

        }
    }
}
