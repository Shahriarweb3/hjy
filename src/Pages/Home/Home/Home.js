import React from 'react';
import Banner from '../Banner/Banner';
import Subscribe from '../Subscribe/Subscribe';
import TravelPackages from '../TravelPackages/TravelPackages';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <TravelPackages></TravelPackages>
            <Subscribe></Subscribe>

        </div>
    );
};

export default Home;