import React from 'react';
import { motion } from 'framer-motion';

const Sheader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[60vh] bg-gradient-to-r from-green-600 to-green-800"
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        الفوطه ناريه
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl text-gray-200 mb-8 header-paragraph-limit"
                    >
الفوطة النارية هي تقنية علاجية تستخدم فيها فوطة مبللة بالماء الساخن وتُطبق على الجسم. تعمل على توسيع الأوعية الدموية، وتحسين الدورة الدموية، وتخفيف آلام العضلات. تُستخدم هذه الفوطة لفتح مسام البشرة،  وللاستجمام والاسترخاء العام. تُعد طريقة فعالة وبسيطة للعلاج الحراري الرطب.ولها دور فعال في التخلص من تيبس العضلات وتقضي بشكل نهائي علي الرطوبة التي تسبب ألم في العظام .                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default Sheader; 