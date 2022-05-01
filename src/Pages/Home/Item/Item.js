import React from 'react';
import './Item.css';

const Item = ({item}) => {
    const {name, img, description, price, quantity, supplier} = item;
    return (
        <div className='item'>
            <img className='w-100' src={img} alt="" />
            <h2>Service: {name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <p><small>{quantity}</small></p>
            <p><small>{supplier}</small></p>
            <button>Stock Update {name}</button>
        </div>
    );
};

export default Item;