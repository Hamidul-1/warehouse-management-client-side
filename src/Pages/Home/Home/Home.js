import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Services from '../Services/Services';
import Specials from '../Specials/Specials';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Items></Items>
            <Services></Services>
            <Specials></Specials>
        </>
    );
};

export default Home;