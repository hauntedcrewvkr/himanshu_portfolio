import React from 'react';
import { Globe } from 'lucide-react';
import TechTag from '../ui/TechTag';

const Projects = () => (
  <section id="projects">
    <div className="container">
      <span className="label-mono">04 // Deployments</span>
      <h2>Selected Projects</h2>
      
      <div className="skills-stack">
        {[
          { 
            title: 'Universal CRUD', 
            desc: 'A dynamic backend engine supporting multi-model operations with JWT security and high-integrity data schemas.',
            tech: [
              { name: 'Node.js', logo: 'nodejs.svg' },
              { name: 'Express', logo: 'express.svg', class: 'logo-invert' },
              { name: 'MongoDB', logo: 'mongodb.svg' }
            ] 
          },
          { 
            title: 'WP Core', 
            desc: 'High-performance theme engine leveraging Timber and Blade templating for rapid enterprise-scale development.',
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
            tech: [
              { name: 'SCSS', logo: 'sass.svg' },
              { name: 'React', logo: 'reactjs.svg' }
            ] 
          }
        ].map((p, i) => (
          <div key={i} className="skill-row">
            <div className="skill-info">
              <div className="skill-header">
                <Globe className="icon-neon" size={24} />
                <h3>{p.title}</h3>
              </div>
              <p className="label-mono" style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '0.7rem' }}>PROJ_0{i+1}</p>
              <p>{p.desc}</p>
            </div>
            <div className="tech-tags-container">
              {p.tech.map(t => <TechTag key={t.name} name={t.name} logo={t.logo} className={t.class} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
