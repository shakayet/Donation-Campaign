import { useState, useEffect } from 'react';
import Show from '../Show/Show';

const Destination = ({}) => {
    const [datas, setDatas] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setDatas(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleShowAll = () => {
        setShowAll(true);
    };

    return (
        <div className='mt-16'>
            <div className='grid grid-cols-2 gap-10'>
                {datas.slice(0, showAll ? datas.length : 4).map(data => (
                    localStorage.getItem(data.id) != null && <Show data={data} key={data.id}></Show>
                ))}
            </div>
            {!showAll && (
                <div className='pt-10'>
                    <button className='btn btn-primary' onClick={handleShowAll}>
                        Show all
                    </button>
                </div>
            )}
        </div>
    );
};

export default Destination;
