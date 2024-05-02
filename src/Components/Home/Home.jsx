import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import ServiceTime from './ServiceTime';
import Product from './Product';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ServiceTime></ServiceTime>
            <Product></Product>
        </div>
    );
};

export default Home;