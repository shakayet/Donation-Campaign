import React from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import './style.css'
import AllList from '../AllList/AllList';

const Home = () => {
    return (
        <div >
            <>
                <div className='mt-20 mx-5'>
                    <AllList></AllList>
                </div>

            </>
        </div>
    );
};

export default Home;
