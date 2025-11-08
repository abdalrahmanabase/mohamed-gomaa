import React from 'react';
import Sheader from './Sheader';
import Ssection1 from './Ssection1';
import Ssection2 from './Ssection2';
import Ssection3 from './Ssection3';
import './Sstyle.css';

const Services = ({ infoCards }) => {
    return (
        <>
            <Sheader />
            <Ssection1 infoCards={infoCards} />
            <Ssection2 />
            {/* <Ssection3 /> */}
        </>
    );
};

export default Services; 