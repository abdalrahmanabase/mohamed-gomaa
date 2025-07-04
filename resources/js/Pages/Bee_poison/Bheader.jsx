import React from 'react';
import { motion } from 'framer-motion';

const Bheader = () => {
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
                        سم النحل
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl text-gray-200 mb-8 header-paragraph-limit"
                    >
                    سم النحل هو مادة طبيعية سائلة لاذعة تفرزها إناث النحل كوسيلة دفاعية. يتكون هذا السم من مزيج معقد من المركبات النشطة بيولوجيًا، أبرزها بروتين الميلتين وإنزيم الفوسفوليبيز A2، بالإضافة إلى الببتيدات الأخرى مثل الأبامين. يُعرف سم النحل بخصائصه المضادة للالتهابات والمسكنة للألم، ولهذا يُستخدم في الطب البديل (العلاج بالنحل) لعلاج حالات مثل التهاب المفاصل وبعض الأمراض العصبية. كما يدخل في تركيب بعض منتجات التجميل لفوائده المحتملة في تحفيز الكولاجين ومكافحة علامات الشيخوخة.
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default Bheader;
