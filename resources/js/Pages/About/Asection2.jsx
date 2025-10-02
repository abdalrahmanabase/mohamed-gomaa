import React from 'react';
import { motion } from 'framer-motion';

const Asection2 = () => {
    return (
        <section className="mission-section">
            <div className="mission-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">رسالتنا</h2>
                    <p className="section-description">
                        تقديم خدمات صحية استثنائية مع الاهتمام والابتكار والتميز
                    </p>
                </motion.div>

                <div className="features-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="feature-card"
                    >
                        <h3 className="feature-title">رعاية عالية الجودة</h3>
                        <p className="feature-description">
                            نحن ملتزمون بتقديم أعلى مستوى من الرعاية لجميع مرضانا
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="feature-card"
                    >
                        <h3 className="feature-title">فريق متخصص</h3>
                        <p className="feature-description">
                            يتكون فريقنا من متخصصين في الرعاية الصحية ذوي خبرة عالية
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="feature-card"
                    >
                        <h3 className="feature-title">تركيز على المريض</h3>
                        <p className="feature-description">
                            نعطي الأولوية لراحة المريض ورضاه في كل ما نقوم به
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Asection2;
