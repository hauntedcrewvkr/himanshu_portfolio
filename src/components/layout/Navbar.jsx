import React from 'react';
import avatar from '../../assets/img/avatar.png';
import { DownloadIcon, HistoryIcon, CpuIcon, FolderDotIcon } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

const Navbar = () => (
  <nav className="navbar">
    <div className="container nav-container">
      <div className="logo-wrap">
        <img src={avatar} alt="" className="logo-avatar" />
        <div className="logo">HIMANSHU SHARMA</div>
      </div>
      <div className="nav-links">
        <a href="#projects"><FolderDotIcon size={14} /> Work</a>
        <a href="#experience"><HistoryIcon size={14} /> History</a>
        <a href="#skills"><CpuIcon size={14} /> Tech</a>
        <Magnetic>
          <a href="/himanshu-sharma-resume.pdf" download className="resume-btn">
            <DownloadIcon size={14} /> Resume
          </a>
        </Magnetic>
      </div>
    </div>
  </nav>
);

export default Navbar;
