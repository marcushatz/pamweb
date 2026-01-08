import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#services', label: 'Services' },
        { href: '#book', label: 'Book Your Meet & Greet' },
        { href: '#about', label: 'About' },
        { href: '#area', label: 'Area' },
        { href: '#testimonials', label: 'Reviews' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${isScrolled
                ? 'bg-cream/95 backdrop-blur-xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] py-4'
                : 'bg-transparent py-7'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className={`flex items-center gap-3 transition-all duration-500 ${isScrolled ? 'text-charcoal' : 'text-white'
                        }`}
                >

                    <span className="font-medium text-lg tracking-tight">
                        Whiskers & Wags
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-400 ${isScrolled
                                ? 'text-muted hover:text-charcoal hover:bg-sand/60'
                                : 'text-white/80 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#book"
                        className={`ml-3 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ${isScrolled
                            ? 'bg-charcoal text-white hover:bg-charcoal-light shadow-sm hover:shadow-md hover:-translate-y-0.5'
                            : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40'
                            }`}
                    >
                        Book Now
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`md:hidden p-3 rounded-xl transition-all duration-300 ${isScrolled
                        ? 'text-charcoal hover:bg-sand/50'
                        : 'text-white hover:bg-white/10'
                        }`}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d={isMobileMenuOpen
                                ? "M6 18L18 6M6 6l12 12"
                                : "M4 6h16M4 12h16M4 18h16"
                            }
                            className="transition-all duration-300"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-white/98 backdrop-blur-xl border-t border-sand/30 mt-2">
                    <div className="container mx-auto px-6 py-5 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-muted hover:text-charcoal hover:bg-sand/30 transition-all duration-300 text-sm font-medium py-3.5 px-5 rounded-xl"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#book"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-3 text-center bg-charcoal text-white hover:bg-charcoal-light transition-all duration-300 text-sm font-medium py-3.5 px-5 rounded-xl"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
