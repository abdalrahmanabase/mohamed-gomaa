import React from 'react';
import { motion } from 'framer-motion';

const Msection3 = () => {
    return (
        <section className="features-section">
            <div className="features-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">مميزات الميزوثيرابي</h2>
                    <p className="section-description">
                        نقدم علاجاً متقدماً وآمناً باستخدام أحدث تقنيات الميزوثيرابي
                    </p>
                </motion.div>

                <div className="features-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="feature-card"
                    >
                        <h3 className="feature-title">غير جراحي</h3>
                        <p className="feature-description">
                            علاج آمن بدون جراحة أو فترة نقاهة طويلة
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="feature-card"
                    >
                        <h3 className="feature-title">نتائج سريعة</h3>
                        <p className="feature-description">
                            تحسن ملحوظ في المظهر بعد جلسات قليلة
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="feature-card"
                    >
                        <h3 className="feature-title">مخصص للاحتياجات</h3>
                        <p className="feature-description">
                            خطة علاج مخصصة حسب احتياجات كل مريض
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="feature-card"
                    >
                        <h3 className="feature-title">تقنيات متقدمة</h3>
                        <p className="feature-description">
                            استخدام أحدث التقنيات والمواد العلاجية
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

export default Msection3;
