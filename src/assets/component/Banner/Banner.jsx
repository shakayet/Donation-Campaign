import React from 'react';
import background from '../../Resources/Education.png'

const Banner = () => {
    return (
        <div>
            <div className='text-center justify-center mt-32'>
                <h3 className='text-5xl'>I Grow By Helping People In Need</h3>
            </div>
            <div className='pt-8'>
                <input className='py-[18px] pl-5 pr-32 border-solid border-2 rounded-l-lg' type="text" name="" id="" placeholder='Search here....'/>
                <button className='bg-[#ff0000] p-5 rounded-r-lg text-white'>Search</button>
            </div>
        </div>
    ); 
};

export default Banner;