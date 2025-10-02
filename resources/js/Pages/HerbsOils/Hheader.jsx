import React from 'react';
import { motion } from 'framer-motion';

const Hheader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="herbs-header"
        >
            <div className="header-overlay"></div>
            <div className="header-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="header-title"
                >
                    الأعشاب والزيوت
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="header-subtitle "
                >
                    الأعشاب والزيوت الطبيعية هي علاجات طبية قديمة ومجربة تستخدم النباتات الطبية ومستخلصاتها لعلاج العديد من الأمراض والحالات الصحية. تشمل هذه العلاجات استخدام الأعشاب الطبية مثل الزنجبيل، الكركم، النعناع، والبابونج، بالإضافة إلى الزيوت العطرية المستخرجة من النباتات مثل زيت اللافندر، زيت شجرة الشاي، وزيت الورد. هذه العلاجات الطبيعية آمنة وفعالة، وتعمل على تعزيز الصحة العامة وتقوية جهاز المناعة دون آثار جانبية ضارة.
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Hheader;
