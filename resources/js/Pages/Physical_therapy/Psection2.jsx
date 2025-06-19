import React from 'react';
import { motion } from 'framer-motion';

const Psection2 = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">خدمات العلاج الطبيعي</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        نقدم مجموعة متكاملة من خدمات العلاج الطبيعي لمساعدتك على التعافي
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gray-50 p-6 rounded-lg"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">علاج آلام الظهر</h3>
                        <p className="text-gray-600">
                            برامج متخصصة لعلاج آلام الظهر وتحسين المرونة
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gray-50 p-6 rounded-lg"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">إعادة التأهيل</h3>
                        <p className="text-gray-600">
                            برامج تأهيل متكاملة بعد الإصابات والعمليات الجراحية
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-gray-50 p-6 rounded-lg"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">علاج المفاصل</h3>
                        <p className="text-gray-600">
                            علاج فعال لآلام المفاصل وتحسين نطاق الحركة
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Psection2;
