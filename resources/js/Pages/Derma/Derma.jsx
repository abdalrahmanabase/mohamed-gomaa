import React from 'react';
import Dheader from './Dheader';
import Dsection1 from './Dsection1';
import Dsection2 from './Dsection2';
import Dsection3 from './Dsection3';
import './Dstyle.css';

const Derma = ({ infoCards }) => {
    return (
        <>
            <Dheader />
            <Dsection1 infoCards={infoCards} />
            <Dsection2 />
            <Dsection3 />
        </>
    );
};

export default Derma;

