import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])

    return (
        <div id="items" className='container'>
            <div className="row">
                <h2 className='items-title mt-5'>Inventory Items</h2>
                <div className="items-container">
                    {
                        items.map(item => <Item
                            key={item.id}
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