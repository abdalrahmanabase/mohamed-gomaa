import React from 'react';
import { motion } from 'framer-motion';

const Mheader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="meso-header"
        >
            <div className="header-overlay"></div>
            <div className="header-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="header-title"
                >
                    الميزوثيرابي
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="header-subtitle "
                >
الميزوثيرابي هو تقنية علاجية تجميلية تعتمد على حقن مواد فعالة تحت الجلد مباشرة.
تُستخدم فيها فيتامينات، معادن، أحماض أمينية أو مواد طبيعية لتحفيز تجديد الخلايا.
تُستعمل لتحسين نضارة البشرة، تقليل التجاعيد، وعلاج تساقط الشعر والسيلوليت.
تُجرى الجلسات باستخدام إبر دقيقة جدًا لتوصيل المواد إلى طبقات الجلد الوسطى.                </motion.p>
            </div>
        </motion.div>
    );
};

export default Mheader;
