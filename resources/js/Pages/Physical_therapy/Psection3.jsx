import React from 'react';
import { motion } from 'framer-motion';

const Psection3 = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">مميزات العلاج الطبيعي</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        علاج طبيعي آمن وفعال باستخدام أحدث التقنيات والأساليب
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">علاج غير جراحي</h3>
                        <p className="text-gray-600">
                            حلول طبيعية بدون تدخل جراحي
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">تأهيل متكامل</h3>
                        <p className="text-gray-600">
                            برامج تأهيل شاملة لجميع الحالات
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-white p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">أجهزة حديثة</h3>
                        <p className="text-gray-600">
                            استخدام أحدث الأجهزة والتقنيات
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="bg-white p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">خبراء متخصصون</h3>
                        <p className="text-gray-600">
                            فريق من المعالجين ذوي الخبرة العالية
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Psection3;
