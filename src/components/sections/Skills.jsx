import React from 'react';
import { Layout, Server, Database } from 'lucide-react';
import TechTag from '../ui/TechTag';

const Skills = () => (
  <section id="skills">
    <div className="container">
      <h2>Technical Expertise</h2>
      
      <div className="skills-stack">
        <div className="skill-row">
          <div className="skill-info">
            <div className="skill-header">
              <Layout className="icon-neon" size={24} />
              <h3>Frontend</h3>
            </div>
            <p>Proficient in React, Next.js, and modern CSS frameworks. Designing high-fidelity, responsive interfaces with clean architecture.</p>
          </div>
          <div className="tech-tags-container">
            <TechTag logo="reactjs.svg" name="React.js" />
            <TechTag logo="nextjs.svg" name="Next.js" className="logo-invert" />
            <TechTag logo="js.svg" name="ES6+" />
            <TechTag logo="html.svg" name="HTML5" />
            <TechTag logo="css.svg" name="CSS3" />
            <TechTag logo="sass.svg" name="Sass" />
            <TechTag logo="bootstrap.svg" name="Bootstrap" />
            <TechTag logo="jquery.svg" name="jQuery" />
            <TechTag logo="chartjs.svg" name="Chart.js" />
          </div>
        </div>

        <div className="skill-row">
          <div className="skill-info">
            <div className="skill-header">
              <Server className="icon-neon" size={24} />
              <h3>Backend</h3>
            </div>
            <p>Engineering robust APIs with Node.js and PHP. Expert in templating engines and modular server logic.</p>
          </div>
          <div className="tech-tags-container">
            <TechTag logo="nodejs.svg" name="Node.js" />
            <TechTag logo="express.svg" name="Express" className="logo-invert" />
            <TechTag logo="php.svg" name="PHP" />
            <TechTag logo="symfony.svg" name="Symfony" className="logo-invert" />
            <TechTag logo="blade.svg" name="Blade" />
            <TechTag logo="twig.svg" name="Twig" />
            <TechTag logo="timber.svg" name="Timber" className="logo-invert" />
          </div>
        </div>

        <div className="skill-row">
          <div className="skill-info">
            <div className="skill-header">
              <Database className="icon-neon" size={24} />
              <h3>Data & CMS</h3>
            </div>
            <p>Designing high-integrity data schemas and managing content ecosystems with WordPress and specialized tools.</p>
          </div>
          <div className="tech-tags-container">
            <TechTag logo="mongodb.svg" name="MongoDB" />
            <TechTag logo="mysql.svg" name="MySQL" className="logo-invert" />
            <TechTag logo="wordpress.svg" name="WordPress" />
            <TechTag logo="git.svg" name="Git" />
            <TechTag logo="github.svg" name="GitHub" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
