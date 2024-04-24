import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const loadedData = useLoaderData(); // Changed the variable name to avoid conflict

    // Ensure id is parsed into an integer properly
    const idInt = parseInt(id);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        if (loadedData) {
            setDatas(loadedData); // Set the loaded data to state
        }
    }, [loadedData]); // Add loadedData to the dependency array to avoid infinite loop

    let job = datas.find(job => job.id === idInt);

    return (
        <div className='px-5'>
            {job && (
                <div className='px-5'>
                    <figure className='py-10 flex justify-center relative'>
                        <img className='w-full h-[500px]' src={job.picture} alt="" />
                        <div className="absolute inset-x-0 bottom-0 bg-black opacity-50 h-32"></div>
                    </figure>
                    <h3 className='font-extrabold text-left pb-5'>{job.title}</h3>
                    <p className='text-left'>{job.description}</p>
                </div>
            )}
            {!job && <p>Job not found</p>}
        </div>
    );
};

export default Details;
