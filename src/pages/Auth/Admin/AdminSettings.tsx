import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminSettings.css";

const AdminSettings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: Clear local storage/session here
    // localStorage.removeItem("adminToken");

    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="admin-settings-container">
      <h2>Admin Settings</h2>

      <div className="settings-section">
        <h3>Profile Information</h3>
        <div className="settings-row">
          <label>Name:</label>
          <input type="text" value="Admin Name" readOnly />
        </div>
        <div className="settings-row">
          <label>Email:</label>
          <input type="email" value="admin@docmate.com" readOnly />
        </div>
      </div>

      <div className="settings-section">
        <h3>Change Password</h3>
        <div className="settings-row">
          <label>Old Password:</label>
          <input type="password" />
        </div>
        <div className="settings-row">
          <label>New Password:</label>
          <input type="password" />
        </div>
        <div className="settings-row">
          <label>Confirm Password:</label>
          <input type="password" />
        </div>
        <button className="update-btn">Update Password</button>
      </div>

      <div className="settings-section">
        <h3>Logout</h3>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default AdminSettings;
