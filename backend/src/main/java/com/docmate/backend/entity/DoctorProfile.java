package com.docmate.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DoctorProfile {

    @Id
    private UUID doctorId;

    @OneToOne
    @MapsId
    private User user;

    private String specialization;
    private int experience;
    private String bio;
    private double consultationFee;
    private String licenseNumber;
    private boolean emergencyAvailable;
    private boolean isApproved;
    private String profilePic;
}
