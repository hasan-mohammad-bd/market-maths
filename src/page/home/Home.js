import React from 'react';
import AwesomeFacts from '../../components/awesomeFacts/AwesomeFacts';
import CustomersFeedback from '../../components/customersFeedback/CustomersFeedback';
import GrowWithUs from '../../components/growWithUs/GrowWithUs';
import LatestBlog from '../../components/latestBlog/LatestBlog';
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
            <AwesomeFacts/>
            <GrowWithUs/>
            <CustomersFeedback/>
            <LatestBlog/>
        </>
    );
};

export default Home;