package com.docmate.backend.dto;

import com.docmate.backend.entity.Role;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserProfileDTO {
    private String fullName;
    private String email;
    private String phone;
    private Role role;
    private boolean videoConsultationEnabled;
    private boolean isActive;
}