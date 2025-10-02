import React from 'react';
import { motion } from 'framer-motion';

const Ssection1 = ({ infoCards = [] }) => {
    if (!infoCards || infoCards.length === 0) {
        return (
            <section id="about" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">الفوطة النارية</h2>
                    <div className="text-center text-gray-600">
                        لا توجد معلومات متاحة حالياً
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="about" className="services-section">
            <div className="services-container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    ما هي الفوطة النارية؟
                </motion.h2>
                <motion.p
                    className="section-description-first"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
الفوطة النارية هي تقنية علاجية تستخدم فيها فوطة مبللة بالكحول ثم إشعالها بسرعة ووضعها على مناطق معينة من الجسم بشكل آمن ومدروس
                </motion.p>
                <div className="cards-grid">
                    {infoCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className="services-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {card.image_path && (
                                <div className="card-image">
                                    <img 
                                        src={card.image_path}
                                        alt={card.title}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(card.title)}&background=random`;
                                        }}
                                    />
                                </div>
                            )}
                            <div className="card-content">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">
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