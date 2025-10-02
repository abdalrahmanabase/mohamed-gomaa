import React from 'react';
import { motion } from 'framer-motion';

const Plsection2 = () => {
    return (
        <section className="benefits-section">
            <div className="benefits-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">فوائد علاج البلازما</h2>
                    <p className="section-description">
                        علاج طبيعي وفعال باستخدام مكونات الجسم الطبيعية
                    </p>
                </motion.div>

                <div className="benefits-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">تحفيز النمو</h3>
                        <p className="benefit-description">
                            تحفيز نمو الخلايا وإصلاح الأنسجة التالفة
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">تقليل الالتهاب</h3>
                        <p className="benefit-description">
                            تقليل الالتهاب وتسريع عملية الشفاء
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">تحسين المظهر</h3>
                        <p className="benefit-description">
                            تحسين مظهر البشرة وتجديد الخلايا
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Plsection2;
