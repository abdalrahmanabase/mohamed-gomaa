import React from 'react';
import { motion } from 'framer-motion';
import './Plstyle.css';

const Plheader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="plasma-header"
        >
            <div className="header-overlay"></div>
            <div className="header-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="header-title"
                >
                    البلازما
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="header-subtitle "
                >
                    البلازما الغنية بالصفائح الدموية هو علاج طبي يستخدم دم المريض نفسه، حيث يتم سحب كمية صغيرة من الدم ثم معالجتها لفصل البلازما الغنية بالصفائح الدموية. هذه البلازما تحتوي على عوامل نمو طبيعية تساعد في تسريع عملية الشفاء وتجديد الأنسجة. وتستخدم البلازما في مجالات متعددة مثل جراحة العظام، الطب الرياضي، الأمراض الجلدية، وتجميل الشعر والبشرة.                        </motion.p>
            </div>
        </motion.div>
    );
};

export default Plheader;
