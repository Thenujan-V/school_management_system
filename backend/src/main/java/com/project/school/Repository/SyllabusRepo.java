package com.project.school.Repository;

import com.project.school.Entity.SyllabusEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SyllabusRepo extends JpaRepository<SyllabusEntity, Long> {
}
