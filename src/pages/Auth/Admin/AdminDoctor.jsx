import React, { useState } from "react";
import "./AdminDoctor.css";

const dummyDoctors = [
  { id: 1, name: "Dr. Priya Sharma", email: "priya.sharma@hospital.com", specialization: "Cardiology", experience: "8 years", status: "Active", regDate: "2025-08-02" },
  { id: 2, name: "Dr. Arjun Singh", email: "arjun.singh@clinic.com", specialization: "Dermatology", experience: "5 years", status: "Inactive", regDate: "2025-07-30" }
];

const AdminDoctor = () => {
  const [doctors, setDoctors] = useState(dummyDoctors);
  const [selected, setSelected] = useState(null);

  return (
    <div className="admin-doctor-container">
      <h2>Doctor Management</h2>
      <input type="text" placeholder="Search doctors..." className="search-input" />

      <table className="doctor-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Status</th>
            <th>Reg. Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((d, index) => (
            <tr key={d.id}>
              <td>{index + 1}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.specialization}</td>
              <td>{d.experience}</td>
              <td className={d.status === "Active" ? "active" : "inactive"}>{d.status}</td>
              <td>{d.regDate}</td>
              <td>
                <button className="view-btn" onClick={() => setSelected(d)}>View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <div className="modal">
          <div className="modal-content">
            <h3>Doctor Details</h3>
            <p><strong>Name:</strong> {selected.name}</p>
            <p><strong>Email:</strong> {selected.email}</p>
            <p><strong>Specialization:</strong> {selected.specialization}</p>
            <p><strong>Experience:</strong> {selected.experience}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDoctor;
