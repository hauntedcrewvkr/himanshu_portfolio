import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';

const TechTag = ({ name }) => (
  <div className="tech-tag">
    <span>{name}</span>
  </div>
);

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
            tech: ['Node.js', 'Express', 'JWT', 'MongoDB'] 
          },
          { 
            title: 'WP Core', 
            desc: 'High-performance theme engine leveraging Timber and Blade templating for rapid enterprise-scale development.',
            tech: ['PHP', 'Blade', 'Timber', 'Sass'] 
          },
          { 
            title: 'UI Framework', 
            desc: 'Proprietary SCSS library focused on visual consistency, geometric grids, and high-velocity digital experiences.',
            tech: ['SCSS', 'System Design', 'React'] 
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
              {p.tech.map(t => <TechTag key={t} name={t} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
