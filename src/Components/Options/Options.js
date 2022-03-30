import React from 'react';
import { CheckIcon } from '@heroicons/react/solid'

const Options = props => {
    return (
        <div className='flex items-center'>
            <CheckIcon className='h-4 w-4 text-green-600 font-bold bg-slate-300 rounded-full mr-3'></CheckIcon>
            <p className='text-gray-500'>{props.options}</p>
        </div>
    );
};

export default Options;