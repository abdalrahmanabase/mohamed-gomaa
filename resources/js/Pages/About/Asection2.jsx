import React from 'react';
import { motion } from 'framer-motion';

const Asection2 = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">رسالتنا</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        تقديم خدمات صحية استثنائية مع التعاطف والابتكار والتميز
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gray-50 p-6 rounded-lg"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">رعاية عالية الجودة</h3>
                        <p className="text-gray-600">
                            نحن ملتزمون بتقديم أعلى مستوى من الرعاية لجميع مرضانا
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gray-50 p-6 rounded-lg"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">فريق متخصص</h3>
                        <p className="text-gray-600">
                            يتكون فريقنا من متخصصين في الرعاية الصحية ذوي خبرة عالية
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-gray-50 p-6 rounded-lg"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">تركيز على المريض</h3>
                        <p className="text-gray-600">
                            نعطي الأولوية لراحة المريض ورضاه في كل ما نقوم به
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Asection2;
