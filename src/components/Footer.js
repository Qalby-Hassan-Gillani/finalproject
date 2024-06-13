import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === '' || message === '') {
      alert('Please fill in both the email and message fields.');
    } else {
      alert('Notification sent to the owner.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">Cake Couture Creations</h1>
          <p>
            Cake Couture Creations is a leading provider of high-quality products. We offer a wide range of cakes to cater to all your needs.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; 0318-6806655</span>
            <span><i className="fas fa-envelope"></i> &nbsp; qalbyhassan95@gmail.com</span>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#container">Image Gallery</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#">Terms and Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <br />
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              name="email" 
              className="text-input contact-input" 
              placeholder="Your email address..." 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <textarea 
              name="message" 
              className="text-input contact-input" 
              placeholder="Your message..." 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            />
            <button type="submit" className="btn btn-big">
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; cakescouture.com | Designed by CakesCoutureCreations
      </div>
    </footer>
  );
};

export default Footer;
