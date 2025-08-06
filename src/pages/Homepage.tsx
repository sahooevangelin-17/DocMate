import React from 'react';
import './HomePage.css';

const doctors = [
  { name: "Dr. Aditi Sharma", specialty: "Cardiologist", rating: 4.8 },
  { name: "Dr. Rajeev Menon", specialty: "Dermatologist", rating: 4.6 },
  { name: "Dr. Neha Gupta", specialty: "Neurologist", rating: 4.9 },
  { name: "Dr. Vikram Singh", specialty: "Orthopedic", rating: 4.7 },
];

const HomePage = () => {
  return (
    <div className="home">
      <section className="intro">
        <h1>Welcome to DocMate</h1>
        <p>We are revolutionizing healthcare by bringing top doctors to your fingertips. Teleconsult, book appointments, and manage medical records—all in one platform.</p>
      </section>

      <section className="doctors">
        <h2>Top Rated Doctors</h2>
        <div className="doctor-list">
          {doctors.map((doc, index) => (
            <div className="doctor-card" key={index}>
              <img src={`https://source.unsplash.com/100x100/?doctor,${doc.specialty}`} alt={doc.name} />
              <h3>{doc.name}</h3>
              <p>{doc.specialty}</p>
              <p>⭐ {doc.rating}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="extras">
        <h2>Explore More</h2>
        <ul>
          <li>🔒 End-to-end encrypted teleconsultations</li>
          <li>📅 Personalized health reminders</li>
          <li>📊 AI-powered health insights</li>
          <li>💬 Live chat support with medical experts</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2025 DocMate. Trusted by thousands of patients nationwide.</p>
      </footer>
    </div>
  );
};

export default HomePage;
