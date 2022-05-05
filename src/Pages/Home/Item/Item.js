import React from 'react';
import './Item.css';

const Item = ({item}) => {
    const {name, img, description, price, quantity, supplier} = item;
    return (
        <div className='item'>
            <img className='w-100' src={img} alt="" />
            <h2>Service: {name}</h2>
            <p><b>Price: {price}</b></p>
            <p><small>{description}</small></p>
            <p><small>Quantity: {quantity}</small></p>
            <p><small>Supplier: {supplier}</small></p>
            <button className='btn btn-success'>Stock Update {name}</button>
        </div>
    );
};

export default Item;