import React from 'react';
import { motion } from 'framer-motion';
import './Hstyle.css';

const Hsection1 = () => {
    const stats = [
        { number: '10+', label: 'سنوات الخبرة' },
        { number: '500+', label: 'مشروع مكتمل' },
        { number: '100+', label: 'أعضاء الفريق' },
        { number: '50+', label: 'جائزة' }
    ];

    return (
        <section className="about-section">
            <div className="about-container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="about-content"
                >
                    <h2>من نحن</h2>
                    <p>
                        نحن شركة رائدة مكرسة لتقديم حلول مبتكرة للشركات في جميع أنحاء العالم.
                        يعمل فريقنا من الخبراء بلا كلل لتقديم نتائج استثنائية وتجاوز توقعات العملاء.
                    </p>
                    <p>
                        مع سنوات من الخبرة في هذا المجال، اكتسبنا سمعة في التميز والموثوقية.
                        التزامنا بالجودة ورضا العملاء يميزنا عن المنافسة.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="stats-grid"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3>{stat.number}</h3>
                            <p>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hsection1;
