import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const Ssection3 = () => {
    return (
        <section className="types-section">
            <div className="types-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">أنواع الفوطة النارية</h2>
                    <p className="section-description">
                        نقدم أنواع مختلفة من العلاج بالفوطة النارية لتناسب احتياجات كل مريض
                    </p>
                </motion.div>

                <div className="types-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="type-card"
                    >
                        <h3 className="type-title">الفوطة النارية التقليدية</h3>
                        <p className="type-description">
                            تستخدم فوطة مبللة بالكحول مع إشعال سريع وآمن
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="type-card"
                    >
                        <h3 className="type-title">الفوطة النارية للظهر</h3>
                        <p className="type-description">
                            علاج متخصص لآلام الظهر والعمود الفقري
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="type-card"
                    >
                        <h3 className="type-title">الفوطة النارية للمفاصل</h3>
                        <p className="type-description">
                            علاج فعال لآلام المفاصل والتهاباتها
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="type-card"
                    >
                        <h3 className="type-title">الفوطة النارية للاسترخاء</h3>
                        <p className="type-description">
                            علاج للاسترخاء وتخفيف التوتر والضغط النفسي
                        </p>
                    </motion.div>
                </div>
               
            </div>
        </section>
    );
};

export default Ssection3; 