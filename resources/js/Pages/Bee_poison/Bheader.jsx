import React from 'react';
import { motion } from 'framer-motion';

const Bheader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bee-header"
        >
            <div className="header-overlay"></div>
            <div className="header-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="header-title"
                >
                    سم النحل
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="header-subtitle "
                >
                    سم النحل هو مادة طبيعية سائلة لاذعة تفرزها إناث النحل كوسيلة دفاعية. يتكون هذا السم من مزيج معقد من المركبات النشطة بيولوجيًا، أبرزها بروتين الميلتين وإنزيم الفوسفوليبيز A2، بالإضافة إلى الببتيدات الأخرى مثل الأبامين. يُعرف سم النحل بخصائصه المضادة للالتهابات والمسكنة للألم، ولهذا يُستخدم في الطب البديل (العلاج بالنحل) لعلاج حالات مثل التهاب المفاصل وبعض الأمراض العصبية. كما يدخل في تركيب بعض منتجات التجميل لفوائده المحتملة في تحفيز الكولاجين ومكافحة علامات الشيخوخة.
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Bheader;
