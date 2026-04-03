import React from 'react';
import { GraduationCapIcon, LanguagesIcon, SparklesIcon } from 'lucide-react';

const Meta = () => (
  <section id="meta">
    <div className="container">
      <h2>Technical Background</h2>
      
      <div className="skills-stack">
        <div className="skill-row">
          <div className="skill-info">
            <div className="skill-header">
              <GraduationCapIcon className="icon-neon" size={24} strokeWidth={1.5} />
              <h3>Education</h3>
            </div>
            <p>Academic foundation and specialized linguistic training to bridge global communication gaps.</p>
          </div>
          <div className="tech-tags-container">
            <div className="tech-tag"><span>Higher Secondary (2016)</span></div>
            <div className="tech-tag"><span>Diploma in Japanese Language (2019)</span></div>
          </div>
        </div>

        <div className="skill-row">
          <div className="skill-info">
            <div className="skill-header">
              <LanguagesIcon className="icon-neon" size={24} strokeWidth={1.5} />
              <h3>Languages</h3>
            </div>
            <p>Trilingual proficiency enabling collaboration across diverse technical and cultural landscapes.</p>
          </div>
          <div className="tech-tags-container">
            <div className="tech-tag"><span>Hindi</span></div>
            <div className="tech-tag"><span>English</span></div>
            <div className="tech-tag"><span>Japanese</span></div>
          </div>
        </div>

        <div className="skill-row">
          <div className="skill-info">
            <div className="skill-header">
              <SparklesIcon className="icon-neon" size={24} strokeWidth={1.5} />
              <h3>Interests</h3>
            </div>
            <p>Creative and strategic pursuits that fuel problem-solving and logical thinking.</p>
          </div>
          <div className="tech-tags-container">
            <div className="tech-tag"><span>Gaming & Strategic Logic</span></div>
            <div className="tech-tag"><span>Singing & Creative Expression</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Meta;
