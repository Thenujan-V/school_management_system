package com.project.school.Repository;

import com.project.school.Entity.StudentsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentsRepo extends JpaRepository<StudentsEntity, Long> {

}
