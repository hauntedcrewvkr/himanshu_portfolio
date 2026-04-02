import React from 'react';

const Experience = () => (
  <section id="experience">
    <div className="container">
      <span className="label-mono">03 // Log</span>
      <h2>Professional Journey</h2>
      
      <div className="timeline-item">
        <span className="meta">PIXEL2HTML // 2021 — PRESENT</span>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Full Stack Developer</h3>
        <p className="body-text" style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
          Leading end-to-end development initiatives. Architecting universal CRUD engines 
          and optimizing core WordPress systems for diverse client ecosystems.
        </p>
        <ul style={{ listStyle: 'none' }}>
          {[
            'Engineered model-driven CRUD systems reducing boilerplate by 40%.',
            'Integrated modern templating engines for high-performance rendering.',
            'Spearheaded transition from static designs to dynamic digital architectures.'
          ].map((item, i) => (
            <li key={i} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 900 }}>—</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
