import React from 'react';
import { motion } from 'framer-motion';

const Hsection2 = () => {
    return (
        <section className="benefits-section">
            <div className="benefits-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">فوائد الأعشاب والزيوت</h2>
                    <p className="section-description">
                        علاجات طبيعية آمنة وفعالة لتحسين الصحة العامة
                    </p>
                </motion.div>

                <div className="benefits-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">تقوية المناعة</h3>
                        <p className="benefit-description">
                            تعزيز جهاز المناعة ومقاومة الأمراض والالتهابات
                        </p>
                    </motion.div>

                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">تخفيف الآلام</h3>
                        <p className="benefit-description">
                            علاج طبيعي فعال لآلام المفاصل والعضلات والصداع
                        </p>
                    </motion.div> */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">تحسين الهضم</h3>
                        <p className="benefit-description">
                            تحسين عملية الهضم وتخفيف اضطرابات المعدة
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="benefit-card"
                    >
                        <h3 className="benefit-title">الاسترخاء والهدوء</h3>
                        <p className="benefit-description">
                            تقليل التوتر والقلق وتحسين جودة النوم
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hsection2;
