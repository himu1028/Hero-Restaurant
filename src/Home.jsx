import React from 'react';
import HeroSlider from './HeroSlider';
import Review from './Review';
import Query from './Query';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <Review></Review>
            <Query></Query>
        </div>
    );
};

export default Home;