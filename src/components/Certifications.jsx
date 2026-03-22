import React, { useState, useEffect } from 'react';
import './Certifications.css';
import { FaCertificate, FaTrophy, FaCode } from 'react-icons/fa';

const Certifications = () => {
  const [lcData, setLcData] = useState({ easy: 0, medium: 0, hard: 0, total: 0, loading: true });
  const [gfgData, setGfgData] = useState({ total: 0, loading: true });

  useEffect(() => {
    // Fetch LeetCode Data using a highly stable community REST API
    fetch('https://leetcode-api-faisalshohag.vercel.app/__sarveshjain__0211')
      .then(res => res.json())
      .then(data => {
        if (!data.errors && data.totalSolved) {
          setLcData({
            easy: data.easySolved || 0,
            medium: data.mediumSolved || 0,
            hard: data.hardSolved || 0,
            total: data.totalSolved || 0,
            loading: false
          });
        }
      })
      .catch(err => {
        console.error("Error fetching LeetCode stats:", err);
        setLcData(prev => ({ ...prev, loading: false }));
      });

    // Fetch GeeksforGeeks Data
    // Note: Since public GFG APIs can be volatile, we add a fallback logic.
    fetch('https://geeks-for-geeks-stats-api.vercel.app/?userName=sarveshjcecp')
      .then(res => res.json())
      .then(data => {
        if (data && data.success && data.data) {
          setGfgData({
            total: data.data.totalProblemsSolved || 0,
            loading: false
          });
        } else {
          setGfgData(prev => ({ ...prev, loading: false }));
        }
      })
      .catch(err => {
        console.error("Error fetching GFG stats:", err);
        setGfgData(prev => ({ ...prev, loading: false }));
      });
  }, []);

  return (
    <section id="certifications" className="section cert-section">
      <h2 className="section-title">Achievements & <span>Certifications</span></h2>

      <div className="container">
        <div className="cert-grid">

          {/* Certifications Block */}
          <div className="cert-column glass-card">
            <h3 className="column-title"><FaCertificate className="title-icon" /> Certifications</h3>

            <div className="cert-list">
              <div className="cert-card">
                <div className="cert-icon-wrapper">
                  <FaCertificate />
                </div>
                <div className="cert-content">
                  <h4>
                    <a href="https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/graph_camp/sarvesh-jain.png" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} title="Add your certificate link here">
                      Graphs Camp Participation Certificate
                    </a>
                  </h4>
                  <h5>AlgoUniversity</h5>
                  <span className="cert-date">Issued: Oct. 2025</span>
                </div>
              </div>

              <div className="cert-card">
                <div className="cert-icon-wrapper">
                  <FaCertificate />
                </div>
                <div className="cert-content">
                  <h4>
                    <a href="https://www.cipherschools.com/certificate/preview?id=687d9f8d3eaa79325b2d28f2" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} title="Add your certificate link here">
                      Full Stack Development
                    </a>
                  </h4>
                  <h5>CipherSchools</h5>
                  <span className="cert-date">Issued: July 2025</span>
                </div>
              </div>

              <div className="cert-card">
                <div className="cert-icon-wrapper">
                  <FaCertificate />
                </div>
                <div className="cert-content">
                  <h4>
                    <a href="Privacy and Security in Online Social Media.pdf" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} title="Add your certificate link here">
                      Privacy and Security in Online Social Media
                    </a>
                  </h4>
                  <h5>NPTEL</h5>
                  <span className="cert-date">Issued: May 2025</span>
                </div>
              </div>

              <div className="cert-card">
                <div className="cert-icon-wrapper">
                  <FaCertificate />
                </div>
                <div className="cert-content">
                  <h4>
                    <a href="Design and analysis of algorithms.pdf" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} title="Add your certificate link here">
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
          <div className="cert-column glass-card">
            <h3 className="column-title"><FaTrophy className="title-icon" /> Programming Profiles</h3>

            <div className="cert-list">
              <div className="cert-card stat-card">
                <div className="cert-content full-width">
                  <div className="stat-header">
                    <div className="cert-icon-wrapper trophy">
                      <FaCode />
                    </div>
                    <div>
                      <h4>
                        <a href="https://leetcode.com/u/__sarveshjain__0211/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} title="Add your LeetCode profile link here">
                          LeetCode
                        </a>
                      </h4>
                      <h5>Competitive Programming</h5>
                    </div>
                  </div>

                  {lcData.loading ? (
                    <p className="cert-desc loading-text">Loading stats...</p>
                  ) : (
                    <div className="stats-container">
                      <div
                        className="stat-circle total-circle"
                        style={{
                          background: `conic-gradient(
                            var(--neon-green) 0% ${(lcData.easy / lcData.total) * 100}%, 
                            #ffc107 ${(lcData.easy / lcData.total) * 100}% ${((lcData.easy + lcData.medium) / lcData.total) * 100}%, 
                            #ff4d4d ${((lcData.easy + lcData.medium) / lcData.total) * 100}% 100%
                          )`
                        }}
                      >
                        <div className="stat-inner">
                          <span className="stat-num">{lcData.total}</span>
                          <span className="stat-label">Solved</span>
                        </div>
                      </div>
                      <div className="stat-details">
                        <div className="stat-item easy"><span className="dot"></span> {lcData.easy} Easy</div>
                        <div className="stat-item medium"><span className="dot"></span> {lcData.medium} Medium</div>
                        <div className="stat-item hard"><span className="dot"></span> {lcData.hard} Hard</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="cert-card stat-card">
                <div className="cert-content full-width">
                  <div className="stat-header">
                    <div className="cert-icon-wrapper trophy gfg">
                      <FaCode />
                    </div>
                    <div>
                      <h4>
                        <a href="https://www.geeksforgeeks.org/profile/sarveshjcecp?tab=activity" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} title="Add your GeeksforGeeks profile link here">
                          GeeksforGeeks
                        </a>
                      </h4>
                      <h5>Problem Solving</h5>
                    </div>
                  </div>

                  {gfgData.loading ? (
                    <p className="cert-desc loading-text">Loading stats...</p>
                  ) : (
                    <div className="stats-container gfg-container">
                      <div className="stat-circle gfg-circle">
                        <div className="stat-inner">
                          <span className="stat-num">{gfgData.total || "100+"}</span>
                          <span className="stat-label">Problems</span>
                        </div>
                      </div>
                      <p className="cert-desc stat-desc">Practicing algorithmic problems and building core computer science concepts.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* TUF+ Card */}
              <div className="cert-card stat-card">
                <div className="cert-content full-width">
                  <div className="stat-header">
                    <div className="cert-icon-wrapper trophy tuf">
                      <FaCode />
                    </div>
                    <div>
                      <h4>
                        <a href="https://takeuforward.org/profile/__sarvesh__0211" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                          TakeUForward (TUF+)
                        </a>
                      </h4>
                      <h5>DSA Structured Learning</h5>
                    </div>
                  </div>

                  <div className="stats-container tuf-container">
                    <div className="stat-circle tuf-circle">
                      <div className="stat-inner">
                        <span className="stat-num" style={{ fontSize: '0.85rem' }}>TUF+</span>
                        <span className="stat-label">Profile</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <p className="cert-desc" style={{ margin: 0 }}>
                        Solving curated DSA problems from Striver's A2Z Sheet — covering Arrays, Trees, Graphs, DP, and more.
                      </p>
                      <a
                        href="https://takeuforward.org/profile/__sarvesh__0211"
                        target="_blank"
                        rel="noreferrer"
                        className="tuf-visit-btn"
                      >
                        Visit Profile →
                      </a>
                    </div>
                  </div>
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
