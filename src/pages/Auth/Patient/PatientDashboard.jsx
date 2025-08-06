// src/pages/Auth/Patient/PatientDashboard.jsx
import React from "react";
import "./PatientDashboard.css";
import { MdVideoCall } from "react-icons/md";

import { Link } from "react-router-dom";

const PatientDashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h2 className="logo">DocMate</h2>
        <nav className="dashboard-nav">
          <Link to="/home">Home</Link>
          <Link to="/patient-dashboard/find-doctor">Find Doctor</Link>
          <Link to="/patient-dashboard/video-consultation">
            <MdVideoCall style={{ verticalAlign: "middle", marginRight: "6px" }} />
            Video Consultation
          </Link>
          <Link to="/patient-dashboard/book-appointment">Book Appointment</Link>
          <Link to="/patient-dashboard/articles">
  📰 Articles
</Link>

          <Link to="/contact">Contact</Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome Back 👋</h1>
          <p>Get quick access to all your health services</p>
        </header>

        <section className="dashboard-cards">
          <div className="card">
            <h3>Book an Appointment</h3>
            <p>Consult with top doctors near you</p>
          </div>
          <div className="card">
            <h3>View Reports</h3>
            <p>Access your medical history securely</p>
          </div>
          <div className="card">
            <h3>Video Consultation</h3>
            <p>Connect with doctors from home</p>
          </div>
          <div className="card">
            <h3>Read Articles</h3>
            <p>Stay informed with verified health tips</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PatientDashboard;
