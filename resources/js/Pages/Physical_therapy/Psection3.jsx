import React from 'react';
import { motion } from 'framer-motion';

const Psection3 = () => {
    return (
        <section className="features-section">
            <div className="features-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">مميزات العلاج الطبيعي</h2>
                    <p className="section-description">
                        علاج طبيعي آمن وفعال باستخدام أحدث التقنيات والأساليب
                    </p>
                </motion.div>

                <div className="features-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="feature-card"
                    >
                        <h3 className="feature-title">علاج غير جراحي</h3>
                        <p className="feature-description">
                            حلول طبيعية بدون تدخل جراحي
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="feature-card"
                    >
                        <h3 className="feature-title">تأهيل متكامل</h3>
                        <p className="feature-description">
                            برامج تأهيل شاملة لجميع الحالات
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="feature-card"
                    >
                        <h3 className="feature-title">أجهزة حديثة</h3>
                        <p className="feature-description">
                            استخدام أحدث الأجهزة والتقنيات
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="feature-card"
                    >
                        <h3 className="feature-title">خبراء متخصصون</h3>
                        <p className="feature-description">
                            فريق من المعالجين ذوي الخبرة العالية
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

export default Psection3;
