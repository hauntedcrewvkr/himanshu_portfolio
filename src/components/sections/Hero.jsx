import React from 'react';
import { ArrowUpRightIcon, TerminalIcon } from 'lucide-react';
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
    </div>
  </section>
);

export default Hero;
