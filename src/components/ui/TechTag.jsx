import React, { useState } from 'react';
import { CodeIcon } from 'lucide-react';

const TechTag = ({ logo, name, className = "" }) => {
  const [error, setError] = useState(false);

  return (
    <div className="tech-tag">
      {logo && !error ? (
        <img 
          src={`/logos/${logo}`} 
          alt={name} 
          className={className} 
          loading="lazy"
          onError={() => setError(true)} // Auto-fallback if file is missing
        />
      ) : (
        <CodeIcon size={14} strokeWidth={1.5} className="icon-neon" style={{ marginRight: '4px' }} />
      )}
      <span>{name}</span>
    </div>
  );
};

export default TechTag;
