import React from 'react';
import Header from '../Header/Header';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeDetails from '../HomeDetails/HomeDetails';

const Home = () => {
    return (
        <div>
             <HomeBanner></HomeBanner>
       <HomeDetails></HomeDetails>
        </div>

    );
};

export default Home;