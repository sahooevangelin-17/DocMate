package com.docmate.backend.service;

import com.docmate.backend.dto.DoctorPublicDTO;
import com.docmate.backend.dto.UserProfileDTO;
import com.docmate.backend.entity.DoctorProfile;
import com.docmate.backend.entity.User;
import com.docmate.backend.repository.DoctorProfileRepository;
import com.docmate.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final DoctorProfileRepository doctorRepo;

    @Override
    public UserProfileDTO getUserProfile(UUID userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return mapToDto(user);
    }

    @Override
    public UserProfileDTO updateUserProfile(UUID userId, UserProfileDTO update) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        user.setFullname(update.getFullName());
        user.setPhone(update.getPhone());
        user.setVideoConsultationEnabled(update.isVideoConsultationEnabled());
        user.setActive(update.isActive());
        userRepository.save(user);
        return mapToDto(user);
    }

    @Override
    public List<DoctorPublicDTO> getAllApprovedDoctors() {
        return doctorRepo.findByIsApprovedTrue().stream()
                .map(doc -> DoctorPublicDTO.builder()
                        .doctorId(doc.getDoctorId())
                        .fullName(doc.getUser().getFullname())
                        .specialization(doc.getSpecialization())
                        .experience(doc.getExperience())
                        .consultationFee(doc.getConsultationFee())
                        .videoConsultationEnabled(doc.getUser().isVideoConsultationEnabled())
                        .build())
                .collect(Collectors.toList());
    }

    private UserProfileDTO mapToDto(User user) {
        return UserProfileDTO.builder()
                .fullName(user.getFullname())
                .email(user.getEmail())
                .phone(user.getPhone())
                .role(user.getRole())
                .videoConsultationEnabled(user.isVideoConsultationEnabled())
                .isActive(user.isActive())
                .build();
    }
}
