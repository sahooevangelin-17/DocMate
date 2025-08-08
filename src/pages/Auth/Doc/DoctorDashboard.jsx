// src/pages/Auth/Doctor/DoctorDashboard.jsx

import { Link } from 'react-router-dom';
import './DoctorDashboard.css';
import { MdDashboard, MdEventAvailable, MdVideoCall, MdLibraryBooks, MdSettings } from "react-icons/md";

import React, { useEffect, useState } from 'react';
// (keep the rest of your imports)

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [reports, setReports] = useState([]);
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    // Mock data fetch
    setAppointments([
      { id: 1, name: "John Doe", time: "10:00 AM" },
      { id: 2, name: "Jane Smith", time: "11:30 AM" },
    ]);
    setReports([
      { id: 1, patient: "Alice", status: "Pending" },
      { id: 2, patient: "Bob", status: "Pending" },
    ]);
    setConsultations([
      { id: 1, patient: "Charlie", time: "3:00 PM", link: "#" },
    ]);
  }, []);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>DocMate</h2>
        <nav>
          <Link to="/doctor-dashboard"><MdDashboard /> Dashboard</Link>
          <Link to="/doctor-dashboard/appointments"><MdEventAvailable /> Appointments</Link>
          <Link to="/doctor-dashboard/video-consultation"><MdVideoCall /> Video Calls</Link>
          <Link to="/doctor-dashboard/prescription">Digital Prescription</Link>
          <Link to="/articles"><MdLibraryBooks /> Articles</Link>
          <Link to="/doctor-dashboard/settings"><MdSettings /> Settings</Link>
          
        </nav>
      </aside>

      <main className="main-content">
        <h1>Welcome, Doctor!</h1>
        <p>Here’s your dashboard overview. Check appointments, consult patients, and manage articles.</p>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Today's Appointments</h3>
            <p>{appointments.length} Patients</p>
          </div>
          <div className="card">
            <h3>Pending Reports</h3>
            <p>{reports.length} Submissions</p>
          </div>
          <div className="card">
            <h3>Upcoming Consultations</h3>
            <p>{consultations.length} Video Calls</p>
          </div>
        </div>

        {/* Detailed Lists */}
        <section className="details-section">
          <h2>Today's Appointments</h2>
          <ul>
            {appointments.map((appt) => (
              <li key={appt.id}>{appt.time} - {appt.name}</li>
            ))}
          </ul>

          <h2>Pending Reports</h2>
          <ul>
            {reports.map((rep) => (
              <li key={rep.id}>{rep.patient} - {rep.status}</li>
            ))}
          </ul>

          <h2>Upcoming Consultations</h2>
          <ul>
            {consultations.map((con) => (
              <li key={con.id}>{con.time} with {con.patient} <a href={con.link}>Join</a></li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DoctorDashboard;
