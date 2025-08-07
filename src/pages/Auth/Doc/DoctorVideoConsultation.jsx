// src/pages/Auth/Doc/DoctorVideoConsultation.jsx
import React, { useState } from 'react';
import './DoctorVideoConsultation.css';

const sampleConsultations = [
  {
    id: 1,
    patientName: 'Riya Sen',
    time: '10:30 AM',
    date: '2025-08-08',
    link: 'https://meet.jit.si/DocMate-RiyaSen-1',
    status: 'Scheduled'
  },
  {
    id: 2,
    patientName: 'Aman Gupta',
    time: '12:00 PM',
    date: '2025-08-08',
    link: 'https://meet.jit.si/DocMate-AmanGupta-2',
    status: 'Scheduled'
  }
];

const DoctorVideoConsultation = () => {
  const [consultations, setConsultations] = useState(sampleConsultations);

  const handleMarkComplete = (id) => {
    const updated = consultations.map(cons =>
      cons.id === id ? { ...cons, status: 'Completed' } : cons
    );
    setConsultations(updated);
  };

  return (
    <div className="video-consult-container">
      <h2>Today's Video Consultations</h2>
      {consultations.length === 0 ? (
        <p>No consultations scheduled.</p>
      ) : (
        <div className="consultation-list">
          {consultations.map((cons) => (
            <div className="consultation-card" key={cons.id}>
              <h3>{cons.patientName}</h3>
              <p><strong>Date:</strong> {cons.date}</p>
              <p><strong>Time:</strong> {cons.time}</p>
              <p><strong>Status:</strong> {cons.status}</p>
              <div className="actions">
                <a href={cons.link} target="_blank" rel="noopener noreferrer" className="join-btn">Join Call</a>
                {cons.status === 'Scheduled' && (
                  <button className="complete-btn" onClick={() => handleMarkComplete(cons.id)}>Mark as Completed</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorVideoConsultation;
