package com.project.school.Repository;

import com.project.school.Entity.AdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepo extends JpaRepository<AdminEntity, Integer> {
    @Query("select a from AdminEntity a where a.user_name = :userName")
    Optional<AdminEntity> findByUserName(String userName);
}
