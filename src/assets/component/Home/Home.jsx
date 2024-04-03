import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css'
import logo from '../../Resources/Logo.png'
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            {
                <Banner></Banner>
            }
        </div>
    );
};

export default Home;
