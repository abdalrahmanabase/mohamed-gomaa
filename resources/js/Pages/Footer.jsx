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
                                <i className="fas fa-phone"></i>
                                <span>+966 12 345 6789</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>info@medicalcenter.com</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>الرياض، المملكة العربية السعودية</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3 className="footer-title">روابط سريعة</h3>
                        <ul className="footer-links">
                            <li>
                                <Link href="/">الرئيسية</Link>
                            </li>
                            <li>
                                <Link href="/about">من نحن</Link>
                            </li>
                            <li>
                                <Link href="/Cupping">الحجامة</Link>
                            </li>
                            <li>
                                <Link href="/services">فوطه ناريه</Link>
                            </li>
                            <li>
                                <Link href="/Bee_poison">لسع النحل</Link>
                            </li>
                            <li>
                                <Link href="/Physical_therapy">العلاج الطبيعي</Link>
                            </li>
                            <li>
                                <Link href="/Plasma">البلازما</Link>
                            </li>
                            <li>
                                <Link href="/">حجز موعد</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Working Hours */}
                    <div className="footer-section">
                        <h3 className="footer-title">ساعات العمل</h3>
                        <ul className="working-hours">
                            <li>
                                <span>السبت - الخميس:</span>
                                <span>9:00 صباحاً - 9:00 مساءً</span>
                            </li>
                            <li>
                                <span>الجمعة:</span>
                                <span>10:00 صباحاً - 6:00 مساءً</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/966123456789" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
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
