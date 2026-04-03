import React, { useState, useEffect } from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon } from 'lucide-react';

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-flex">
          <div className="footer-left">
            <p>© {new Date().getFullYear()} HIMANSHU SHARMA // FULL STACK DEVELOPER</p>
          </div>
          
          <div className="footer-center">
            <div className="footer-meta">
              <span className="meta-item">
                <MapPinIcon size={12} className="icon-neon" strokeWidth={1.5} /> DELHI_IN
              </span>
              <span className="meta-sep">//</span>
              <span className="meta-item">
                <ClockIcon size={12} className="icon-neon" strokeWidth={1.5} /> {formatTime(time)}
              </span>
              <span className="meta-sep">//</span>
              <span className="meta-item">
                <PhoneIcon size={12} className="icon-neon" strokeWidth={1.5} /> +91 8826331186
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
};

export default Footer;
