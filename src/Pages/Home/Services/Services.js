import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css';

const Services = () => {
    return (
        < div className='mb-5' >
            <h1 className='mt-3 mb-2 text-center text-uppercase text-success'>Our Service Packages</h1>
            <hr style={{ width: '40%', margin: '0  auto' }} className='mb-4' />
            <div className="wrapper">
                <input type="radio" name="slider" id="tab-1" />
                <input type="radio" name="slider" id="tab-2" checked />
                <input type="radio" name="slider" id="tab-3" />
                <header>
                    <label for="tab-1" className="tab-1">Basic</label>
                    <label for="tab-2" className="tab-2">Standard</label>
                    <label for="tab-3" className="tab-3">Premium</label>
                    <div className="slider"></div>
                </header>
                <div className="card-area">
                    <div className="cards">
                        <div className="row row-1">
                            <div className="price-details">
                                <span className="price">10k</span>
                                <p>For Regular use</p>
                            </div>
                            <ul className="features ms-3">
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>1 month free washing</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>1 Month free servicing</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Guaranteed savings on your car servicing</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Discounts on all included services and an additional discount of 10% on Non-Package Services.</span></li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="price-details">
                                <span className="price">40k</span>
                                <p>For professional use</p>
                            </div>
                            <ul className="features ms-3">
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>3 month free washing</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>3 Month free servicing</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Guaranteed savings on your car servicing</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Discounts on all included services and an additional discount of 40% on Non-Package Services.</span></li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="price-details">
                                <span className="price">25k</span>
                                <p>For team collaboration</p>
                            </div>
                            <ul className="features ms-5">
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>2 month free washing</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>2 Month free servicing</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Guaranteed savings on your car servicing</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Discounts on all included services and an additional discount of 25% on Non-Package Services.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button>Choose plan</button>
            </div>
        </div >
    );
};

export default Services;