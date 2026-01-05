const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal text-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">🐾</span>
                            <span className="font-semibold text-xl tracking-tight">
                                Whiskers & Wags
                            </span>
                        </div>
                        <p className="text-muted-light text-sm leading-relaxed">
                            Pet Services, LLC<br />
                            Licensed • Certified • Insured
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
                        <div className="space-y-3 text-muted-light text-sm">
                            <p>Melbourne, Florida</p>
                            <p>Serving Satellite Beach to Palm Bay</p>
                            <a
                                href="mailto:hello@whiskersandwags.com"
                                className="hover:text-sage-light transition-colors block"
                            >
                                hello@whiskersandwags.com
                            </a>
                        </div>
                    </div>

                    {/* Social & Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Connect</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com/WhiskersAndWagsPetServicesLLC"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-charcoal-light rounded-full flex items-center justify-center hover:bg-sage transition-colors"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-charcoal-light pt-8 text-center">
                    <p className="text-muted-light text-sm">
                        © {currentYear} Whiskers & Wags Pet Services, LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
