import React from 'react';
import { motion } from 'framer-motion';

const Aheader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-800"
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        من نحن
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl text-gray-200 mb-8 header-paragraph-limit"
                    >
فريق مركز ابن القيم بخبره اكثر من ١٥ عاما في مجالات العلاج بالطرق الطبيعيه                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default Aheader;
