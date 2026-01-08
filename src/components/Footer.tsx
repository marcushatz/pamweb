import { HatwebsWatermark } from './HatwebsWatermark';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[var(--color-charcoal)] text-[var(--color-cream)] py-20 overflow-hidden font-light">
            {/* Subtle decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-sage)]/30 to-transparent z-0" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-radial-gradient from-[var(--color-sage)]/10 to-transparent opacity-50 z-0" />
            <div className="container mx-auto px-6 relative z-20">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4.5 9.5C4.5 8.12 5.62 7 7 7s2.5 1.12 2.5 2.5S8.38 12 7 12s-2.5-1.12-2.5-2.5zm9 0c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5zM12 18c-2.76 0-5-2.24-5-5h10c0 2.76-2.24 5-5 5z" />
                                </svg>
                            </div>
                            <span className="font-medium text-lg tracking-tight">
                                Whiskers & Wags
                            </span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Pet Services, LLC<br />
                            Licensed & Insured in Florida
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-medium mb-5 text-xs tracking-wide text-white/70" style={{ position: 'relative', zIndex: 50 }}>Contact</h4>
                        <div className="space-y-3 text-white/70 text-sm font-normal">
                            <p>Melbourne, Florida</p>
                            <a
                                href="tel:302-943-0873"
                                className="hover:text-white transition-colors duration-300 block"
                            >
                                302-943-0873
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-medium mb-5 text-xs tracking-wide text-white/70" style={{ position: 'relative', zIndex: 50 }}>Connect</h4>
                        <a
                            href="https://www.facebook.com/profile.php?id=100095399083409"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            aria-label="Facebook"
                        >
                            <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-white/40 text-xs tracking-wide">
                            &copy; {currentYear} Whiskers & Wags Pet Services, LLC. All rights reserved.
                        </p>

                        <div className="flex gap-8">
                            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors duration-300">
                                Terms of Service
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <HatwebsWatermark />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
