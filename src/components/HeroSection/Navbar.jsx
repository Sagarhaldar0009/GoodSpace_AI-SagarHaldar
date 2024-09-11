import React, { useState } from 'react'
import '../../Styling/NavBar.scss'
import { StartTrial } from '../Common/StartTrial';

export const NavBar = () => {
  // State to control menu visibility on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='navbar-container'>
      {/* Logo */}
      <div className='logo'>Logo</div>

      {/* Hamburger icon for small screens */}
      <div className='hamburger' onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon */}
      </div>

      {/* Navigation links, only show on larger screens or when the menu is open */}
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <div className='first'>
          <div className='first-in'>Blogs</div>
          <div className='first-in'>Features</div>
          <div className='first-in'>Pricing</div>
          <div className='first-in'>Integrations</div>
        </div>
        {/* <div className='second'>
          <div className='start-trial'>Start trial</div>
        </div> */}
        <StartTrial/>
      </div>
    </div>
  );
}
