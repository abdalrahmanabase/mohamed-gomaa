import React from 'react';
import { motion } from 'framer-motion';

const Ssection2 = () => {
    return (
        <section className="benefits-section">
            <div className="benefits-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">فوائد الفوطة النارية</h2>
                    <p className="section-description">
                        علاج طبيعي فعال يساعد في تحسين الصحة العامة وتخفيف العديد من الأمراض
                    </p>
                </motion.div>

                <div className="benefits-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">تنشيط الدورة الدموية</h3>
                        <p className="benefit-description">
                            الحرارة العلاجية تساعد على توسيع الأوعية الدموية وتحسين التدفق
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">تخفيف الآلام</h3>
                        <p className="benefit-description">
                            علاج فعال لآلام العضلات والمفاصل والشد العضلي
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">الاسترخاء والراحة</h3>
                        <p className="benefit-description">
                            تساعد على الاسترخاء وتخفيف التوتر والضغط النفسي
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

export default Ssection2; 