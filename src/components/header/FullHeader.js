import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Social from './Social';

const FullHeader = () => {
    return (
        <>
            <Social/>
            <Header/>
            <Navbar/>
        </>
    );
};

export default FullHeader;