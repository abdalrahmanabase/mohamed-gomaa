import React from 'react';
import { motion } from 'framer-motion';

const Mheader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="meso-header"
        >
            <div className="header-overlay"></div>
            <div className="header-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="header-title"
                >
                    الميزوثيرابي
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="header-subtitle "
                >
                    الميزوثيرابي هو علاج طبي تجميلي متقدم يتم من خلال حقن جرعات صغيرة من المواد العلاجية مباشرة في الطبقة الوسطى من الجلد (الأدمة). يستخدم هذا العلاج لتحسين مظهر البشرة، وتقليل التجاعيد، وعلاج تساقط الشعر، وتنحيف الجسم. يتم حقن مزيج من الفيتامينات، والمعادن، والإنزيمات، والهرمونات، والمواد المضادة للأكسدة في المناطق المستهدفة. الميزوثيرابي آمن وفعال، ولا يتطلب فترة نقاهة طويلة، مما يجعله خياراً شائعاً للراغبين في تحسين مظهرهم دون اللجوء للجراحة.
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Mheader;
