import React, { useState } from "react";
import "./DoctorRegister.css";
import { useNavigate } from "react-router-dom";

const DoctorRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    specialization: "",
    experience: "",
    courses: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Registered:", formData);
    // TODO: Save data to backend here

    // Navigate to doctor dashboard after registration
    navigate("/doctor-dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register as Doctor 🩺</h2>
        <p>Fill in the details to join as a healthcare provider</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            value={formData.specialization}
            onChange={handleChange}
          />
          <input
            type="number"
            name="experience"
            placeholder="Years of Experience"
            value={formData.experience}
            onChange={handleChange}
          />
          <input
            type="text"
            name="courses"
            placeholder="Completed Medical Courses"
            value={formData.courses}
            onChange={handleChange}
          />
          <button className="auth-btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegister;
