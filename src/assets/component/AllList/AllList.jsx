import React, { useEffect, useState } from 'react';
import List from '../List/List';
import Destination from '../Destination/Destination';

const AllList = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setDatas(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <div className='mb-32'>
                <div className='text-center justify-center mt-32'>
                    <h3 className='text-5xl'>I Grow By Helping People In Need</h3>
                </div>
                <div className='pt-8'>
                    <input
                        className='py-[18px] pl-5 pr-32 border-solid border-2 rounded-l-lg'
                        type="text"
                        name="src"
                        id=""
                        placeholder='Search here....'
                    // onChange={handleInputChange} // Attach the handleInputChange function to the onChange event of the input field
                    />
                    <button className='bg-[#ff0000] p-5 rounded-r-lg text-white' name='btn' >
                        Search
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-16'>
                {datas.length > 0 && datas.map(data => (
                    <div key={data.id}>
                        <List data={data} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllList;
