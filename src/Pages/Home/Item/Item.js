import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {
    const {id, name, img, description, price, quantity, supplier} = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id =>{
        navigate(`/item/${id}`);
    }
    return (
        <div className='item'>
            <img className='w-100' src={img} alt="" />
            <h2>Service: {name}</h2>
            <p><b>Price: {price}</b></p>
            <p><small>{description}</small></p>
            <p><small>Quantity: {quantity}</small></p>
            <p><small>Supplier: {supplier}</small></p>
            <button onClick={() =>navigateToItemDetail(id)} className='btn btn-success'>Stock Update {name}</button>
        </div>
    );
};

export default Item;