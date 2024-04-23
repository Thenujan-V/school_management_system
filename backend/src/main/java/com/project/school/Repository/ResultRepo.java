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
    @Query("select r.id.exam_id, r.marks from ResultEntity r join StudentsEntity s on r.id.student_id = s.student_id where s.index_number = :indexNo")
    List<Object> getResult(@Param("indexNo") String indexNo);
}
