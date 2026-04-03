import React from 'react';
import { GraduationCapIcon, LanguagesIcon, SparklesIcon } from 'lucide-react';
import { portfolioData } from '../../data/portfolio.jsx';

const IconMap = {
  "Education": GraduationCapIcon,
  "Languages": LanguagesIcon,
  "Interests": SparklesIcon
};

const Meta = () => (
  <section id="meta">
    <div className="container">
      <h2>Technical Background</h2>
      
      <div className="skills-stack">
        {portfolioData.meta.map((meta, index) => {
          const Icon = IconMap[meta.label] || SparklesIcon;
          return (
            <div className="skill-row" key={index}>
              <div className="skill-info">
                <div className="skill-header">
                  <Icon className="icon-neon" size={24} strokeWidth={1.5} />
                  <h3>{meta.label}</h3>
                </div>
                <p>{meta.desc}</p>
              </div>
              <div className="tech-tags-container">
                {meta.items.map((item, i) => (
                  <div className="tech-tag" key={i}><span>{item}</span></div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Meta;
