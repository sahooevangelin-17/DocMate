import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LandingPage.css';

const topDoctors = [
  {
    name: "Dr. Neha Gupta",
    specialty: "Neurologist",
    rating: 4.9,
    image: "https://img.freepik.com/free-photo/front-view-smiley-doctor-holding-notebook_23-2149726915.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Dr. Aditi Sharma",
    specialty: "Cardiologist",
    rating: 4.8,
    image: "https://st.depositphotos.com/49005766/54607/i/1600/depositphotos_546073024-stock-photo-indian-female-doctor-portrait-south.jpg",
  },
  {
    name: "Dr. Rajeev Menon",
    specialty: "Dermatologist",
    rating: 4.6,
    image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
  },
  {
    name: "Dr. Vikram Singh",
    specialty: "Orthopedic",
    rating: 4.7,
    image: "https://thumbs.dreamstime.com/b/indian-male-doctor-25181027.jpg",
  },
];

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelect = (role: string) => {
    setShowModal(false);
    navigate(`/login?role=${role}`);
  };

  return (
    <div className="landing">
      <nav className="navbar">
        <div className="logo">DocMate</div>
        <ul className="nav-links">
            <li><Link to="/About">About</Link></li>
            <li><Link to="/FeatureS">Features</Link></li>
            <li><Link to="/Articles">Articles</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            </ul>

             <Link to="/Login">
          <button className="login-btn">Login</button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>One Click to Care</h1>
          <p>Your health, our mission. Book doctor appointments, teleconsult, and manage your medical records—all in one place.</p>
          <button className="get-started" onClick={() => setShowModal(true)}>
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <img src="https://img.freepik.com/premium-photo/white-pills-thermometer-stethoscope-purple-background_260672-878.jpg" alt="healthcare" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose DocMate?</h2>
        <p>We make healthcare more accessible, affordable, and convenient. With just a few clicks, book consultations, talk to specialists, and manage your medical records seamlessly.</p>
      </section>

      {/* Top Rated Doctors */}
      <section className="top-doctors">
        <h2>Top Rated Doctors</h2>
        <div className="doctor-list">
          {topDoctors.map((doc, index) => (
            <div className="doctor-card" key={index}>
              <img src={doc.image} alt={doc.name} />
              <h3>{doc.name}</h3>
              <p>{doc.specialty}</p>
              <p>⭐ {doc.rating}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <h3>All Specializations Covered</h3>
          <p>From dermatologists to cardiologists, book appointments with highly qualified specialists.</p>
        </div>
        <div className="feature-card">
          <h3>24x7 Online Consultation</h3>
          <p>Access top doctors anytime, anywhere with our online video consultation feature.</p>
        </div>
        <div className="feature-card">
          <h3>Secure Medical Records</h3>
          <p>Your Electronic Health Records (EHR) are securely stored and always accessible to you.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>New to DocMate?</h2>
        <p>Register now to access our pool of top-rated doctors and health services.</p>
        <Link to="/Register"><button className="get-started">Register Now</button></Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 DocMate. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Continue As</h2>
            <div className="role-buttons">
              <button onClick={() => handleRoleSelect('patient')}>Patient</button>
              <button onClick={() => handleRoleSelect('doctor')}>Doctor</button>
            </div>
            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
