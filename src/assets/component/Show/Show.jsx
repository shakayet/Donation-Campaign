import React from 'react';
import { Link } from 'react-router-dom';

const Show = ({ data }) => {
    const { id, title, category, picture, category_bg_color, button_bg_color, text_color, card_bg_color, price } = data;

    let bgColorClass;
    let bgtext;
    let bgbtn;
    let txt;
    switch (category_bg_color) {
        case 'blue-50':
            bgColorClass = 'bg-blue-100';
            bgbtn = 'bg-blue-300';
            bgtext = 'bg-blue-500';
            txt = 'text-blue-500';
            break;
        case 'pink-50':
            bgColorClass = 'bg-pink-100';
            bgbtn = 'bg-pink-300';
            bgtext = 'bg-pink-500';
            txt = 'text-pink-500';
            break;
        case 'green-50':
            bgColorClass = 'bg-green-100';
            bgbtn = 'bg-green-300';
            bgtext = 'bg-green-500';
            txt = 'text-green-500';
            break;
        case 'yellow-50':
            bgColorClass = 'bg-yellow-100';
            bgbtn = 'bg-yellow-300';
            bgtext = 'bg-yellow-500';
            txt = 'text-yellow-500';
            break;
        default:
            bgColorClass = '';
    }


    return (
        <div>
            <div className={`flex gap-5 ${bgColorClass} shadow-xl`}>
                <div className='w-2/3'>
                    <figure className='flex'>
                        <img className='' src={picture} alt="Movie" />
                    </figure>
                </div>
                <div className='w-2/3 py-5 text-start'>
                    <div className=''>
                        <button className={`${bgbtn} ${txt} justify-start px-2 rounded-lg`}>{category}</button>
                    </div>
                    <h2 className="card-title py-1">{title}</h2>
                    <p className={`text-left ${txt} pb-2 font-medium`}>${price}</p>
                    <div className="card-actions justify-start">
                        <Link to={`/details/${id}`} className={`btn ${bgtext} text-white`}>
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;