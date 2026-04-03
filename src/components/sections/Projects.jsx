import React from 'react';
import { GlobeIcon, CodeIcon, ExternalLinkIcon } from 'lucide-react'; 
import TechTag from '../ui/TechTag';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const Projects = () => (
  <section id="projects">
    <div className="container">
      <h2>Selected Projects</h2>
      
      <div className="skills-stack">
        {portfolioData.projects.map((p, i) => (
          <motion.div 
            key={i} 
            className="skill-row"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="skill-info">
              <div className="skill-header">
                <GlobeIcon className="icon-neon" size={24} strokeWidth={1.5} />
                <h3>{p.title}</h3>
              </div>
              <p className="label-mono" style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '0.7rem' }}>PROJ_0{i+1}</p>
              <p>{p.desc}</p>
              
              <div className="project-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                  <CodeIcon size={14} strokeWidth={1.5} /> Source <ExternalLinkIcon size={12} strokeWidth={1.5} style={{ marginLeft: '4px', opacity: 0.5 }} />
                </a>
              </div>
            </div>
            <div className="tech-tags-container">
              {p.tech.map(t => <TechTag key={t.name} name={t.name} logo={t.logo} className={t.class} />)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
