import React from 'react';
import { motion } from 'framer-motion';

const Sheader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="services-header"
        >
            <div className="header-overlay"></div>
            <div className="header-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="header-title"
                >
                    الفوطة النارية
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="header-subtitle "
                >
                    الفوطة النارية هي إحدى طرق العلاج الطبيعي التقليدي، تقوم على استخدام فوطة مبللة بالكحول ثم إشعالها بسرعة ووضعها على مناطق معينة من الجسم بشكل آمن ومدروس، مما يولّد حرارة علاجية تساعد على
تنشيط الدورة الدموية
تخفيف الآلام
إذابة الشد العضلي
تحفيز طاقة الجسم وتجديد النشاط
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Sheader; 