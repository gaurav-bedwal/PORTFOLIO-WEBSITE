import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Intersection Observer for active section highlighting
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Adjust margin to trigger when section is in the upper part of viewport
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Offset for fixed navbar
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: id === 'home' ? 0 : offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    const links = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Experience', id: 'experience' },
        { name: 'Certifications', id: 'certifications' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled ? 'pt-4' : 'pt-6'}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className={`glass mx-auto rounded-full flex items-center justify-between px-6 transition-all duration-500 ${scrolled ? 'h-16 shadow-[0_8px_32px_rgba(0,240,255,0.05)] border-brand-500/20' : 'h-20'}`}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0 font-display font-black text-2xl tracking-tighter cursor-pointer"
                        onClick={(e) => scrollToSection(e, 'home')}
                    >
                        <span className="text-white">G</span>
                        <span className="text-brand-500">B</span>
                        <span className="text-accent-500">.</span>
                    </motion.div>

                    <div className="hidden md:flex items-center space-x-1">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.id}`}
                                onClick={(e) => scrollToSection(e, link.id)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative group overflow-hidden ${activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {activeSection === link.id && (
                                    <motion.div
                                        layoutId="nav_indicator"
                                        className="absolute inset-0 bg-white/10 rounded-full z-0 border border-white/10"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="md:hidden absolute top-24 left-4 right-4 glass-card rounded-3xl overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-2">
                            {links.map((link, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    key={link.name}
                                >
                                    <a
                                        href={`#${link.id}`}
                                        onClick={(e) => scrollToSection(e, link.id)}
                                        className={`block px-4 py-3 rounded-2xl text-lg font-medium transition-all ${activeSection === link.id
                                            ? 'bg-gradient-to-r from-brand-500/20 to-accent-500/20 text-white border border-brand-500/30'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
