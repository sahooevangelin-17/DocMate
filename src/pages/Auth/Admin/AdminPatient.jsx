import React, { useState } from "react";
import "./AdminPatient.css";

const dummyPatients = [
  { id: 1, name: "Anjali Mehta", email: "anjali@gmail.com", age: 28, gender: "Female", phone: "9876543210", status: "Active", regDate: "2025-08-01" },
  { id: 2, name: "Ravi Kumar", email: "ravi.kumar@gmail.com", age: 34, gender: "Male", phone: "9123456789", status: "Inactive", regDate: "2025-07-28" }
];

const AdminPatient = () => {
  const [patients, setPatients] = useState(dummyPatients);
  const [selected, setSelected] = useState(null);

  return (
    <div className="admin-patient-container">
      <h2>👥 Patient Management</h2>

      <input
        type="text"
        placeholder="Search patients..."
        className="search-input"
      />

      <div className="table-wrapper">
        <table className="patient-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age / Gender</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Reg. Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{p.age} / {p.gender}</td>
                <td>{p.phone}</td>
                <td className={p.status === "Active" ? "active" : "inactive"}>{p.status}</td>
                <td>{p.regDate}</td>
                <td>
                  <button className="view-btn" onClick={() => setSelected(p)}>View</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="modal">
          <div className="modal-content">
            <h3>Patient Details</h3>
            <p><strong>Name:</strong> {selected.name}</p>
            <p><strong>Email:</strong> {selected.email}</p>
            <p><strong>Phone:</strong> {selected.phone}</p>
            <p><strong>Gender:</strong> {selected.gender}</p>
            <p><strong>Age:</strong> {selected.age}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPatient;
