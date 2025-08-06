import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions, suggestions, or feedback, feel free to reach out to us!</p>

      <div className="contact-form">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <p>📧 Email: support@docmate.com</p>
        <p>📞 Phone: +91 98765 43210</p>
        <p>📍 Location: ITER SOA University, Bhubaneswar, India</p>
      </div>
    </div>
  );
};

export default ContactPage;
