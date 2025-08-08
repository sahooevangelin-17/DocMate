import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorRegister.css';

const DoctorRegister = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [approved, setApproved] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setShowPopup(true); // Show upload popup
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    setMessage('Request sent to admin. Waiting for approval...');

    // Simulate approval and redirect after 2 seconds
    setTimeout(() => {
      setMessage('Admin has approved your profile ✅');
      setApproved(true);

      setTimeout(() => {
        navigate('/doctor-dashboard'); // Go to dashboard
      }, 2000);
    }, 2000);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Doctor Registration</h2>
        <p>Fill in your details to register as a doctor.</p>

        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="text" placeholder="Specialization" required />
          <input type="text" placeholder="Experience (in years)" required />
          <button className="auth-btn" type="submit">Register</button>
        </form>

        {showPopup && (
          <div className="upload-popup">
            <h3>Upload Documents</h3>
            <form onSubmit={handleUploadSubmit}>
              <label>Upload Bio Data:</label>
              <input type="file" required />

              <label>Upload Course Completion Certificate:</label>
              <input type="file" required />

              <button className="auth-btn" type="submit">Submit Documents</button>
            </form>

            {message && <p className="success-message">{message}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorRegister;
