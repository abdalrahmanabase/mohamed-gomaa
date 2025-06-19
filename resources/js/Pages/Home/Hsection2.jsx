import React from 'react';
import { motion } from 'framer-motion';
import './Hstyle.css';

const Hsection2 = ({ infoCards = [] }) => {
    if (!infoCards || infoCards.length === 0) {
        return (
            <section className="info-cards-section">
                <div className="section-header">
                    <h2>خدماتنا</h2>
                    <p>لا توجد خدمات متاحة حالياً</p>
                </div>
            </section>
        );
    }

    return (
        <section className="info-cards-section">
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    خدماتنا
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    اكتشف ما يمكننا تقديمه لعملك
                </motion.p>
            </div>

            <div className="cards-grid">
                {infoCards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        className="info-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="card-image">
                            <img 
                                src={card.image_path || `https://ui-avatars.com/api/?name=${encodeURIComponent(card.title)}&background=random`}
                                alt={card.title}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(card.title)}&background=random`;
                                }}
                            />
                        </div>
                        <div className="card-content">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Hsection2;
