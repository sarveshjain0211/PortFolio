import React from 'react';
import './Certifications.css';
import { FaCertificate, FaTrophy, FaCode } from 'react-icons/fa';

const Certifications = () => {
  return (
    <section id="certifications" className="section cert-section">
      <h2 className="section-title">Achievements & <span>Certifications</span></h2>
      
      <div className="container">
        <div className="cert-grid">
          
          {/* Certifications Block */}
          <div className="cert-column">
            <h3 className="column-title"><FaCertificate className="title-icon" /> Certifications</h3>
            
            <div className="cert-list">
              <div className="cert-card glass-card">
                <div className="cert-icon-wrapper">
                  <FaCertificate />
                </div>
                <div className="cert-content">
                  <h4>
                    <a href="#" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} title="Add your certificate link here">
                      Full Stack Development
                    </a>
                  </h4>
                  <h5>CipherSchools</h5>
                  <span className="cert-date">Issued: July 2025</span>
                </div>
              </div>

              <div className="cert-card glass-card">
                <div className="cert-icon-wrapper">
                  <FaCertificate />
                </div>
                <div className="cert-content">
                  <h4>
                    <a href="#" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} title="Add your certificate link here">
                      Design & Analysis of Algorithms
                    </a>
                  </h4>
                  <h5>NPTEL</h5>
                  <span className="cert-date">Issued: March 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Block */}
          <div className="cert-column">
            <h3 className="column-title"><FaTrophy className="title-icon" /> Programming Profiles</h3>
            
            <div className="cert-list">
              <div className="cert-card glass-card">
                <div className="cert-icon-wrapper trophy">
                  <FaCode />
                </div>
                <div className="cert-content">
                  <h4>
                    <a href="https://leetcode.com/u/__sarveshjain__0211/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} title="Add your LeetCode profile link here">
                      LeetCode
                    </a>
                  </h4>
                  <h5>Competitive Programming</h5>
                  <p className="cert-desc">Active problem solver focusing on Data Structures and Algorithms.</p>
                </div>
              </div>

              <div className="cert-card glass-card">
                <div className="cert-icon-wrapper trophy">
                  <FaCode />
                </div>
                <div className="cert-content">
                  <h4>
                    <a href="https://www.geeksforgeeks.org/profile/sarveshjcecp?tab=activity" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} title="Add your GeeksforGeeks profile link here">
                      GeeksforGeeks
                    </a>
                  </h4>
                  <h5>Problem Solving</h5>
                  <p className="cert-desc">Practicing algorithmic problems and building core computer science concepts.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
