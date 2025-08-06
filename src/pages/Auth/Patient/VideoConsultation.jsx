import React, { useState } from "react";
import "./VideoConsultation.css";

const mockDoctors = [
  {
    id: 1,
    name: "Dr. Aditi Sharma",
    specialization: "Dermatologist",
    experience: "7 years",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    available: true,
  },
  {
    id: 2,
    name: "Dr. Karan Verma",
    specialization: "Cardiologist",
    experience: "10 years",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    available: false,
  },
  {
    id: 3,
    name: "Dr. Sneha Mehta",
    specialization: "Pediatrician",
    experience: "5 years",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    available: true,
  },
  {
    id: 4,
    name: "Dr. Anil Kapoor",
    specialization: "Neurologist",
    experience: "12 years",
    img: "https://randomuser.me/api/portraits/men/58.jpg",
    available: true,
  },
];

const VideoConsultation = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div className="video-consult-container">
      <h2 className="vc-heading">Video Consultation</h2>

      <div className="doctor-video-grid">
        {mockDoctors.map((doc) => (
          <div key={doc.id} className="video-card">
            <img src={doc.img} alt={doc.name} className="video-doc-img" />
            <h3>{doc.name}</h3>
            <p>{doc.specialization}</p>
            <p>{doc.experience} experience</p>
            <p className={doc.available ? "available" : "unavailable"}>
              {doc.available ? "Available Now" : "Currently Offline"}
            </p>
            <button
              className="start-btn"
              disabled={!doc.available}
              onClick={() => setSelectedDoctor(doc)}
            >
              {doc.available ? "Start Consultation" : "Unavailable"}
            </button>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <div className="modal-overlay" onClick={() => setSelectedDoctor(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>Consulting with {selectedDoctor.name}</h3>
            <p>Specialization: {selectedDoctor.specialization}</p>
            <p>Experience: {selectedDoctor.experience}</p>
            <div className="video-simulated">
              <p>🔴 Live Video Call Simulated (UI Only)</p>
            </div>
            <button className="close-btn" onClick={() => setSelectedDoctor(null)}>
              End Call
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoConsultation;
