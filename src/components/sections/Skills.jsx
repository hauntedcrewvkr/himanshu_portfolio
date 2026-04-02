import React from 'react';
import { Layout, Server, Database, Globe } from 'lucide-react';

const Skills = () => (
  <section id="skills">
    <div className="container">
      <span className="label-mono">01 // Capabilities</span>
      <h2>Technical Expertise</h2>
      <div className="card-grid">
        <div className="pro-card">
          <Layout className="icon-neon" size={24} />
          <h3>Frontend</h3>
          <p>Proficient in React, Next.js, and ES6+. Designing high-fidelity, responsive interfaces with clean SCSS architecture.</p>
          <div className="tech-footer">
            <span>React.js</span><span>Next.js</span><span>SCSS</span><span>ES6+</span>
          </div>
        </div>
        <div className="pro-card">
          <Server className="icon-neon" size={24} />
          <h3>Backend</h3>
          <p>Engineering robust APIs with Node.js and PHP Symfony. Expert in JWT authentication and modular server logic.</p>
          <div className="tech-footer">
            <span>Node.js</span><span>Express</span><span>PHP</span><span>Symfony</span>
          </div>
        </div>
        <div className="pro-card">
          <Database className="icon-neon" size={24} />
          <h3>Infrastructure</h3>
          <p>Designing high-integrity data schemas with MongoDB and MySQL. Focused on scalability and system reliability.</p>
          <div className="tech-footer">
            <span>MongoDB</span><span>MySQL</span><span>Redis</span><span>Architecture</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
