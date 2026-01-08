import VideoBackground from '../components/VideoBackground';

const Hero = () => {
    return (
        <VideoBackground className="min-h-screen flex items-center justify-center" overlayOpacity={0.6}>
            <div className="container mx-auto px-6 pt-20 pb-60">
                {/* Centered Content */}
                <div className="max-w-4xl mx-auto text-center">
                    {/* Trust Badge */}
                    <div
                        className="trust-badge mb-8 opacity-0 animate-hero-fade-up"
                        style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
                        <span>Licensed & Insured in Florida</span>
                    </div>

                    {/* Premium Headline */}
                    <h1
                        className="mb-6 opacity-0 animate-hero-fade-up leading-tight drop-shadow-xl text-5xl md:text-7xl tracking-tight font-light"
                        style={{ animationDelay: '0.4s', animationFillMode: 'forwards', color: '#FAF8F5' }}
                    >
                        Where Every Pet
                        <span className="block mt-2 font-medium italic tracking-normal" style={{ color: '#FAF8F5' }}>Becomes Family</span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        className="text-lg md:text-2xl mb-10 max-w-xl mx-auto leading-relaxed font-light opacity-0 animate-hero-fade-up drop-shadow-md"
                        style={{ animationDelay: '0.6s', animationFillMode: 'forwards', color: 'rgba(250, 248, 245, 0.9)' }}
                    >
                        Personal, loving care in a real home environment.
                        <span className="block mt-1 text-base md:text-lg opacity-90">Because your furry family deserves nothing less.</span>
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-wrap gap-5 justify-center mb-12 opacity-0 animate-hero-fade-up"
                        style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
                    >
                        <a
                            href="#book"
                            className="group bg-white text-charcoal px-8 py-4 rounded-full font-medium transition-all duration-500 ease-out hover:shadow-[0_20px_40px_-12px_rgba(255,255,255,0.3)] hover:-translate-y-1"
                        >
                            <span className="flex items-center gap-3">
                                Book a Meet & Greet
                                <svg
                                    className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </a>
                        <a
                            href="#services"
                            className="group border border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all duration-500 ease-out hover:bg-white/10 hover:border-white/50"
                        >
                            Explore Services
                        </a>
                    </div>

                    {/* Quick Stats - Ultra Minimal */}
                    <div
                        className="opacity-0 animate-hero-fade-up"
                        style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
                    >
                        <div className="inline-flex items-center gap-12 md:gap-16">
                            <div className="text-center group cursor-default">
                                <p className="text-3xl md:text-4xl font-light text-white mb-1 tracking-tight transition-transform duration-500 group-hover:scale-105">100+</p>
                                <p className="text-[11px] text-white/50 font-medium tracking-[0.2em] uppercase">Happy Pets</p>
                            </div>
                            <div className="w-px h-10 bg-white/20" />
                            <div className="text-center group cursor-default">
                                <p className="text-3xl md:text-4xl font-light text-white mb-1 tracking-tight transition-transform duration-500 group-hover:scale-105">5.0</p>
                                <p className="text-[11px] text-white/50 font-medium tracking-[0.2em] uppercase">Rating</p>
                            </div>
                            <div className="w-px h-10 bg-white/20" />
                            <div className="text-center group cursor-default">
                                <p className="text-3xl md:text-4xl font-light text-white mb-1 tracking-tight transition-transform duration-500 group-hover:scale-105">24/7</p>
                                <p className="text-[11px] text-white/50 font-medium tracking-[0.2em] uppercase">Care</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </VideoBackground>
    );
};

export default Hero;
