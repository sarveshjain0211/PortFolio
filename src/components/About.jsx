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
              Hello! I’m a Pre-Final Year B.Tech CSE student passionate about problem-solving and continuous learning. My tech journey began with Data Structures and Algorithms (DSA), which laid a strong logical foundation for my development skills.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Currently, I'm diving into Full Stack Web Development to build dynamic, user-friendly applications. I'm also intrigued by Artificial Intelligence and eager to explore how AI tools can solve complex real-world problems.
            </p>
            <p>
              I’m always excited to connect, collaborate, and build exciting projects with fellow tech enthusiasts!
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <FaMedal className="stat-icon" />
              <h4>Expertise</h4>
              <p>Problem Solving & Web Dev</p>
            </div>
            <div className="stat-box">
              <FaGraduationCap className="stat-icon" />
              <h4>Education</h4>
              <p>B.Tech / CSE</p>
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
