package com.project.school.Repository;

import com.project.school.Entity.EventsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventsRepo extends JpaRepository<EventsEntity, Integer> {
    @Query("select e from EventsEntity e order by e.event_id desc")
    List<EventsEntity> findAllEvents();
}
