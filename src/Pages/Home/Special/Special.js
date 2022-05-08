import React from 'react';

const Special = ({ special }) => {
    const { name, img, description } = special;

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card mb-2" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    );
};

export default Special;