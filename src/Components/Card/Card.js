import React from 'react';
import Options from '../Options/Options';

const Card = props => {
    const { name, price, options } = props.data;
    return (
        <div className='bg-white p-3 rounded-md'>
            <h1 className='text-3xl font-bold text-gray-700 pb-2 border-b-2 border-purple-600'>{name}</h1>
            <span className='text-5xl font-bold'>{ price }</span>
            <span className='text-lg font-bold text-gray-500'>/mo</span>
            {
                options.map(op => <Options options={ op }></Options>)
            }
            <button className='w-full bg-purple-600 text-white p-2 text-xl rounded mt-3 hover:bg-purple-800 duration-200 ease-in'>Get It Now</button>
        </div>
    );
};

export default Card;