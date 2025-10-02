import React from 'react';
import { motion } from 'framer-motion';

const Pheader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="physical-header"
        >
            <div className="header-overlay"></div>
            <div className="header-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="header-title"
                >
                    العلاج الطبيعي
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="header-subtitle "
                >
العلاج الطبيعي هو مهنة صحية تعنى بتحسين جودة حياة الأفراد من خلال الوقاية، التقييم، التشخيص، والعلاج للإعاقات الجسدية. يستخدم أساليب علاجية متنوعة مثل التمارين العلاجية، العلاج اليدوي، والعلاج بالوسائل الفيزيائية لمساعدة المرضى على استعادة وظائفهم الحركية، تخفيف الألم، وزيادة القدرة على الحركة، مما يمكنهم من العودة إلى أنشطتهم اليومية بشكل مستقل وفعال.                    </motion.p>
            </div>
        </motion.div>
    );
};

export default Pheader;
