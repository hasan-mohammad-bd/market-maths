import React from 'react';
import LiveRate from '../../components/liveRate/LiveRate';
import Pricing from '../../components/pricing/Pricing';
import ShowCase from '../../components/showCase/ShowCase';
import WhySpecial from '../../components/whySpecial/WhySpecial';
import WhyUs from '../../components/whyUs/WhyUs';

const Home = () => {
    return (
        <>
            <ShowCase/>
            <WhyUs/>
            <WhySpecial/>
            <LiveRate/>
            <Pricing/>
        </>
    );
};

export default Home;