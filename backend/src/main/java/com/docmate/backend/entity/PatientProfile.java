package com.docmate.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PatientProfile {

    @Id
    private UUID patientId; // same as user_id

    @OneToOne
    @MapsId
    private User user;

    private String dob;
    private String gender;
    private String bloodGroup;
    private double heightCm;
    private double weightKg;
    private String allergies;
    private String chronicConditions;
    private String emergencyContactName;
    private String emergencyContactNumber;

    @Column(columnDefinition = "jsonb")
    private String medicalHistory;
}