import React from 'react';
import notFound from '../../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center'>Something want wrong</h2>
            <img className='w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;