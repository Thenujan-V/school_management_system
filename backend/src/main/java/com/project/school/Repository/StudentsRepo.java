package com.project.school.Repository;

import com.project.school.Entity.StudentsEntity;
import jakarta.transaction.Transactional;
import org.apache.coyote.Response;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentsRepo extends JpaRepository<StudentsEntity, Long> {
    @Query("SELECT s FROM StudentsEntity s WHERE s.index_number = :indexNo and s.active = true")
    Optional<StudentsEntity> findByIndexNo(@Param("indexNo") String indexNo);

    List<StudentsEntity> findByGrade(int grade);

    @Modifying
    @Transactional
    @Query("update StudentsEntity s set s.active = false where s.index_number = :indexNumber")
    int deleteStudent(@Param("indexNumber") String indexNumber);
}
