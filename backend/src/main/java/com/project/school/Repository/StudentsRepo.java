package com.project.school.Repository;

import com.project.school.Entity.StudentsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentsRepo extends JpaRepository<StudentsEntity, Long> {
    @Query("SELECT s FROM StudentsEntity s WHERE s.index_number = :indexNo")
    Optional<StudentsEntity> findByIndexNo(@Param("indexNo") String indexNo);

}
