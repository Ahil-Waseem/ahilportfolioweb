// Components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection, homeRef, aboutRef,skillsRef, contactRef }) => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        Ahil Portfolio
      </div>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <button onClick={() => scrollToSection(homeRef)}>Home</button>
        </li>
        <li className='navbar-item'>
          <button onClick={() => scrollToSection(aboutRef)}>About</button>
        </li>
        <li className='navbar-item'>
          <button onClick={() => scrollToSection(skillsRef)}>Skills</button>
        </li>
        <li className='navbar-item'>
          <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
