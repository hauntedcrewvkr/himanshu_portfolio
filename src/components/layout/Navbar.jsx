import React from 'react';
import avatar from '../../assets/img/avatar.png';
import { Download, Code2, History, Cpu, FolderDot } from 'lucide-react';

const Navbar = () => (
  <nav className="navbar">
    <div className="container nav-container">
      <div className="logo-wrap">
        <img src={avatar} alt="" className="logo-avatar" />
        <div className="logo">HIMANSHU SHARMA</div>
      </div>
      <div className="nav-links">
        <a href="#projects"><FolderDot size={14} /> Work</a>
        <a href="#experience"><History size={14} /> History</a>
        <a href="#skills"><Cpu size={14} /> Tech</a>
        <a href="/himanshu-sharma-resume.pdf" download className="resume-btn">
          <Download size={14} /> Resume
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
