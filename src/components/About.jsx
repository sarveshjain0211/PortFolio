import React from 'react';
import './About.css';
import { FaGraduationCap, FaMedal } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <h2 className="section-title"><span>About</span> Me</h2>
      
      <div className="container about-container">
        <div className="about-content glass-card">
          <div className="about-text">
            <p style={{ marginBottom: '1rem' }}>
              Hello! I’m a Pre-Final Year B.Tech Computer Science Engineering student with a strong passion for problem-solving and continuous learning. My journey in tech began with Data Structures and Algorithms (DSA), where I’ve been sharpening my skills by tackling complex coding challenges. Solving DSA problems has not only strengthened my logical thinking but also laid a solid foundation for my development journey.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              I’m currently expanding my skill set by diving into Full Stack Web Development, learning how to build dynamic, user-friendly applications from front-end to back-end. I love creating functional, aesthetically pleasing projects and understanding the complete architecture of web applications.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Beyond that, I’m deeply intrigued by the world of Artificial Intelligence. I’m eager to explore various AI tools and techniques, discovering how they can be integrated into real-world solutions to solve complex problems.
            </p>
            <p>
              I’m always excited to connect with fellow tech enthusiasts, share knowledge, and collaborate on exciting projects.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <FaMedal className="stat-icon" />
              <h4>Experience</h4>
              <p>Problem Solving & Web Dev</p>
            </div>
            <div className="stat-box">
              <FaGraduationCap className="stat-icon" />
              <h4>Education</h4>
              <p>B.Tech / Degree Name</p>
            </div>
          </div>
        </div>

        <div className="education-timeline glass-card">
          <h3 className="timeline-title">Educational Details</h3>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Bachelor of Technology - Computer Science and Engineering</h4>
              <h5>Lovely Professional University (Punjab, India)</h5>
              <span className="timeline-date">August 2023 - Present</span>
              <p>CGPA: 8.78</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Intermediate (12th Grade)</h4>
              <h5>Gyanodaya SMVM Sr. Sec. School (Khurai, M.P.)</h5>
              <span className="timeline-date">Completed: June 2022</span>
              <p>Percentage: 83.2%</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Matriculation (10th Grade)</h4>
              <h5>Gyanodaya SMVM Sr. Sec. School (Khurai, M.P.)</h5>
              <span className="timeline-date">Completed: March 2020</span>
              <p>Percentage: 86%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
