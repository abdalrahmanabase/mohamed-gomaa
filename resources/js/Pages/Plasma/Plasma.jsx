import React from 'react';
import Plheader from './Plheader';
import Plsection1 from './Plsection1';
import Plsection2 from './Plsection2';
import Plsection3 from './Plsection3';
import './Plstyle.css';

const Plasma = ({ infoCards }) => {
    return (
        <>
            <Plheader />
            <Plsection1 infoCards={infoCards} />
            <Plsection2 />
            <Plsection3 />
        </>
    );
};

export default Plasma;
