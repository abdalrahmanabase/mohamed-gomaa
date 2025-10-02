import React from 'react';
import { motion } from 'framer-motion';

const Asection3 = () => {
    return (
        <section className="values-section">
            <div className="values-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">قيمنا</h2>
                    <p className="section-description">
                        هذه القيم الأساسية توجه كل ما نقوم به في عيادتنا
                    </p>
                </motion.div>

                <div className="values-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="value-card"
                    >
                        <h3 className="value-title">التميز</h3>
                        <p className="value-description">
                            نسعى للتميز في كل جانب من جوانب خدماتنا الصحية
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="value-card"
                    >
                        <h3 className="value-title">التعاطف</h3>
                        <p className="value-description">
                            نتعامل مع كل مريض بلطف وتعاطف وفهم
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="value-card"
                    >
                        <h3 className="value-title">الابتكار</h3>
                        <p className="value-description">
                            نتبنى التقنيات والطرق الجديدة لتحسين رعاية المرضى
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="value-card"
                    >
                        <h3 className="value-title">النزاهة</h3>
                        <p className="value-description">
                            نحافظ على أعلى معايير الأخلاق المهنية والأمانة
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Asection3;
