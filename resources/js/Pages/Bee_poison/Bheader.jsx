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
سُمّ النحل مادة طبيعية يفرزها النحل عند اللسع، تحتوي على مركبات علاجية تُستخدم لتخفيف الألم والالتهابات وتنشيط المناعة.
ويُعد من أقدم وسائل الطب البديل التي أثبتت فعاليتها في تحسين صحة المفاصل والجسم عمومًا.       </motion.p>
            </div>
        </motion.div>
    );
};

export default Bheader;
