import React from 'react';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import Offers from '../Offers/Offers';
import WorkProcess from '../WorkProcess/WorkProcess';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Offers></Offers>
            <WorkProcess></WorkProcess>
        </div>
    );
};

export default Home;