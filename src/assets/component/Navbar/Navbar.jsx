import React, { useState } from 'react';
import logo from '../../Resources/Logo.png';
import { NavLink } from 'react-router-dom';
import './style.css';
import Home from '../Home/Home';
import AllList from '../AllList/AllList';

const Navbar = () => {
  // Use a single state variable to manage active link
  const [activeLink, setActiveLink] = useState('/home'); // Set initial active link to '/home'

  const handleLinkClick = (path) => {
    setActiveLink(path); // Update activeLink on link click
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                exact
                to="/home"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => handleLinkClick('/home')} // Update activeLink on click
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => handleLinkClick('/destination')}
              >
                Destination
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => handleLinkClick('/statistics')}
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;