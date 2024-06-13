package com.project.school.Repository;

import com.project.school.Entity.EventsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventsRepo extends JpaRepository<EventsEntity, Integer> {
}
