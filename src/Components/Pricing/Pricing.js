import React from 'react';
import Card from '../Card/Card';

const Pricing = () => {
    const data = [
        { name: 'Free', price: 0, options: ['Lifetime free', 'Limited access', 'Limited Bandwidth'] },
        { name: 'Gold', price: 99, options: ['All in free', 'Unlimited access', 'Unlimited Bandwidth'] }
    ];
    return (
        <div className='bg-purple-600 p-8 md:grid grid-cols-2 gap-10'>
            {
                data.map(dt => <Card data={ dt }></Card>)
            }
        </div>
    );
};

export default Pricing;