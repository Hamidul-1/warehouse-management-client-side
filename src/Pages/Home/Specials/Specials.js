import React from 'react';

import special1 from '../../../images/macbook-pro.jpg'
import special2 from '../../../images/M2_Apple_MacBook_Pro_14_Mac_Air_2022_drdNBC.jpg'
import special3 from '../../../images/mac-air.jpg'
import Special from '../Special/Special';

const specials = [
    {id: 1, name: 'Mackbook Pro', img: special1},
    {id: 2, name: 'Mackbook Pro_14', img: special2},
    {id: 3, name: 'Mackbook Air', img: special3},
]

const Specials = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5'>Special Arrival</h2>
            <div className="raw">
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