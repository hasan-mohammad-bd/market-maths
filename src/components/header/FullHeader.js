import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Social from './Social';

const FullHeader = ({user, setUser}) => {
    return (
        <>
            <Social/>
            <Header/>
            <Navbar user={user} setUser={setUser}/>
        </>
    );
};

export default FullHeader;