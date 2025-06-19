import React from 'react';
import { motion } from 'framer-motion';

const Asection3 = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">قيمنا</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        هذه القيم الأساسية توجه كل ما نقوم به في عيادتنا
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">التميز</h3>
                        <p className="text-gray-600">
                            نسعى للتميز في كل جانب من جوانب خدماتنا الصحية
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">التعاطف</h3>
                        <p className="text-gray-600">
                            نتعامل مع كل مريض بلطف وتعاطف وفهم
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">الابتكار</h3>
                        <p className="text-gray-600">
                            نتبنى التقنيات والطرق الجديدة لتحسين رعاية المرضى
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">النزاهة</h3>
                        <p className="text-gray-600">
                            نحافظ على أعلى معايير الأخلاق المهنية والأمانة
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Asection3;
