import React from 'react';
import { ArrowUpRight, Terminal } from 'lucide-react';

const Hero = () => (
  <section id="about" className="hero">
    <div className="container">
      <span className="label-mono">
        <Terminal size={12} style={{ marginRight: '8px' }} /> 
        Full Stack Engineer
      </span>
      <h1>Architecting systems for <br/> high-velocity digital experiences.</h1>
      <p className="body-text">
        I am Himanshu Sharma. I specialize in MERN and PHP architectures, 
        designing scalable digital foundations that bridge complex logic with 
        exceptional user performance.
      </p>
      <div className="btn-wrap">
        <a href="#projects" className="btn btn-primary">
          Execute Projects <ArrowUpRight size={18} style={{ marginLeft: '8px' }} />
        </a>
        <a href="#experience" className="btn btn-secondary">Deployment History</a>
      </div>
    </div>
  </section>
);

export default Hero;
