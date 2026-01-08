import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BookingCTA = () => {
    const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
    const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ threshold: 0.3 });

    const features = [
        { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", title: "Flexible Scheduling", desc: "Book when it works for you" },
        { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Last-Minute OK", desc: "We'll do our best to help" },
        { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", title: "Holiday Bookings", desc: "Plan ahead for peace of mind" }
    ];

    return (
        <section id="book" className="relative z-0 py-24 md:py-32 overflow-hidden">
            {/* Background Image - Absolute & Static (Mobile) */}
            <div
                className="absolute inset-0 -z-20 w-full h-full bg-fixed bg-center bg-no-repeat md:hidden"
                style={{
                    backgroundImage: "url('/dog1.png')",
                    backgroundSize: 'auto 200%'
                }}
            />

            {/* Background Image - Absolute & Zoomed (Desktop) */}
            <div className="hidden md:block absolute inset-0 -z-20 w-full h-full">
                <img
                    src="/dog1.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                    style={{ transform: 'scale(1.25)' }}
                />
            </div>

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/40 -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div
                    ref={contentRef}
                    className={`max-w-4xl mx-auto text-center scroll-fade-up ${contentVisible ? 'visible' : ''}`}
                >
                    {/* Header */}
                    <h2 className="mb-6 drop-shadow-xl text-5xl md:text-7xl tracking-tight font-light leading-tight" style={{ color: '#FAF8F5' }}>
                        Ready to Give Your Pet
                        <span className="block mt-2 font-medium italic tracking-normal" style={{ color: '#FAF8F5' }}>the Care They Deserve?</span>
                    </h2>
                    <p className="leading-relaxed mb-12 max-w-lg mx-auto text-lg md:text-2xl font-light drop-shadow-md" style={{ color: 'rgba(250, 248, 245, 0.9)' }}>
                        Let's start with a free meet & greet so we can get to know your furry family member.
                    </p>

                    {/* CTA Button */}
                    <a
                        href="mailto:hello@whiskersandwags.com"
                        className="group inline-flex items-center gap-3 bg-white text-charcoal px-10 py-5 rounded-full font-medium transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(255,255,255,0.3)] hover:-translate-y-1"
                    >
                        Book Your Meet & Greet
                        <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                {/* Features */}
                <div
                    ref={featuresRef}
                    className="mt-20 grid sm:grid-cols-3 gap-5 max-w-2xl mx-auto"
                >
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`group bg-cream/80 backdrop-blur-sm rounded-2xl p-6 border border-white/60 hover:border-sage/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] scroll-fade-up stagger-${i + 1} ${featuresVisible ? 'visible' : ''}`}
                        >
                            <div className="w-11 h-11 bg-sage/6 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:bg-sage/12 group-hover:scale-110">
                                <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d={feature.icon} />
                                </svg>
                            </div>
                            <p className="font-medium text-charcoal text-sm mb-1">{feature.title}</p>
                            <p className="text-muted text-xs">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookingCTA;
