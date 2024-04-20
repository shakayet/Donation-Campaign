import React from 'react';

const List = ({ data }) => {
    const { id, title, category, picture, category_bg_color, button_bg_color, text_color, card_bg_color } = data;

    let bgColorClass;
    let bgtext;
    let bgbtn;
    switch (category_bg_color) {
        case 'blue-50':
            bgColorClass = 'bg-blue-100';
            bgbtn = 'bg-blue-300';
            bgtext = 'text-blue-500';
            break;
        case 'pink-50':
            bgColorClass = 'bg-pink-100';
            bgbtn = 'bg-pink-300';
            bgtext = 'text-pink-500';
            break;
        case 'green-50':
            bgColorClass = 'bg-green-100';
            bgbtn = 'bg-green-300';
            bgtext = 'text-green-500';
            break;
        case 'yellow-50':
            bgColorClass = 'bg-yellow-100';
            bgbtn = 'bg-yellow-300';
            bgtext = 'text-yellow-500';
            break;
        default:
            bgColorClass = '';
    }

    const selectObjectById = () => {
        localStorage.setItem(id, id);
    };

    return (
        <div>
            <div className={`w-72 shadow-xl ${bgColorClass}`}>
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className={`card-body`}>
                    <div>
                        <button onClick={selectObjectById} className={`card-title ${bgtext} ${bgbtn} px-1 rounded-md text-[14px]`}>
                            {category}
                        </button>
                    </div>
                    <p className={`text-left text-[20px] ${bgtext}`}>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default List;
