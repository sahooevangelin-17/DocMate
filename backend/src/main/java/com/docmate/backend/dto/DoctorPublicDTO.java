package com.docmate.backend.dto;

import lombok.*;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DoctorPublicDTO {
    private UUID doctorId;
    private String fullName;
    private String specialization;
    private int experience;
    private double consultationFee;
    private boolean videoConsultationEnabled;
}