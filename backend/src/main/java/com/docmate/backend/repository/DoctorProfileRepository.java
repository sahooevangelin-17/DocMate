package com.docmate.backend.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;

import com.docmate.backend.entity.DoctorProfile;

public interface DoctorProfileRepository extends JpaRepository<DoctorProfile, UUID> {
    List<DoctorProfile> findByIsApprovedTrue();
}
