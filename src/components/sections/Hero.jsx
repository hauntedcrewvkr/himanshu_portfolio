import React from 'react';
import { TerminalIcon } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

const Hero = () => (
  <section id="about" className="hero">
    <div className="container">
      <span className="label-mono">
        <TerminalIcon size={12} strokeWidth={1.5} style={{ marginRight: '8px' }} /> 
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
            <img src="/logos/github.svg" alt="GitHub" className="logo-invert" />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <img src="/logos/linkedin.svg" alt="LinkedIn" />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
            <img src="/logos/twitter.svg" alt="Twitter" className="logo-invert" />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="mailto:wwww.vikram.roy.372@gmail.com" className="social-link" aria-label="Email">
            <img src="/logos/gmail.svg" alt="Gmail" />
          </a>
        </Magnetic>
      </div>
    </div>
  </section>
);

export default Hero;
