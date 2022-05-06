import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
    const {itemId} = useParams();
    return (
        <div>
            <h2>Welcome to Item Detail: {itemId}</h2>
            <Link to="/checkout">
                <button className='btn btn-primary'>Proceed Checkouts</button>
            </Link>
        </div>
    );
};

export default ItemDetail;