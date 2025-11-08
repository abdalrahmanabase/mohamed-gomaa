import React from 'react';
import { Link } from '@inertiajs/react';
import './Navfoot.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Main Footer Content */}
                <div className="footer-content">
                    {/* Contact Information */}
                    <div className="footer-section">
                        <h3 className="footer-title">تواصل معنا</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <a href="tel:+201013739037" className="contact-link">
                                    <i className="fas fa-phone"></i>
                                    <span>01013739037</span>
                                </a>
                                <a href="tel:+201013739037" className="contact-link">
                                    <i className="fas fa-phone"></i>
                                    <span>01114420094</span>
                                </a>
                            </div>
                            {/* <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>info@medicalcenter.com</span>
                            </div> */}
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>الاسكندرية. جمهورية مصر العربية</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3 className="footer-title">روابط سريعة</h3>
                        <ul className="footer-links">
                            <li>
                                <Link href="/" className="nav-link">الرئيسية</Link>
                            </li>
                            <li>
                                <Link href="/about" className="nav-link">من نحن</Link>
                            </li>
                            <li>
                                <Link href="/Cupping" className="nav-link">الحجامة</Link>
                            </li>
                            <li>
                                <Link href="/services" className="nav-link">فوطه ناريه</Link>
                            </li>
                            <li>
                                <Link href="/Bee_poison" className="nav-link">سم النحل</Link>
                            </li>
                            <li>
                                <Link href="/mesotherapy" className="nav-link">الميزوثيرابي</Link>
                            </li>
                            <li>
                                <Link href="/herbs-oils" className="nav-link">الأعشاب والزيوت</Link>
                            </li>
                            <li>
                                <Link href="/Physical_therapy" className="nav-link">العلاج الطبيعي</Link>
                            </li>
                            <li>
                                <Link href="/Plasma" className="nav-link">البلازما</Link>
                            </li>
                            <li>
                                <Link href="/derma" className="nav-link">الديرما بن</Link>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/201013739037"
                                    className="nav-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    حجز زيارة منزلية
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Working Hours */}
                    <div className="footer-section">
                        <h3 className="footer-title">ساعات العمل</h3>
                        <ul className="working-hours">
                            <li>
                                <span>السبت - الخميس:</span>
                                <span>12:00 صباحاً - 12:00 مساءً</span>
                            </li>
                            <li>
                                <span>الجمعة:</span>
                                <span>2:00 بعد الظهر - 8:00 مساءً</span>
                            </li>
                            <li>
                                <span></span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="social-links">
                    <a href="https://www.facebook.com/share/19FYnSEW46" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                        <i className="fab fa-facebook"></i>
                    </a>
                    {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a> */}
                    {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a> */}
                    <a href="https://wa.me/201013739037" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p className="copyright">
                        © {new Date().getFullYear()} المركز الطبي. جميع الحقوق محفوظة
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
