import React, { useEffect, useState } from 'react';
import List from '../List/List';

const AllList = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setDatas(data);
                console.log(data.length);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const [inputValue, setInputValue] = useState('');

    
    let str = '';
    const handleInputChange = (event) => {
        str = event.target.value;
        // setInputValue(event.target.value); 
    };

    const handleSearch = () => {
        const char = str.charAt(0).toUpperCase();
        let newStr = str.slice(1);
        newStr = char + newStr;
        setInputValue(newStr);
    };

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
                        onChange={handleInputChange} 
                    />
                    <button className='bg-[#ff0000] p-5 rounded-r-lg text-white' name='btn' onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-16'>
                {
                    datas.map(data => {
                        if(inputValue == data.category || inputValue == ''){
                            return <List key={data.id} data={data}></List>
                        }
                        return null;
                    })
                }
            </div>
        </div>
    );
};

export default AllList;