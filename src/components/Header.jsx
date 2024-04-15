import React from 'react';
import '../App.css';

const Header = ({ onAboutUsClick }) => {
  return (
    <nav className="header">
      <div className="logo">
        <img src="public/assets/LOGO.PNG" alt="Logo" />
      </div>
      <div className="links">
        <a href="/" className="nav-link">Home</a>
        <a href="#aboutUs" className="nav-link" onClick={onAboutUsClick}>About Us</a>
      </div>
    </nav>
  );
};

export default Header;
