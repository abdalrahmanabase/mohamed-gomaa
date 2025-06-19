import React from 'react';
import { motion } from 'framer-motion';

const Psection1 = ({ infoCards = [] }) => {
    if (!infoCards || infoCards.length === 0) {
        return (
            <section id="about" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">ما هو العلاج الطبيعي؟</h2>
                    <div className="text-center text-gray-600">
                        لا توجد معلومات متاحة حالياً
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2 
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    ما هو العلاج الطبيعي؟
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {infoCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {card.image_path && (
                                <div className="mb-4">
                                    <img 
                                        src={card.image_path}
                                        alt={card.title}
                                        className="w-full h-48 object-cover rounded-lg"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(card.title)}&background=random`;
                                        }}
                                    />
                                </div>
                            )}
                            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                            <p className="text-gray-600">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Psection1;
