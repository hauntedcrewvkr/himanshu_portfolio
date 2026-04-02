import React from 'react';
import { Layout, Server, Database, Wrench } from 'lucide-react';

const TechTag = ({ logo, name }) => (
  <div className="tech-tag">
    <img src={`/logos/${logo}`} alt={name} />
    <span>{name}</span>
  </div>
);

const Skills = () => (
  <section id="skills">
    <div className="container">
      <span className="label-mono">01 // Capabilities</span>
      <h2>Technical Expertise</h2>
      
      <div className="skills-stack">
        <div className="skill-row">
          <div className="skill-info">
            <Layout className="icon-neon" size={24} />
            <h3>Frontend</h3>
            <p>Proficient in React, Next.js, and modern CSS frameworks. Designing high-fidelity, responsive interfaces with clean architecture.</p>
          </div>
          <div className="tech-tags-container">
            <TechTag logo="reactjs.svg" name="React.js" />
            <TechTag logo="nextjs.svg" name="Next.js" />
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
            <Server className="icon-neon" size={24} />
            <h3>Backend</h3>
            <p>Engineering robust APIs with Node.js and PHP. Expert in templating engines and modular server logic.</p>
          </div>
          <div className="tech-tags-container">
            <TechTag logo="nodejs.svg" name="Node.js" />
            <TechTag logo="express.svg" name="Express" />
            <TechTag logo="php.svg" name="PHP" />
            <TechTag logo="symfony.svg" name="Symfony" />
            <TechTag logo="blade.svg" name="Blade" />
            <TechTag logo="twig.svg" name="Twig" />
            <TechTag logo="timber.svg" name="Timber" />
          </div>
        </div>

        <div className="skill-row">
          <div className="skill-info">
            <Database className="icon-neon" size={24} />
            <h3>Data & CMS</h3>
            <p>Designing high-integrity data schemas and managing content ecosystems with WordPress and specialized tools.</p>
          </div>
          <div className="tech-tags-container">
            <TechTag logo="mongodb.svg" name="MongoDB" />
            <TechTag logo="mysql.svg" name="MySQL" />
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
