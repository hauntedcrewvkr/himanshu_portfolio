import React from 'react';

const Projects = () => (
  <section id="projects">
    <div className="container">
      <span className="label-mono">04 // Deployments</span>
      <h2>Selected Projects</h2>
      <div className="card-grid">
        {[
          { 
            title: 'Universal CRUD', 
            desc: 'A dynamic backend engine supporting multi-model operations with JWT security.',
            tech: ['Node.js', 'Express', 'Auth'] 
          },
          { 
            title: 'WP Core', 
            desc: 'High-performance theme engine leveraging Timber and Blade templating.',
            tech: ['PHP', 'Blade', 'Timber'] 
          },
          { 
            title: 'UI Framework', 
            desc: 'Proprietary SCSS library focused on visual consistency and rapid development.',
            tech: ['SCSS', 'System Design'] 
          }
        ].map((p, i) => (
          <article key={i} className="pro-card">
            <span className="label-mono" style={{ color: '#444', marginBottom: '0.5rem', border: 'none', background: 'none', padding: 0 }}>PROJ_0{i+1}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tech-footer">
              {p.tech.map(t => <span key={t}>{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
