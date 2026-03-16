import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: 'IndiKart – Multilingual Online Store',
    description: 'Built a dynamic, multilingual e-commerce platform for local products. Features include product search, category browsing, cart/order management, and seamless secure payments via Razorpay integration.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Razorpay', 'Tailwind CSS'],
    githubLink: 'https://github.com/sarveshjain0211/IndiKart',
    liveLink: 'https://multi-lingual-e-commerce-store-proj-ten.vercel.app',
    image: '/indikart_preview.png'
  },
  {
    title: 'Lost and Found Management System (back2U)',
    description: 'A dedicated web platform designed to help people easily report and find lost items. It streamlines the recovery process by connecting finders with owners quickly and efficiently.',
    techStack: ['HTML', 'CSS', 'JavaScript','PHP','MySQL'],
    githubLink: 'https://github.com/sarveshjain0211/back2U',
    liveLink: '#',
    image: 'back2U.jpeg'
  },
  {
    title: 'Project Name 3',
    description: 'Third project description goes here. Focus on the value provided by the application and any unique challenges overcome.',
    techStack: ['Python', 'Django', 'PostgreSQL'],
    githubLink: '#',
    liveLink: '#',
    image: 'https://via.placeholder.com/600x400/1a1a2e/00ff66?text=Project+3'
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
