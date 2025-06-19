import React from 'react';
import { motion } from 'framer-motion';
import './Hstyle.css';

const Hheader = () => {
    return (
        <header className="home-header" style={{
            background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="header-overlay"></div>
            <div className="header-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="header-title"
                >
                    مرحباً بكم في شركتنا
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="header-subtitle"
                >
                    نقدم حلولاً مبتكرة لاحتياجات عملك
                </motion.p>
            </div>
        </header>
    );
};

export default Hheader;
