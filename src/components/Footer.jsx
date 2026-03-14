import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <span className="neon-text">Port</span>Folio
        </div>
        
        <p className="footer-copyright">
          &copy; {currentYear} Sarvesh Jain. All rights reserved. Built with React & Neon Vibes.
        </p>
        
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
