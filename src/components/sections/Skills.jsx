import React from 'react';
import { LayoutIcon, ServerIcon, DatabaseIcon } from 'lucide-react';
import TechTag from '../ui/TechTag';
import { portfolioData } from '../../data/portfolio';

const IconMap = {
  "Frontend": LayoutIcon,
  "Backend": ServerIcon,
  "Data & CMS": DatabaseIcon
};

const Skills = () => (
  <section id="skills">
    <div className="container">
      <h2>Technical Expertise</h2>
      
      <div className="skills-stack">
        {portfolioData.skills.map((skill, index) => {
          const Icon = IconMap[skill.category] || LayoutIcon;
          return (
            <div className="skill-row" key={index}>
              <div className="skill-info">
                <div className="skill-header">
                  <Icon className="icon-neon" size={24} strokeWidth={1.5} />
                  <h3>{skill.category}</h3>
                </div>
                <p>{skill.desc}</p>
              </div>
              <div className="tech-tags-container">
                {skill.items.map((item, i) => (
                  <TechTag key={i} logo={item.logo} name={item.name} className={item.class} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
