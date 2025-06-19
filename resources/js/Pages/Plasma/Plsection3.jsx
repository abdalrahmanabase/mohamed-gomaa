import React from 'react';

const Plsection3 = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">كيف تتم جلسة العلاج؟</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-syringe text-2xl text-blue-600"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">سحب الدم</h3>
                                <p className="text-gray-600">سحب كمية صغيرة من دم المريض</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-flask text-2xl text-blue-600"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">معالجة الدم</h3>
                                <p className="text-gray-600">فصل البلازما الغنية بالصفائح الدموية</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-heartbeat text-2xl text-blue-600"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">حقن البلازما</h3>
                                <p className="text-gray-600">حقن البلازما في المنطقة المصابة</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-lg text-gray-700 mb-8">
                            تستغرق الجلسة عادة من 30 إلى 45 دقيقة، وتتم تحت إشراف طبي متخصص
                        </p>
                        <a href="/appointment" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                            احجز موعدك الآن
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plsection3;
