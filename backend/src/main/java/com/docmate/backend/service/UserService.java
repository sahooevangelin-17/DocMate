package com.docmate.backend.service;

import com.docmate.backend.dto.DoctorPublicDTO;
import com.docmate.backend.dto.UserProfileDTO;
import com.docmate.backend.entity.User;

import java.util.List;
import java.util.UUID;

public interface UserService {
    UserProfileDTO getUserProfile(UUID userId);
    UserProfileDTO updateUserProfile(UUID userId, UserProfileDTO update);
    List<DoctorPublicDTO> getAllApprovedDoctors();
}

