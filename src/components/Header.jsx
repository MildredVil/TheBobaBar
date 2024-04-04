import React from 'react';
import '../App.css';

const Header = ({ onAboutUsClick }) => {
  return (
    <nav>
     
      <div className="logo"><img src="public/assets/LOGO.PNG" alt="Logo" /></div>
      <a href="/" className="nav-link">Home</a>
      <a href="#aboutUs" className="nav-link" onClick={onAboutUsClick}>About Us</a>
    </nav>
  );
};

export default Header;
