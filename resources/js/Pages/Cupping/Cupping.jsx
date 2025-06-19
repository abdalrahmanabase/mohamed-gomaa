import React from 'react';
import Cheader from './Cheader';
import Csection1 from './Csection1';
import Csection2 from './Csection2';
import Csection3 from './Csection3';
import './Cstyle.css';

const Cupping = ({ infoCards }) => {
    return (
        <>
            <Cheader />
            <Csection1 infoCards={infoCards} />
            <Csection2 />
            <Csection3 />
        </>
    );
};

export default Cupping;
