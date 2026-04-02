import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-flex">
      <p>© {new Date().getFullYear()} HIMANSHU SHARMA // ARCHITECT</p>
      <div style={{ color: '#00ff88', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ width: '8px', height: '8px', background: 'currentColor', borderRadius: '50%', boxShadow: '0 0 10px currentColor' }}></span>
        NODE_ACTIVE
      </div>
    </div>
  </footer>
);

export default Footer;
