import React from 'react';
import { motion } from 'framer-motion';

const Bsection3 = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">مميزات العلاج بسم النحل</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        نقدم علاجاً طبيعياً آمناً وفعالاً باستخدام سم النحل
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">علاج طبيعي</h3>
                        <p className="text-gray-600">
                            استخدام مواد طبيعية 100% من الطبيعة
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">فعالية عالية</h3>
                        <p className="text-gray-600">
                            نتائج إيجابية في علاج العديد من الأمراض
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">آمن وموثوق</h3>
                        <p className="text-gray-600">
                            علاج آمن تحت إشراف متخصصين ذوي خبرة
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">نتائج سريعة</h3>
                        <p className="text-gray-600">
                            تحسن ملحوظ في الأعراض بعد جلسات قليلة
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Bsection3;
