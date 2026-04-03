import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-flex">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} HIMANSHU SHARMA // ARCHITECT</p>
        </div>
        
        <div className="footer-center">
          <div className="footer-meta">
            <span className="meta-item">
              <MapPin size={12} className="icon-neon" /> DELHI_IN
            </span>
            <span className="meta-sep">//</span>
            <span className="meta-item">
              <Phone size={12} className="icon-neon" /> +91 8826331186
            </span>
          </div>
        </div>

        <div className="footer-right">
          <div className="status-indicator">
            <span className="status-dot"></span>
            NODE_ACTIVE
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
