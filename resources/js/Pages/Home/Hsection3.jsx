import React from 'react';
import { motion } from 'framer-motion';
import './Hstyle.css';

const Hsection3 = () => {
    const testimonials = [
        {
            id: 1,
            name: 'أحمد محمد',
            position: 'الرئيس التنفيذي، شركة التقنية',
            content: 'العمل مع هذا الفريق كان تجربة رائعة. ساعدت خبرتهم وتفانيهم في تحقيق نتائج متميزة.',
            image: 'https://ui-avatars.com/api/?name=أحمد+محمد&background=random'
        },
        {
            id: 2,
            name: 'سارة أحمد',
            position: 'مديرة التسويق',
            content: 'مستوى الاحترافية والاهتمام بالتفاصيل متميز. إنهم يتجاوزون توقعاتنا باستمرار.',
            image: 'https://ui-avatars.com/api/?name=سارة+أحمد&background=random'
        },
        {
            id: 3,
            name: 'محمد علي',
            position: 'مدير المشاريع',
            content: 'نهجهم المبتكر وخبرتهم التقنية كانت أساسية في نجاحنا. أنصح بهم بشدة!',
            image: 'https://ui-avatars.com/api/?name=محمد+علي&background=random'
        }
    ];

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
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.id}
                        className="testimonial-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="testimonial-content">
                            <p>{testimonial.content}</p>
                        </div>
                        <div className="testimonial-author">
                            <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://ui-avatars.com/api/?name=User&background=random';
                                }}
                            />
                            <div className="author-info">
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.position}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Hsection3;
