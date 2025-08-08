import React, { useState } from "react";
import "./AdminAppointment.css";

const dummyAppointments = [
  {
    id: 1,
    patientName: "Anjali Mehta",
    doctorName: "Dr. Rohit Sharma",
    date: "2025-08-08",
    time: "10:00 AM",
    status: "Completed"
  },
  {
    id: 2,
    patientName: "Ravi Kumar",
    doctorName: "Dr. Ananya Sen",
    date: "2025-08-10",
    time: "03:30 PM",
    status: "Pending"
  }
];

const AdminAppointment = () => {
  const [appointments] = useState(dummyAppointments);

  return (
    <div className="admin-appointment-container">
      <h2>Appointment Management</h2>
      <input type="text" placeholder="Search appointments..." className="search-input" />

      <table className="appointment-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt, index) => (
            <tr key={appt.id}>
              <td>{index + 1}</td>
              <td>{appt.patientName}</td>
              <td>{appt.doctorName}</td>
              <td>{appt.date}</td>
              <td>{appt.time}</td>
              <td className={appt.status === "Completed" ? "completed" : "pending"}>
                {appt.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAppointment;
