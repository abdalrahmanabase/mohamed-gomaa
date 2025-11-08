import React from 'react';

const Dsection3 = () => {
    return (
        <section className="process-section">
            <div className="process-container">
                <h2 className="section-title">كيف تتم جلسة العلاج؟</h2>
                <div className="process-content">
                    <div className="process-card">
                        <div className="process-steps">
                            <div className="process-step">
                                <div className="step-icon">
                                    <i className="fas fa-stethoscope"></i>
                                </div>
                                <h3 className="step-title">الفحص والتشخيص</h3>
                                <p className="step-description">فحص شامل للجلد وتشخيص الحالة</p>
                            </div>
                            <div className="process-step">
                                <div className="step-icon">
                                    <i className="fas fa-prescription-bottle-alt"></i>
                                </div>
                                <h3 className="step-title">العلاج المناسب</h3>
                                <p className="step-description">اختيار العلاج المناسب للحالة</p>
                            </div>
                            <div className="process-step">
                                <div className="step-icon">
                                    <i className="fas fa-heartbeat"></i>
                                </div>
                                <h3 className="step-title">المتابعة</h3>
                                <p className="step-description">متابعة دورية لضمان نجاح العلاج</p>
                            </div>
                        </div>
                    </div>
                    <div className="process-info">
                        <p className="process-description">
                            تستغرق الجلسة عادة من 30 إلى 60 دقيقة، وتتم تحت إشراف طبي متخصص
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

export default Dsection3;

