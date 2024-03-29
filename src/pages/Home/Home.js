import React from 'react';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import InstaSocial from '../../components/InstaSocial/InstaSocial';
import Offer from '../../components/Offer/Offer';
import Products from '../../components/Products/Products';
import Reviews from '../../components/Reviews/Reviews';

const Home = () => {
    return (
        <>

            <HomeSlider />
            <Products />
            <Reviews />

            <InstaSocial />
            <Offer />

        </>
    );
};

export default Home;