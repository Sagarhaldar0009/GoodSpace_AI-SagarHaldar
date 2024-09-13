import React, { useState } from 'react'
import './NavBar.scss'
import { StartTrial } from '../Common/StartTrial/StartTrial';
import Logo from "../../assets/Logo.png";

export const NavBar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility on mobile

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <div className='first-in'>Blogs</div>
          <div className='first-in'>Features</div>
          <div className='first-in'>Pricing</div>
          <div className='first-in'>Integrations</div>
        </div>
        <StartTrial/>
      </div>
    </div>
  );
}
