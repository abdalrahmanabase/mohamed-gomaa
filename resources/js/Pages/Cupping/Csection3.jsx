import React from 'react';
import { motion } from 'framer-motion';

const Csection3 = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">أنواع الحجامة</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        نقدم أنواع مختلفة من الحجامة لتناسب احتياجات كل مريض
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">الحجامة الجافة</h3>
                        <p className="text-gray-600">
                            تستخدم لتحسين تدفق الدم وتنشيط الدورة الدموية
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">الحجامة الرطبة</h3>
                        <p className="text-gray-600">
                            تساعد في إزالة الدم الفاسد وتنقية الجسم
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">الحجامة المتزحلقة</h3>
                        <p className="text-gray-600">
                            تستخدم لعلاج آلام العضلات والمفاصل
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">الحجامة النارية</h3>
                        <p className="text-gray-600">
                            تستخدم لعلاج بعض الأمراض المزمنة
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Csection3;
