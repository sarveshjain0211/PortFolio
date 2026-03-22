import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: 'IndiKart – Multilingual Online Store',
    description: 'Hyper-Local Multilingual Marketplace : I engineered a localized e-commerce ecosystem supporting 7+ regional languages to bridge the digital divide for native consumers. By eliminating the "language tax" of global apps, the platform enables seamless discovery and secure Razorpay-powered transactions in a user’s mother tongue.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Razorpay', 'Tailwind CSS'],
    githubLink: 'https://github.com/sarveshjain0211/IndiKart',
    liveLink: 'https://multi-lingual-e-commerce-store-proj-ten.vercel.app',
    image: '/indikart_preview.png'
  },
  {
    title: 'Lost and Found Management System (back2U)',
    description: 'Campus Lost & Found: A Secure Recovery Hub : I engineered a centralized digital portal to automate item recovery in high-traffic environments. Featuring visual reporting and an Admin Approval Engine, the system validates claims and triggers automated email alerts to owners, replacing manual logs with a secure, verification-led workflow.',
    techStack: ['HTML', 'CSS', 'JavaScript','PHP','MySQL'],
    githubLink: 'https://github.com/sarveshjain0211/back2U',
    liveLink: '#',
    image: 'back2U.jpeg'
  },
  {
    title: 'MealCart: Smart Recipe-Discovery Ecosystem',
    description: 'I engineered a smart recipe engine to eliminate "decision fatigue" by mapping available ingredients to a dynamic database. The platform transforms pantry staples into customized meal solutions, providing curated recipes for lunch and dinner based on what’s already in the kitchen.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
    githubLink: 'https://github.com/sarveshjain0211/MealCart',
    liveLink: 'https://meal-cart-theta.vercel.app/',
    image: 'MealCart.png'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">My <span>Projects</span></h2>
      
      <div className="container">
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card glass-card" key={index}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-link-icon">
                      <FaGithub />
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="project-link-icon">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  {project.techStack.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-more-container">
          <a href="#" className="neon-btn">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
