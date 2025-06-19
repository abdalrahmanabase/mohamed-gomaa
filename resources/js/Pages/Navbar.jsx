import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import './Navfoot.css';
import { router } from '@inertiajs/react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
    router.on('navigate', () => {
        setIsMenuOpen(false);
    });
}, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link href="/" className="logo">
                    <img src="/images/logo.png" alt="Logo" />
                    <span>المركز الطبي</span>
                </Link>

                <button className="mobile-menu-button" onClick={toggleMenu}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
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
                        <Link href="/Bee_poison" className="nav-link">لسع النحل</Link>
                    </li>
                    <li>
                        <Link href="/Physical_therapy" className="nav-link">العلاج الطبيعي</Link>
                    </li>
                    <li>
                        <Link href="/Plasma" className="nav-link">البلازما</Link>
                    </li>
                    <li>
                        <Link href="/" className="nav-link">حجز موعد</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
