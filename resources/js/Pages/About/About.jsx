import React from 'react';
import Aheader from './Aheader';
import Asection1 from './Asection1';
import Asection2 from './Asection2';
import Asection3 from './Asection3';
import './Astyle.css';

const About = ({ infoCards }) => {
    return (
        <>
            <Aheader />
            <Asection1 infoCards={infoCards} />
            <Asection2 />
            <Asection3 />
            </>
    );
};

export default About;
