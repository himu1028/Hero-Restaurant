import React from 'react';
import HeroSlider from './HeroSlider';
import Review from './Review';
import Query from './Query';
import TopFood from './TopFood';
import Promo from './Promo';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <TopFood></TopFood>
            <Promo></Promo>
            <Review></Review>
            <Query></Query>
        </div>
    );
};

export default Home;