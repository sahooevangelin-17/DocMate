// src/pages/Auth/Doctor/DoctorDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './DoctorDashboard.css';
import { MdDashboard, MdEventAvailable, MdVideoCall, MdLibraryBooks, MdSettings } from "react-icons/md";

const DoctorDashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>DocMate</h2>
        <nav>
          <Link to="/doctor/dashboard"><MdDashboard /> Dashboard</Link>
          <Link to="/doctor/appointments"><MdEventAvailable /> Appointments</Link>
          <Link to="/doctor/consultations"><MdVideoCall /> Video Calls</Link>
          <Link to="/doctor/articles"><MdLibraryBooks /> Articles</Link>
          <Link to="/doctor/settings"><MdSettings /> Settings</Link>
        </nav>
      </aside>

      <main className="main-content">
        <h1>Welcome, Doctor!</h1>
        <p>Here’s your dashboard overview. Check appointments, consult patients, and manage articles.</p>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Today's Appointments</h3>
            <p>8 Patients</p>
          </div>
          <div className="card">
            <h3>Pending Reports</h3>
            <p>4 Submissions</p>
          </div>
          <div className="card">
            <h3>Upcoming Consultations</h3>
            <p>3 Video Calls</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;
