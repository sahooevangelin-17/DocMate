import React from 'react';
import './FeaturesPage.css';

const FeaturesPage = () => {
  return (
    <div className="features-page">
      <h1>Our Features</h1>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>📱 Teleconsultation</h3>
          <p>Consult with top doctors from the comfort of your home via secure video calls.</p>
        </div>
        <div className="feature-card">
          <h3>📅 Easy Appointment Booking</h3>
          <p>Book and manage appointments in a few clicks with real-time availability.</p>
        </div>
        <div className="feature-card">
          <h3>📂 Secure Health Records</h3>
          <p>Access your digital health records anytime, anywhere with end-to-end encryption.</p>
        </div>
        <div className="feature-card">
          <h3>⚡ Fast and Reliable</h3>
          <p>Get quick responses, timely reminders, and smooth user experience.</p>
        </div>
        <div className="feature-card">
          <h3>🌍 Multilingual Support</h3>
          <p>Choose your preferred language and consult without barriers.</p>
        </div>
        <div className="feature-card">
          <h3>💬 Live Support</h3>
          <p>Need help? Our support team is just a message away 24/7.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
