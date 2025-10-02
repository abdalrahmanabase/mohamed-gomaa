import React from 'react';
import { motion } from 'framer-motion';

const Msection2 = () => {
    return (
        <section className="benefits-section">
            <div className="benefits-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">فوائد الميزوثيرابي</h2>
                    <p className="section-description">
                        علاج متقدم يساعد في تحسين مظهر البشرة والشعر والجسم
                    </p>
                </motion.div>

                <div className="benefits-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">تحسين مظهر البشرة</h3>
                        <p className="benefit-description">
                            تقليل التجاعيد وتحسين نسيج البشرة وإعطائها مظهراً أكثر شباباً
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">علاج تساقط الشعر</h3>
                        <p className="benefit-description">
                            تحفيز نمو الشعر وتقوية بصيلات الشعر ومنع تساقطه
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">تنحيف الجسم</h3>
                        <p className="benefit-description">
                            إذابة الدهون المحلية وتحسين شكل الجسم في المناطق المستهدفة
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Msection2;
