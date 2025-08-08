package com.docmate.backend.controller;

import com.docmate.backend.dto.DoctorPublicDTO;
import com.docmate.backend.dto.UserProfileDTO;
import com.docmate.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    public UserProfileDTO getProfile(@RequestParam UUID userId) {
        return userService.getUserProfile(userId);
    }

    @PatchMapping("/me")
    public UserProfileDTO updateProfile(@RequestParam UUID userId,
                                        @RequestBody UserProfileDTO profileDTO) {
        return userService.updateUserProfile(userId, profileDTO);
    }

    @GetMapping("/doctors")
    public List<DoctorPublicDTO> getAllApprovedDoctors() {
        return userService.getAllApprovedDoctors();
    }
}
