import React from 'react';
import { EconomicCalendar } from "react-ts-tradingview-widgets";

const ForexCalenderChart = () => {
    return (
        <div>
            <EconomicCalendar colorTheme="light" height={700} width="100%"></EconomicCalendar>
        </div>
    );
};

export default ForexCalenderChart;