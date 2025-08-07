import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorSettings.css';

const DoctorSettings = () => {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [doctor, setDoctor] = useState({
    name: 'Dr. Anjali Sharma',
    email: 'anjali.sharma@example.com',
    phone: '9876543210',
    specialization: 'Cardiologist',
  });

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditing(false);
    alert('Profile updated!');
  };

  const handleLogout = () => {
    // Add logout logic (like clearing auth tokens if needed)
    navigate('/login');
  };

  return (
    <div className="doctor-settings-container">
      <h2>Account Settings</h2>

      <div className="settings-section">
        <h3>Main Account Info</h3>
        <p><strong>Name:</strong> {doctor.name}</p>
        <p><strong>Email:</strong> {doctor.email}</p>
        <p><strong>Phone:</strong> {doctor.phone}</p>
        <p><strong>Specialization:</strong> {doctor.specialization}</p>
      </div>

      <div className="settings-section">
        <h3>Edit Profile</h3>
        {editing ? (
          <div className="edit-form">
            <input type="text" name="name" value={doctor.name} onChange={handleChange} />
            <input type="email" name="email" value={doctor.email} onChange={handleChange} />
            <input type="text" name="phone" value={doctor.phone} onChange={handleChange} />
            <input type="text" name="specialization" value={doctor.specialization} onChange={handleChange} />
            <button className="save-btn" onClick={handleSave}>Save</button>
          </div>
        ) : (
          <button className="edit-btn" onClick={() => setEditing(true)}>Edit Profile</button>
        )}
      </div>

      <div className="settings-section">
        <h3>Change Password</h3>
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="password-btn">Update Password</button>
      </div>

      <div className="settings-section logout-section">
        <h3>Logout</h3>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default DoctorSettings;
