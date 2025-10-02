import React from 'react';
import { motion } from 'framer-motion';

const Psection2 = () => {
    return (
        <section className="benefits-section">
            <div className="benefits-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">خدمات العلاج الطبيعي</h2>
                    <p className="section-description">
                        نقدم مجموعة متكاملة من خدمات العلاج الطبيعي لمساعدتك على التعافي
                    </p>
                </motion.div>

                <div className="benefits-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">علاج آلام الظهر</h3>
                        <p className="benefit-description">
                            برامج متخصصة لعلاج آلام الظهر وتحسين المرونة
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">إعادة التأهيل</h3>
                        <p className="benefit-description">
                            برامج تأهيل متكاملة بعد الإصابات والعمليات الجراحية
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">علاج المفاصل</h3>
                        <p className="benefit-description">
                            علاج فعال لآلام المفاصل وتحسين نطاق الحركة
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Psection2;
