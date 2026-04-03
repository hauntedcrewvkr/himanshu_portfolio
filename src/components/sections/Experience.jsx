import React from 'react';
import { ClockIcon } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const Experience = () => (
  <section id="experience">
    <div className="container">
      <h2>Professional Journey</h2>
      
      <div className="skills-stack">
        {portfolioData.experience.map((exp, index) => (
          <div className="skill-row" key={index}>
            <div className="skill-info">
              <div className="skill-header">
                <ClockIcon className="icon-neon" size={24} strokeWidth={1.5} />
                <h3>{exp.role}</h3>
              </div>
              <p className="label-mono" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{exp.company} // {exp.period}</p>
              <p>{exp.desc}</p>
            </div>
            <div className="experience-details">
              <ul className="custom-list">
                {exp.details.map((item, i) => (
                  <li key={i}>
                    <span className="bullet">—</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
