import React, { useState } from "react";
import "./AdminReport.css";

const dummyReports = [
  {
    id: 1,
    doctor: "Dr. Sneha Patel",
    patient: "Rohan Das",
    date: "2025-08-06",
    summary: "Prescribed antibiotics for throat infection. Advised rest for 3 days."
  },
  {
    id: 2,
    doctor: "Dr. Sameer Khan",
    patient: "Priya Nair",
    date: "2025-08-04",
    summary: "Conducted blood tests. Suspected anemia. Follow-up in one week."
  }
];

const AdminReport = () => {
  const [reports] = useState(dummyReports);

  return (
    <div className="admin-report-container">
      <h2>Doctor Reports</h2>
      <input type="text" placeholder="Search reports..." className="search-input" />

      <div className="report-list">
        {reports.map((report, index) => (
          <div key={report.id} className="report-card">
            <h3>Report #{index + 1}</h3>
            <p><strong>Doctor:</strong> {report.doctor}</p>
            <p><strong>Patient:</strong> {report.patient}</p>
            <p><strong>Date:</strong> {report.date}</p>
            <p><strong>Summary:</strong> {report.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReport;
