import React, { useState } from 'react';
import './AdminRegister.css';

const AdminRegister = () => {
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
    console.log('Admin Registered:', adminData);
    // Send to backend API here
  };

  return (
    <div className="admin-register-container">
      <h2>Admin Registration</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="secretKey" placeholder="Admin Secret Key" onChange={handleChange} required />
        <button type="submit">Register as Admin</button>
      </form>
    </div>
  );
};

export default AdminRegister;
