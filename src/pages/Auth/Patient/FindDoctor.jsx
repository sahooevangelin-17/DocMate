import React, { useState } from "react";
import "./FindDoctor.css";

const specializations = [
  "All",
  "Cardiologist",
  "Neurologist",
  "Dermatologist",
  "Dentist",
  "Pediatrician",
  "Orthopedic",
  "Psychiatrist",
  "Gynecologist",
  "ENT Specialist",
  "General Physician",
];

const doctors = Array.from({ length: 50 }, (_, i) => ({
  name: `Dr. ${["Aarya", "Ved", "Sanya", "Kabir", "Rhea", "Aryan", "Tara", "Vivaan", "Kiara", "Arjun"][i % 10]} ${["Sharma", "Verma", "Reddy", "Mishra", "Iyer"][i % 5]}`,
  specialization: specializations[(i % (specializations.length - 1)) + 1], // skip "All"
  experience: `${Math.floor(Math.random() * 21) + 5} years`,
  rating: (Math.random() * 2 + 3).toFixed(1),
}));

const FindDoctor = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialization =
      selectedSpecialization === "All" ||
      doc.specialization === selectedSpecialization;

    return matchesSearch && matchesSpecialization;
  });

  return (
    <div className="doctor-wrapper">
      <h2 className="page-title">Find a Doctor</h2>

      <div className="filters">
        <input
          type="text"
          className="search-input"
          placeholder="Search by name or specialization..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="specialization-dropdown"
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
        >
          {specializations.map((spec, i) => (
            <option key={i} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>

      <div className="doctor-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc, index) => (
            <div key={index} className="doctor-card">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(doc.name)}&background=random&size=128`}
                alt={doc.name}
                className="doctor-img"
              />
              <h3>{doc.name}</h3>
              <p><strong>Specialization:</strong> {doc.specialization}</p>
              <p><strong>Experience:</strong> {doc.experience}</p>
              <p><strong>Rating:</strong> ⭐ {doc.rating}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default FindDoctor;
