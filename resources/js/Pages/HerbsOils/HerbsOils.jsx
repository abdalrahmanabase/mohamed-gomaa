import React from 'react';
import Hheader from './Hheader';
import Hsection1 from './Hsection1';
import Hsection2 from './Hsection2';
import Hsection3 from './Hsection3';
import './Hstyle.css';

const HerbsOils = ({ infoCards }) => {
    return (
        <>
            <Hheader />
            <Hsection1 infoCards={infoCards} />
            <Hsection2 />
            <Hsection3 />
        </>
    );
};

export default HerbsOils;
