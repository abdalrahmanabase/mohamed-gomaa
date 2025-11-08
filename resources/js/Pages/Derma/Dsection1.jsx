import React from 'react';
import { motion } from 'framer-motion';

const Dsection1 = ({ infoCards = [] }) => {
    if (!infoCards || infoCards.length === 0) {
        return (
            <section id="about" className="derma-section">
                <div className="derma-container">
                    <h2 className="section-title">ما هي الديرما بن؟</h2>
                    <div className="text-center" style={{color: '#6b7280'}}>
                        لا توجد معلومات متاحة حالياً
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="about" className="derma-section">
            <div className="derma-container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    ما هي الديرما بن؟
                </motion.h2>
                <div className="cards-grid">
                    {infoCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className="derma-card"
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

export default Dsection1;

