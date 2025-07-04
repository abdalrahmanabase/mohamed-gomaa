import React from 'react';
import { motion } from 'framer-motion';

const Plheader = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-800"
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
                    البلازما
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl text-gray-200 mb-8 header-paragraph-limit"
                >
"البلازما الغنية بالصفائح الدموية". هو علاج طبي يستخدم دم المريض نفسه، حيث يتم سحب كمية صغيرة من الدم ثم معالجتها لفصل البلازما الغنية بالصفائح الدموية. هذه البلازما تحتوي على عوامل نمو طبيعية تساعد في تسريع عملية الشفاء وتجديد الأنسجة. وتستخدم البلازما في مجالات متعددة مثل جراحة العظام، الطب الرياضي، الأمراض الجلدية، وتجميل الشعر والبشرة.                        </motion.p>
            </div>
        </div>
    </motion.div>
    );
};

export default Plheader;
