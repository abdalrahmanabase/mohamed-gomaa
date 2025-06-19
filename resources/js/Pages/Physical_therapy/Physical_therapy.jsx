import React from 'react';
import Pheader from './Pheader';
import Psection1 from './Psection1';
import Psection2 from './Psection2';
import Psection3 from './Psection3';
import './Pstyle.css';

const Physical_therapy = ({ infoCards }) => {
    return (
        <>
            <Pheader />
            <Psection1 infoCards={infoCards} />
            <Psection2 />
            <Psection3 />
        </>
    );
};

export default Physical_therapy;
