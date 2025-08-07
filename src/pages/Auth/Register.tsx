import React from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleDoctorRegister = () => {
    navigate("/register/doctor");
  };

  const handlePatientRegister = () => {
    navigate("/register/patient");
  };

  const handleAdminRegister = () => {
    navigate("/register/admin");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register As</h2>
        <p>Select your role to continue</p>
        <div className="register-options">
          <button className="auth-btn" onClick={handleDoctorRegister}>
            Doctor
          </button>
          <button className="auth-btn" onClick={handlePatientRegister}>
            Patient
          </button>
          <button className="auth-btn" onClick={handleAdminRegister}>
            Admin
          </button>
        </div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
