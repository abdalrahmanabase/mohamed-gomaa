import React from 'react';
import { motion } from 'framer-motion';

const Dsection2 = () => {
    return (
        <section className="benefits-section">
            <div className="benefits-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">فوائد علاج الديرما بن</h2>
                    <p className="section-description">
                        علاج شامل ومتخصص لمشاكل الجلد والبشرة
                    </p>
                </motion.div>

                <div className="benefits-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title"> تحفيز الكولاجين</h3>
                        <p className="benefit-description">
                        يحفّز إنتاج الكولاجين ويجدد خلايا البشرة.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title"> علاج حب الشباب</h3>
                        <p className="benefit-description">
                        يقلّل من الندبات وآثار حب الشباب والتجاعيد.
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
                        يوحّد لون البشرة ويزيد من نضارتها ولمعانها
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Dsection2;

