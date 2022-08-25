import React from 'react';
import { Screener } from "react-ts-tradingview-widgets";

const ForexScreener = () => {
    return (
        <>
            <div className="container mx-auto">
            <Screener colorTheme="light" width="100%" height={700}></Screener>
            </div>
        </>
    );
};

export default ForexScreener;