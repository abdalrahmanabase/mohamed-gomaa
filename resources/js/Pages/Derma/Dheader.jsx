import React from 'react';
import { motion } from 'framer-motion';
import './Dstyle.css';

const Dheader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="derma-header"
        >
            <div className="header-overlay"></div>
            <div className="header-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="header-title"
                >
                    الديرما بن
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="header-subtitle "
                >
الديرما بن (Derma Pen) 
يعتمد على تقنية الإبر الدقيقة اللي بتعمل ثقوب صغيرة في الجلد لتحفيز التجدد الطبيعي.
يساعد على علاج الندبات، وآثار حب الشباب، والتجاعيد، وتصبغات البشرة.
بيحسّن نضارة الجلد وملمسه مع تكرار الجلسات.
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Dheader;

