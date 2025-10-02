import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Navfoot.css';

const Layout = ({ children }) => {
    return (
        <div className="layout" dir="rtl">
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout; 