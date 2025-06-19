import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hheader from './Hheader';
import Hsection1 from './Hsection1';
import Hsection2 from './Hsection2';
import Hsection3 from './Hsection3';

const Home = ({ infoCards }) => {
    return (
        <div className="home-page">
            <main>
                <Hheader />
                <Hsection1 />
                <Hsection2 infoCards={infoCards} />
                <Hsection3 />
            </main>
        </div>
    );
};

export default Home;