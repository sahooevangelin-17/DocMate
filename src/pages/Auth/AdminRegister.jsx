import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminRegister.css';

const AdminRegister = () => {
  const navigate = useNavigate();

  const [adminData, setAdminData] = useState({
    name: '',
    email: '',
    password: '',
    secretKey: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (adminData.secretKey !== 'admin123') {
      alert('Invalid Admin Secret Key!');
      return;
    }

    console.log('Admin Registered:', adminData);
    // API Call here...

    // Redirect to admin dashboard
    navigate('/admin/admin-dashboard');
  };

  return (
    <div className="admin-register-container">
      <div className="form-box">
        <h2>Register as Admin</h2>
        <form className="admin-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="secretKey"
            placeholder="Enter Secret Key"
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p className="login-link">
          Already an admin? <Link to="/admin-login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;
