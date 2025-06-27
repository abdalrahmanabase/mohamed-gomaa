import React from 'react';
import { motion } from 'framer-motion';
import './Hstyle.css';

const Hheader = () => {
    return (
        <header className="home-header" >
            <div className="header-overlay"></div>
            <div className="header-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="header-title"
                >
                    مرحباً بكم في مركزنا الطبي
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="header-subtitle"
                >
تعريف الحجامة
الحجامة هي ممارسة طبية قديمة تتضمن وضع كؤوس خاصة على الجلد لإنشاء شفط، مما يؤدي إلى سحب الدم إلى السطح. تهدف هذه العملية إلى تحفيز الدورة الدموية، تخفيف الألم، وإزالة السموم من الجسم. تُستخدم الحجامة في الطب التقليدي لعلاج مجموعة متنوعة من الحالات الصحية وتحسين الرفاهية العامة.
                </motion.p>
            </div>
        </header>
    );
};

export default Hheader;
