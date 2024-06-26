package com.project.school.Repository;

import com.project.school.Entity.ExamEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExamRepo extends JpaRepository<ExamEntity, Integer> {
    @Query("select s.subject_id, s.grade, s.term, s.subject_name, e.exam_id, e.exam_date, e.exam_time, e.exam_hall from ExamEntity e join SubjectEntity s on e.subject_id = s.subject_id where s.grade = :grade and s.term = :term")
    List<String> gettingDate(@Param("grade") String grade, @Param("term") String term);

    @Modifying
    @Query("delete from ExamEntity e where e.subject_id = :subjectId")
    void deleteBySubjectId(@Param("subjectId") int subjectId);

    @Query("select e.exam_id from ExamEntity e where e.subject_id = :subjectId")
    Integer findExamIds(@Param("subjectId") Integer subjectId);

}
