package com.project.school.Repository;

import com.project.school.Entity.CompositeId;
import com.project.school.Entity.ResultEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResultRepo extends JpaRepository<ResultEntity, CompositeId> {
    @Query("select c.subject_name, r.marks, s.first_name, s.last_name, c.grade from ResultEntity r join StudentsEntity s on r.id.student_id = s.student_id " +
            "join ExamEntity e on e.exam_id = r.id.exam_id  " + "join SubjectEntity c on c.subject_id = e.subject_id " +
            "where s.index_number = :indexNo and c.term = :term")
    List<Object> getResult(@Param("indexNo") String indexNo, @Param("term") String term);
}
