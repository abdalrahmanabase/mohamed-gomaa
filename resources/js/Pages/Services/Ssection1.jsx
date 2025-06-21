import React from 'react';
import { motion } from 'framer-motion';

const Ssection1 = ({ infoCards }) => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        خدماتنا المميزة
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        نقدم مجموعة متنوعة من الخدمات الطبية البديلة المصممة خصيصاً لاحتياجاتك الصحية
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {infoCards && infoCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {card.image_path && (
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={card.image_path}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ssection1; 