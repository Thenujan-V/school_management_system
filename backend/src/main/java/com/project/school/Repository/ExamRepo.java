package com.project.school.Repository;

import com.project.school.Entity.ExamEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExamRepo extends JpaRepository<ExamEntity, Integer> {
    @Query("select s.grade, s.term, s.subject_name, e.exam_date, e.exam_time, e.exam_hall from ExamEntity e join SubjectEntity s on e.subject_id = s.subject_id where s.grade = :grade and s.term = :term")
    List<String> gettingDate(@Param("grade") String grade, @Param("term") String term);
}
