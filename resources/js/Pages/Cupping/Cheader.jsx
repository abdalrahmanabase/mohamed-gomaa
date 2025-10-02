import React from 'react';
import { motion } from 'framer-motion';

const Cheader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="cupping-header"
        >
            <div className="header-overlay"></div>
            <div className="header-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="header-title"
                >
                    الحجامة
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="header-subtitle "
                >
تعريف الحجامة
الحجامة هي ممارسة طبية قديمة تتضمن وضع كؤوس خاصة على الجلد لإنشاء شفط، مما يؤدي إلى سحب الدم إلى السطح. تهدف هذه العملية إلى تحفيز الدورة الدموية، تخفيف الألم، وإزالة السموم من الجسم. تُستخدم الحجامة في الطب التقليدي لعلاج مجموعة متنوعة من الحالات الصحية وتحسين الرفاهية العامة.                    </motion.p>
            </div>
        </motion.div>
    );
};

export default Cheader;
