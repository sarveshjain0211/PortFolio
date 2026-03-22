import React from 'react';
import './Hero.css';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="section hero-section">
      <div className="hero-background"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="animate-up">Hello, I'm</h2>
          <h1 className="animate-up delay-1">
            <span className="gradient-text">Sarvesh Jain</span>
          </h1>
          <h3 className="animate-up delay-2">Full Stack Developer | Driven by Logic, Powered by Creativity.</h3>
          <p className="hero-description animate-up delay-3">
            I craft high-performance web applications and solve complex algorithms. 
            Passionate about modern design, clean code, and scalable architecture.
          </p>
          
          <div className="hero-buttons animate-up delay-3">
            <a href="#projects" className="neon-btn primary">
              View My Work
            </a>
            <a href="/Sarvesh_Jain_1.pdf" download className="neon-btn">
              Download CV <FaDownload style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-up delay-2">
          {/* Using a placeholder hexagon/circle with a glowing border until user provides a photo */}
          <div className="profile-image-container">
            <div className="image-glow"></div>
            <img 
              src="ProfileShot1.jpeg" 
              alt="Professional Headshot" 
              className="profile-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
