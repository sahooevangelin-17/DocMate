import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientRegister.css"; // link to the CSS file

const PatientRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can send the data to your backend

    console.log("Registered Patient:", formData);
    navigate("/patient-dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Patient Registration</h2>
        <p>Create your patient account</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
          <button type="submit" className="auth-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default PatientRegister;
