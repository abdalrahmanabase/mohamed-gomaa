import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import './Navfoot.css';
import { router } from '@inertiajs/react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navbarRef = useRef(null);

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

    // Close menu on click outside (mobile only)
    useEffect(() => {
        if (!isMenuOpen) return;
        const handleClickOutside = (event) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target) &&
                window.innerWidth <= 768
            ) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav ref={navbarRef} className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link href="/" className="logo">
                    <img src="/ChatGPT_Image_Jun_20__2025__10_00_27_PM-removebg-preview.png" alt="Logo" />
                    <span>مركز ابن القيم للحجامة والطب البديل</span>
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
                        <Link href="/services" className="nav-link">فوطه ناريه</Link>
                    </li>
                    <li>
                        <Link href="/Bee_poison" className="nav-link">سم النحل</Link>
                    </li>
                    <li>
                        <Link href="/Physical_therapy" className="nav-link">العلاج الطبيعي</Link>
                    </li>
                    <li>
                        <Link href="/Plasma" className="nav-link">البلازما</Link>
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
        </nav>
    );
};

export default Navbar;
