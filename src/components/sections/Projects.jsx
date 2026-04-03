import React from 'react';
import { Globe, GitHub, ExternalLink } from 'lucide-react'; // Trying capital H
import TechTag from '../ui/TechTag';
import { motion } from 'framer-motion';

const Projects = () => (
  <section id="projects">
    <div className="container">
      <h2>Selected Projects</h2>
      
      <div className="skills-stack">
        {[
          { 
            title: 'Universal CRUD', 
            desc: 'A dynamic backend engine supporting multi-model operations with JWT security and high-integrity data schemas.',
            github: 'https://github.com/hauntedcrewvkr',
            tech: [
              { name: 'Node.js', logo: 'nodejs.svg' },
              { name: 'Express', logo: 'express.svg', class: 'logo-invert' },
              { name: 'MongoDB', logo: 'mongodb.svg' }
            ] 
          },
          { 
            title: 'WP Core', 
            desc: 'High-performance theme engine leveraging Timber and Blade templating for rapid enterprise-scale development.',
            github: 'https://github.com/hauntedcrewvkr',
            tech: [
              { name: 'PHP', logo: 'php.svg' },
              { name: 'Blade', logo: 'blade.svg' },
              { name: 'Timber', logo: 'timber.svg', class: 'logo-invert' },
              { name: 'Sass', logo: 'sass.svg' }
            ] 
          },
          { 
            title: 'UI Framework', 
            desc: 'Proprietary SCSS library focused on visual consistency, geometric grids, and high-velocity digital experiences.',
            github: 'https://github.com/hauntedcrewvkr',
            tech: [
              { name: 'SCSS', logo: 'sass.svg' },
              { name: 'React', logo: 'reactjs.svg' }
            ] 
          }
        ].map((p, i) => (
          <motion.div 
            key={i} 
            className="skill-row"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="skill-info">
              <div className="skill-header">
                <Globe className="icon-neon" size={24} />
                <h3>{p.title}</h3>
              </div>
              <p className="label-mono" style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '0.7rem' }}>PROJ_0{i+1}</p>
              <p>{p.desc}</p>
              
              <div className="project-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                  <GitHub size={14} /> Source <ExternalLink size={12} style={{ marginLeft: '4px', opacity: 0.5 }} />
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
