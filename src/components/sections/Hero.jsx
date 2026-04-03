import React from 'react';
import { Terminal, GitBranch, Linkedin, Twitter } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

const Hero = () => (
  <section id="about" className="hero">
    <div className="container">
      <span className="label-mono">
        <Terminal size={12} strokeWidth={1.5} style={{ marginRight: '8px' }} /> 
        Full Stack Developer
      </span>
      <h1>Developing systems for <br/> high-velocity digital experiences.</h1>
      <p className="body-text">
        I specialize in MERN and PHP development, 
        building scalable digital foundations that bridge complex logic with 
        exceptional user performance.
      </p>
      
      <div className="social-links-wrap">
        <Magnetic>
          <a href="https://github.com/hauntedcrewvkr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <GitBranch size={20} strokeWidth={1.5} />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
            <Twitter size={20} strokeWidth={1.5} />
          </a>
        </Magnetic>
      </div>
    </div>
  </section>
);

export default Hero;
