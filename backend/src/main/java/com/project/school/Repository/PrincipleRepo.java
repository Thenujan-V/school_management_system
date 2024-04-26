package com.project.school.Repository;

import com.project.school.Entity.PrincipleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrincipleRepo extends JpaRepository<PrincipleEntity, Integer> {

}
