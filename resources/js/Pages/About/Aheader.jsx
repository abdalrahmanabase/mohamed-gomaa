import React from 'react';
import { motion } from 'framer-motion';

const Aheader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="about-header"
        >
            <div className="header-overlay"></div>
            <div className="header-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="header-title"
                >
                    من نحن
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="header-subtitle">
                        في مركز ابن القيم للعلاج الطبيعي والحجامة، نؤمن أن الصحة نعمة تستحق الرعاية. نسعى لتقديم أفضل الخدمات العلاجية الطبيعية باستخدام طرق علمية حديثة وأساليب تقليدية فعّالة مثل الحجامة، سم النحل، الميزوثيرابي، الأعشاب والزيوت، والعلاج الطبيعي.
                      </motion.p>
            </div>
        </motion.div>
    );
};

export default Aheader;
