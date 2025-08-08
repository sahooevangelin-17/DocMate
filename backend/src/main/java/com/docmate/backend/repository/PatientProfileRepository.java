package com.docmate.backend.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.docmate.backend.entity.PatientProfile;

public interface PatientProfileRepository extends JpaRepository<PatientProfile, UUID> {
    
}
