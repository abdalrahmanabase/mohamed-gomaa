import React from 'react';
import { motion } from 'framer-motion';
import './Hstyle.css';

const Hsection1 = () => {
    const stats = [
        { number: '10+', label: 'سنوات الخبرة' },
        { number: '2500+', label: 'عميل ' },
        { number: '20+', label: 'خدمه طبيه' },
        { number: '50+', label: 'جائزة' }
    ];

    return (
        <section className="about-section">
            <div className="about-container-home">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="about-content"
                >
                    <h2>من نحن</h2>
                    <p>
                    من نحن
نحن مركز متخصص في العلاج الطبيعي والحجامة، نسعى لتقديم رعاية صحية متكاملة تساعد مرضانا على استعادة عافيتهم وتحسين جودة حياتهم.
 </p>
                    <p>
                    يضم فريقنا نخبة من الأخصائيين ذوي الخبرة، نستخدم أحدث الأساليب الطبية والطرق العلاجية الطبيعية، مع الحرص على متابعة كل حالة بعناية خاصة.
نؤمن أن الصحة هي سر الراحة والسعادة، لذلك نضع راحة عملائنا في مقدمة أولوياتنا، ونعمل على توفير بيئة علاجية آمنة، مريحة، وفعّالة.
                   
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
