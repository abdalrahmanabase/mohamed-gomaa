import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Hstyle.css';

const Hsection3 = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('/api/reviews');
                setReviews(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching reviews:', err);
                setError('فشل في تحميل التقييمات');
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    if (loading) {
        return (
            <section className="testimonials-section">
                <div className="section-header">
                    <h2>آراء عملائنا</h2>
                    <p>لا تأخذ كلمتنا فقط</p>
                </div>
                <div className="testimonials-grid">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="testimonial-card animate-pulse">
                            <div className="testimonial-content">
                                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            </div>
                            <div className="testimonial-author">
                                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                                <div className="author-info">
                                    <div className="h-4 bg-gray-200 rounded mb-1"></div>
                                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="testimonials-section">
                <div className="section-header">
                    <h2>آراء عملائنا</h2>
                    <p>لا تأخذ كلمتنا فقط</p>
                </div>
                <div className="text-center text-gray-500 py-8">
                    {error}
                </div>
            </section>
        );
    }

    return (
        <section className="testimonials-section">
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    آراء عملائنا
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    لا تأخذ كلمتنا فقط
                </motion.p>
            </div>

            <div className="testimonials-grid">
                {reviews.map((review, index) => (
                    <motion.div
                        key={review.id}
                        className="testimonial-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="testimonial-content">
                            <p>{review.content}</p>
                        </div>
                        <div className="testimonial-author">
                            <img 
                                src={review.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=random`}
                                alt={review.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=random`;
                                }}
                            />
                            <div className="author-info">
                                <h4>{review.name}</h4>
                                <p>{review.position || 'مريض'}</p>
                                <div className="rating">
                                    {Array.from({ length: review.rating }, (_, i) => (
                                        <span key={i} className="text-yellow-400">⭐</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Hsection3;
