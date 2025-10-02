import React from 'react';

const Plsection3 = () => {
    return (
        <section className="process-section">
            <div className="process-container">
                <h2 className="section-title">كيف تتم جلسة العلاج؟</h2>
                <div className="process-content">
                    <div className="process-card">
                        <div className="process-steps">
                            <div className="process-step">
                                <div className="step-icon">
                                    <i className="fas fa-syringe"></i>
                                </div>
                                <h3 className="step-title">سحب الدم</h3>
                                <p className="step-description">سحب كمية صغيرة من دم المريض</p>
                            </div>
                            <div className="process-step">
                                <div className="step-icon">
                                    <i className="fas fa-flask"></i>
                                </div>
                                <h3 className="step-title">معالجة الدم</h3>
                                <p className="step-description">فصل البلازما الغنية بالصفائح الدموية</p>
                            </div>
                            <div className="process-step">
                                <div className="step-icon">
                                    <i className="fas fa-heartbeat"></i>
                                </div>
                                <h3 className="step-title">حقن البلازما</h3>
                                <p className="step-description">حقن البلازما في المنطقة المصابة</p>
                            </div>
                        </div>
                    </div>
                    <div className="process-info">
                        <p className="process-description">
                            تستغرق الجلسة عادة من 30 إلى 45 دقيقة، وتتم تحت إشراف طبي متخصص
                        </p>
                        <a href="https://wa.me/201013739037" className="appointment-button">
                            احجز موعدك الآن
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plsection3;
