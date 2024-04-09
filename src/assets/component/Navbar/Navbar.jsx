import React, { useState } from 'react';
import logo from '../../Resources/Logo.png';
import { NavLink } from 'react-router-dom';
import './style.css';
import Home from '../Home/Home';

const Navbar = () => {

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink exact to="/home" className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/destination" className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }>Destination</NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics" className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }>Statistics</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
