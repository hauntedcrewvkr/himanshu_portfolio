import React from 'react';

const TechTag = ({ logo, name, className = "" }) => (
  <div className="tech-tag">
    {logo && (
      <img 
        src={`/logos/${logo}`} 
        alt={name} 
        className={className} 
        loading="lazy"
      />
    )}
    <span>{name}</span>
  </div>
);

export default TechTag;
