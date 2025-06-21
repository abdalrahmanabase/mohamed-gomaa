import React from 'react';
import { motion } from 'framer-motion';

const Ssection2 = () => {
    const services = [
        {
            icon: "🩺",
            title: "الحجامة العلاجية",
            description: "علاج طبيعي قديم يساعد في تنشيط الدورة الدموية وتخفيف الآلام"
        },
        {
            icon: "🐝",
            title: "لسع النحل",
            description: "علاج طبيعي يستخدم سم النحل لعلاج العديد من الأمراض والالتهابات"
        },
        {
            icon: "💪",
            title: "العلاج الطبيعي",
            description: "برامج علاجية متخصصة لاستعادة الحركة والقوة الطبيعية"
        },
        {
            icon: "🩸",
            title: "البلازما الغنية",
            description: "علاج متقدم يستخدم بلازما الدم الغنية بالصفائح الدموية"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        لماذا تختار خدماتنا؟
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        نتميز بخبرة سنوات طويلة في مجال الطب البديل مع فريق من المتخصصين المؤهلين
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ssection2; 