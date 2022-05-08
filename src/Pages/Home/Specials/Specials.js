import React from 'react';

import special1 from '../../../images/macbook-pro.jpg'
import special2 from '../../../images/M2_Apple_MacBook_Pro_14_Mac_Air_2022_drdNBC.jpg'
import special3 from '../../../images/mac-air.jpg'
import Special from '../Special/Special';

const specials = [
    {id: 1, name: 'Mackbook Pro', img: special1, description: 'MacBook Pro. Our most powerful notebooks. Fast M1 processors, incredible graphics, and spectacular Retina displays. Now available in a 14-inch model.The fifth-generation[3] MacBook Pro was released in October 2021.'},
    {id: 2, name: 'Mackbook Pro_14', img: special2, description: 'MacBook Pro_14 with the incredibly powerful M1 Pro or M1 Max chip. Amazing battery life. And a brilliant Liquid Retina XDR display. Buy online now.if you need a true workhorse of a laptop and you want to stay in the Apple ecosystem.'},
    {id: 3, name: 'Mackbook Air', img: special3, description: 'The new MacBook Air delivers almost everything you could want in an Apple laptop thanks to its M1 chip, which enables record-setting performance and battery life.'}
]

const Specials = () => {
    return (
        <div id="specials" className='container'>
            <h1 className='mt-3 mb-2 text-center text-uppercase text-success'>Special Arrival</h1>
            <hr style={{ width: '40%', margin: '0  auto' }} className='mb-4' />
            <div className="row">
                {
                    specials.map(special => <Special
                        key={special.id}
                        special={special}
                    ></Special>)
                }
            </div>
        </div>
    );
};

export default Specials;