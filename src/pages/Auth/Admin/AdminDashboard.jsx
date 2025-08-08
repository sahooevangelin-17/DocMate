import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';
import {
  MdDashboard,
  MdPeople,
  MdMedicalServices,
  MdEvent,
  MdBarChart,
  MdSettings
} from 'react-icons/md';

// Sidebar component
const AdminSidebar = () => {
  return (
    <nav>
      <Link to="/admin/admin-dashboard"><MdDashboard /> Dashboard</Link>
      <Link to="/admin-dashboard/patients"><MdPeople /> Patient</Link>
      <Link to="/admin-dashboard/doctors"><MdMedicalServices /> Doctors</Link>
      <Link to="/admin-dashboard/appointments"><MdEvent /> Appointments</Link>
      <Link to="/admin-dashboard/reports"><MdBarChart /> Reports</Link>
      <Link to="/admin-dashboard/settings"><MdSettings /> Settings</Link>
    </nav>
  );
};

// Main dashboard component
const AdminDashboard = () => {
  const [metrics] = useState({
    totalUsers: 1024,
    pendingDoctors: 12,
    monthlyRevenue: 98400,
    todayAppointments: 37,
    activeOnline: 9,
    activeOffline: 5,
    flaggedFeedback: 3,
  });

  const revenueData = [
    { month: 'Jan', revenue: 24000 },
    { month: 'Feb', revenue: 31000 },
    { month: 'Mar', revenue: 18000 },
    { month: 'Apr', revenue: 36000 },
    { month: 'May', revenue: 42000 },
    { month: 'Jun', revenue: 51000 },
  ];

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <h2>DocMate</h2>
        <AdminSidebar />
      </aside>

      <main className="main-content">
        <div className="dashboard-header">
          <h1>Welcome, Admin!</h1>
          <p>Manage users, appointments, revenue and approvals.</p>
        </div>

        <div className="dashboard-cards">
          <div className="info-card">
            <h2>Total Users</h2>
            <p>{metrics.totalUsers} Registered</p>
          </div>
          <div className="info-card">
            <h2>Pending Approvals</h2>
            <p>{metrics.pendingDoctors} Doctors</p>
            <button className="review-btn">Review</button>
          </div>
          <div className="info-card">
            <h2>Monthly Revenue</h2>
            <p>₹{metrics.monthlyRevenue.toLocaleString()}</p>
          </div>
          <div className="info-card">
            <h2>Today's Appointments</h2>
            <p>{metrics.todayAppointments}</p>
          </div>
          <div className="info-card">
            <h2>Active Consultations</h2>
            <p>Online: {metrics.activeOnline}</p>
            <p>Offline: {metrics.activeOffline}</p>
          </div>
          <div className="info-card">
            <h2>Flagged Feedback</h2>
            <p>{metrics.flaggedFeedback}</p>
          </div>
        </div>

        <div className="chart-section">
          <h2 className="chart-title">Monthly Revenue Trends</h2>
          <div className="bar-chart">
            {revenueData.map((data, index) => (
              <div key={index} className="bar-group">
                <div
                  className="bar"
                  style={{ height: `${data.revenue / 1000}px` }}
                  title={`₹${data.revenue.toLocaleString()}`}
                ></div>
                <span>{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
