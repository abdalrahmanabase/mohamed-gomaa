import React from 'react';
import { motion } from 'framer-motion';

const Asection1 = ({ infoCards }) => {
    if (!infoCards || infoCards.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">No info cards available</p>
            </div>
        );
    }

    return (
        <section className="about-section">
            <div className="about-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">عن عيادتنا</h2>
                    <p className="section-description">
                        اكتشف التزامنا بالتميز في الرعاية الصحية و اهتمامنا بعملائنا.
                    </p>
                </motion.div>

                <div className="cards-grid">
                    {infoCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="about-card"
                        >
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
                            <div className="card-content">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Asection1;
