import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaProjectDiagram } from 'react-icons/fa';

const skillsData = [
  { name: 'DSA', icon: <FaProjectDiagram />, color: '#bc13fe' },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'Database', icon: <FaDatabase />, color: '#00f3ff' }, /* Neon Cyan Default */
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">My <span>Skills</span></h2>
      
      <div className="container">
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div 
              className="skill-card glass-card" 
              key={index}
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h4 className="skill-name">{skill.name}</h4>
              <div className="skill-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
