import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const Ssection3 = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center text-white"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        ابدأ رحلة الشفاء اليوم
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        احجز موعدك الآن واستمتع بأفضل الخدمات الطبية البديلة مع فريقنا المتخصص
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/"
                                className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                            >
                                احجز موعد
                            </Link>
                        </motion.div>
                        
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/about"
                                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300"
                            >
                                تعرف علينا
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Ssection3; 