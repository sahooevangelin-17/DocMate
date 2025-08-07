import React, { useState } from 'react';
import './DoctorAppointments.css';

const sampleAppointments = [
  {
    id: 1,
    patientName: "Riya Sen",
    date: "2025-08-09",
    time: "10:00 AM",
    reason: "Fever & Body Ache",
  },
  {
    id: 2,
    patientName: "Aman Gupta",
    date: "2025-08-09",
    time: "11:30 AM",
    reason: "Skin Allergy",
  },
  {
    id: 3,
    patientName: "Soham Roy",
    date: "2025-08-09",
    time: "02:00 PM",
    reason: "Routine Checkup",
  }
];

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState(sampleAppointments);
  const [rescheduleId, setRescheduleId] = useState(null);
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleCancel = (id) => {
    const updated = appointments.filter(app => app.id !== id);
    setAppointments(updated);
  };

  const handleReschedule = (id) => {
    setRescheduleId(id);
    setShowPopup(true);
  };

  const handleRescheduleSubmit = () => {
    const updated = appointments.map(app =>
      app.id === rescheduleId
        ? { ...app, date: newDate, time: newTime }
        : app
    );
    setAppointments(updated);
    setShowPopup(false);
    alert("Reschedule request sent.");
    setNewDate('');
    setNewTime('');
  };

  return (
    <div className="appointments-container">
      <h2>Upcoming Appointments</h2>

      {appointments.length === 0 ? (
        <p>No upcoming appointments.</p>
      ) : (
        <div className="appointments-list">
          {appointments.map(app => (
            <div key={app.id} className="appointment-card">
              <h3>{app.patientName}</h3>
              <p><strong>Date:</strong> {app.date}</p>
              <p><strong>Time:</strong> {app.time}</p>
              <p><strong>Reason:</strong> {app.reason}</p>
              <div className="actions">
                <button className="reschedule-btn" onClick={() => handleReschedule(app.id)}>Reschedule</button>
                <button className="cancel-btn" onClick={() => handleCancel(app.id)}>Cancel</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* POPUP for Reschedule */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Reschedule Appointment</h3>
            <label>New Date:</label>
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
            <label>New Time:</label>
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
            />
            <div className="popup-actions">
              <button onClick={handleRescheduleSubmit}>Submit</button>
              <button onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorAppointments;
