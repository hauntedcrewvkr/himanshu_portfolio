import React from 'react';
import { Clock } from 'lucide-react';

const Experience = () => (
  <section id="experience">
    <div className="container">
      <h2>Professional Journey</h2>
      
      <div className="skills-stack">
        <div className="skill-row">
          <div className="skill-info">
            <div className="skill-header">
              <Clock className="icon-neon" size={24} />
              <h3>Full Stack Developer</h3>
            </div>
            <p className="label-mono" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>PIXEL2HTML // 2021 — PRESENT</p>
            <p>Leading end-to-end development initiatives. Building universal CRUD engines and optimizing core WordPress systems for diverse client ecosystems.</p>
          </div>
          <div className="experience-details">
            <ul className="custom-list">
              {[
                'Engineered model-driven CRUD systems reducing boilerplate by 40%.',
                'Integrated modern templating engines for high-performance rendering.',
                'Spearheaded transition from static designs to dynamic digital systems.'
              ].map((item, i) => (
                <li key={i}>
                  <span className="bullet">—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
