import React from 'react';
import { motion } from 'framer-motion';

const Hsection3 = () => {
    return (
        <section className="features-section">
            <div className="features-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">مميزات العلاج بالأعشاب والزيوت</h2>
                    <p className="section-description">
                        نقدم علاجات طبيعية آمنة ومجربة باستخدام أفضل الأعشاب والزيوت
                    </p>
                </motion.div>

                <div className="features-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="feature-card"
                    >
                        <h3 className="feature-title">طبيعي 100%</h3>
                        <p className="feature-description">
                            استخدام أعشاب وزيوت طبيعية خالصة بدون مواد كيميائية
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="feature-card"
                    >
                        <h3 className="feature-title">آمن وفعال</h3>
                        <p className="feature-description">
                            علاجات مجربة علمياً مع ضمان الأمان والجودة
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="feature-card"
                    >
                        <h3 className="feature-title">خبرة عريقة</h3>
                        <p className="feature-description">
                            استخدام تراث طبي قديم مع تقنيات حديثة
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="feature-card"
                    >
                        <h3 className="feature-title">نتائج مضمونة</h3>
                        <p className="feature-description">
                            تحسن ملحوظ في الصحة العامة مع الاستخدام المنتظم
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

export default Hsection3;
