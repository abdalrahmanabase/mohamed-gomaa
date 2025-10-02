import React from 'react';
import { motion } from 'framer-motion';

const Csection3 = () => {
    return (
        <section className="types-section">
            <div className="types-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">أنواع الحجامة</h2>
                    <p className="section-description">
                        نقدم أنواع مختلفة من الحجامة لتناسب احتياجات كل مريض
                    </p>
                </motion.div>

                <div className="types-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="type-card"
                    >
                        <h3 className="type-title">الحجامة الجافة</h3>
                        <p className="type-description">
                            تستخدم لتحسين تدفق الدم وتنشيط الدورة الدموية
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="type-card"
                    >
                        <h3 className="type-title">الحجامة الرطبة</h3>
                        <p className="type-description">
                            تساعد في إزالة الدم الفاسد وتنقية الجسم
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="type-card"
                    >
                        <h3 className="type-title">الحجامة المتزحلقة</h3>
                        <p className="type-description">
                            تستخدم لعلاج آلام العضلات والمفاصل
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="type-card"
                    >
                        <h3 className="type-title">الحجامة النارية</h3>
                        <p className="type-description">
                            تستخدم لعلاج بعض الأمراض المزمنة
                        </p>
                    </motion.div>
                </div>
                <div className="process-info">
                        <p className="process-description">
                            تستغرق الجلسة عادة من 30 إلى 45 دقيقة، وتتم تحت إشراف طبي متخصص
                        </p>
                        <a href="https://wa.me/201013739037" className="appointment-button">
                            احجز موعدك الآن
                        </a>
                    </div>
            </div>
        </section>
    );
};

export default Csection3;
