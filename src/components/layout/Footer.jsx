import React, { useState, useEffect } from 'react';
import { ClockIcon } from 'lucide-react';

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
    <footer className="footer-minimal">
      <div className="container">
        <div className="footer-flex-minimal">
          <div className="footer-left">
            <p>HIMANSHU SHARMA // FULL STACK DEVELOPER</p>
          </div>
          
          <div className="footer-right">
            <div className="footer-time">
              <ClockIcon size={12} className="icon-neon" strokeWidth={1.5} /> {formatTime(time)}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
