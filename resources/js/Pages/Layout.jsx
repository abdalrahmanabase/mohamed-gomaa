import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Navfoot.css';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col" dir="rtl">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout; 