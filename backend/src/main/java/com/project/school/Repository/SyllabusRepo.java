package com.project.school.Repository;

import com.project.school.Entity.SyllabusEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SyllabusRepo extends JpaRepository<SyllabusEntity, Long> {
    @Query("select s.syllabus_pdf from SyllabusEntity s where s.grade = :grade and s.subject_name = :subject and s.subject_contents = :subject_content")
    Optional<byte[]> findSubjectPDF(@Param("grade") String grade, @Param("subject") String subject, String subject_content);

    @Query("select s.subject_contents from SyllabusEntity s where s.grade = :grade and s.subject_name = :subject")
    List<String> viewContent(@Param("grade") String grade, @Param("subject") String subject);
}
