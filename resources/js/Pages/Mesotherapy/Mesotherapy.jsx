import React from 'react';
import Mheader from './Mheader';
import Msection1 from './Msection1';
import Msection2 from './Msection2';
import Msection3 from './Msection3';
import './Mstyle.css';

const Mesotherapy = ({ infoCards }) => {
    return (
        <>
            <Mheader />
            <Msection1 infoCards={infoCards} />
            <Msection2 />
            <Msection3 />
        </>
    );
};

export default Mesotherapy;
