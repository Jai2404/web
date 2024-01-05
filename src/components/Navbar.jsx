// Navbar.js

import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log('Menu state:', isMenuOpen);
  };
  

  return (
    <nav className='NavbarItem'>
      <h1 className='navbar-logo'>The News Portal</h1>
      <div className='menu-icons' onClick={toggleMenu}>
        {isMenuOpen ? (
          <i className='fa fa-times'></i>
        ) : (
          <i className='fa fa-bars'></i>
        )}
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i> {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
