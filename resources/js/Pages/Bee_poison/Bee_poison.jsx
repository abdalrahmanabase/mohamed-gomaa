import React from 'react';
import Bheader from './Bheader';
import Bsection1 from './Bsection1';
import Bsection2 from './Bsection2';
import Bsection3 from './Bsection3';
import './Bstyle.css';

const Bee_poison = ({ infoCards }) => {
    return (
        <>
            <Bheader />
            <Bsection1 infoCards={infoCards} />
            <Bsection2 />
            <Bsection3 />
        </>
    );
};

export default Bee_poison;
