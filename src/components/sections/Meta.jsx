import React from 'react';
import { GraduationCap, Languages, Sparkles } from 'lucide-react';

const Meta = () => (
  <section id="meta">
    <div className="container">
      <span className="label-mono">02 // User Meta</span>
      <h2>Technical Background</h2>
      <div className="card-grid">
        <div className="pro-card">
          <GraduationCap className="icon-neon" size={20} />
          <span className="label-mono" style={{ border: 'none', background: 'none', padding: 0, fontSize: '0.65rem', marginTop: '1rem' }}>// EDUCATION</span>
          <h3 style={{ fontSize: '1.125rem' }}>Higher Secondary (2016)</h3>
          <p style={{ fontSize: '0.875rem' }}>Diploma in Japanese Language (2019)</p>
        </div>
        <div className="pro-card">
          <Languages className="icon-neon" size={20} />
          <span className="label-mono" style={{ border: 'none', background: 'none', padding: 0, fontSize: '0.65rem', marginTop: '1rem' }}>// LANGUAGES</span>
          <h3 style={{ fontSize: '1.125rem' }}>Hindi, English</h3>
          <p style={{ fontSize: '0.875rem' }}>Professional Japanese</p>
        </div>
        <div className="pro-card">
          <Sparkles className="icon-neon" size={20} />
          <span className="label-mono" style={{ border: 'none', background: 'none', padding: 0, fontSize: '0.65rem', marginTop: '1rem' }}>// INTERESTS</span>
          <h3 style={{ fontSize: '1.125rem' }}>Gaming & Singing</h3>
          <p style={{ fontSize: '0.875rem' }}>Strategic logic & creative expression.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Meta;
