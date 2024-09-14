import React, { useState } from 'react'
import './NavBar.scss'
import { StartTrial } from '../Common/StartTrial/StartTrial';
import Logo from "../../assets/Logo.png";

export const NavBar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility on mobile

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className='navbar-container'>
      {/* Logo */}
      <div className='logo'>
        <img src={Logo} alt="Logo" />
      </div>

      {/* Hamburger icon for small screens */}
      <div className='hamburger' onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon */}
      </div>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}> {/* Navigation links, only show on larger screens or when the menu is open */}
        <div className='first'>
          <div className='first-in' onClick={() => scrollToSection('hero-section')}>Blogs</div>
          {/* <div className='first-in' >Features</div> */}
          <div className='first-in' onClick={() => scrollToSection('features-section')}>Features</div>
          <div className='first-in' onClick={() => scrollToSection('feedback-section')}>Pricing</div>
          <div className='first-in' onClick={() => scrollToSection('integrate')}>Integrations</div>
        </div>
        <StartTrial/>
      </div>
    </div>
  );
}

