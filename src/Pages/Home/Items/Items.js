import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://immense-ridge-40587.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])

    return (
        <div id="items" className='container'>
            <div className="row">
            <h1 className='mt-3 mb-2 text-center text-uppercase text-success'>Manage Item</h1>
            <hr style={{ width: '40%', margin: '0  auto' }} className='mb-4' />
                <div className="items-container">
                    {
                        items.slice(0,6).map(item => <Item
                            key={item._id}
                            item={item}
                        >
                        </Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;