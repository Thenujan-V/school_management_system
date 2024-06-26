package com.project.school.Repository;

import com.project.school.Entity.SubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectRepo extends JpaRepository<SubjectEntity, Integer> {
    @Query("select s from SubjectEntity s where s.grade = :grade and s.term = :term")
    List<SubjectEntity> gettingSubjects(@Param("grade") String grade, @Param("term") String term);

    @Query("select s.subject_name from SubjectEntity s where s.grade = :grade and s.term = :term")
    List<String> getSubjectsName(String grade, String term);

    @Query("select s.subject_id from SubjectEntity s where s.grade = :grade and s.term = :term")
    List<Integer> findSubjectIds(@Param("grade") int grade, @Param("term") int term);
}
