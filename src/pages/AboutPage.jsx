import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About DocMate</h1>
        <p>Empowering healthcare through technology.</p>
      </header>

      <section className="about-intro">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            DocMate is a one-stop platform transforming how people access healthcare. Whether you're in a metro city or a remote village, our goal is to connect you with top doctors, instantly and affordably.
          </p>
          <p>
            We simplify the process of booking appointments, consulting doctors, accessing medical records, and receiving ongoing care.
          </p>
        </div>
        <div className="about-image">
          <img src="https://www.shutterstock.com/image-photo/doctor-utilizing-advanced-digital-tablet-600nw-2481904799.jpg" alt="Healthcare Tech" />
        </div>
      </section>

      <section className="mission-vision">
        <div className="card">
          <h3>🌟 Our Mission</h3>
          <p>To make quality healthcare accessible and affordable for every individual by combining technology with compassion.</p>
        </div>
        <div className="card">
          <h3>🚀 Our Vision</h3>
          <p>To become the most trusted digital health companion by providing seamless healthcare experiences globally.</p>
        </div>
      </section>

      <section className="team">
        <h2>Meet the Team Behind DocMate</h2>
        <div className="team-members">
          <div className="member">
            <h4>Evangelin Sahoo</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="member">
            <h4>P.Deepshikha</h4>
            <p>CTO & Co-founder</p>
          </div>
          <div className="member">
            <h4>Minakshi Sahoo</h4>
            <p>Design Lead</p>
          </div>
        <div className="member">
            <h4>Kirti Surya</h4>
            <p>Design Lead</p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>© 2025 DocMate. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
