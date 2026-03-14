import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);

    // TODO: Paste your Web3Forms access key below
    formData.append("access_key", "bf433b0f-39d6-40fe-b223-08eea7ef6476");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setIsSubmitting(false);
    
    // Clear out the success message after a few seconds
    setTimeout(() => {
      setResult("");
    }, 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get In <span>Touch</span></h2>
      
      <div className="container contact-container">
        
        <div className="contact-info glass-card">
          <h3>Contact <span>Information</span></h3>
          <p className="contact-desc">
            Feel free to reach out to me for any questions or opportunities!
          </p>
          
          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div className="info-content">
              <h4>Email</h4>
              <a href="mailto:sarveshjain2222@gmail.com">sarveshjain2222@gmail.com</a>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>
            <div className="info-content">
              <h4>Phone</h4>
              <a href="tel:+917477270870">+91   7477270870</a>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-content">
              <h4>Location</h4>
              <p>Jalandhar, India</p>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/sarveshjain0211" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sarvesh-jain-925595229/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
        
        <form className="contact-form glass-card" onSubmit={onSubmit}>
          <h3>Send Me A <span>Message</span></h3>
          
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required className="form-input" />
          </div>
          
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required className="form-input" />
          </div>
          
          <div className="form-group">
            <input type="text" name="subject" placeholder="Subject" required className="form-input" />
          </div>
          
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows="6" required className="form-input"></textarea>
          </div>
          
          <button type="submit" className="neon-btn primary submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          
          {result && <div className="form-result" style={{ marginTop: '1rem', color: result.includes("Error") ? '#ff4d4d' : '#4caf50', textAlign: 'center' }}>{result}</div>}
        </form>
        
      </div>
    </section>
  );
};

export default Contact;
