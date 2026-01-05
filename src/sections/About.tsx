import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
    const { ref: sectionRef, isVisible } = useScrollAnimation();
    const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
    const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

    const values = [
        { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "Genuine Love", desc: "For every pet" },
        { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", title: "Home Setting", desc: "Comfort first" },
        { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Fully Insured", desc: "Peace of mind" },
        { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Personal Care", desc: "One-on-one attention" }
    ];

    return (
        <section id="about" className="section overflow-hidden relative" ref={sectionRef}>
            {/* Rich gradient background */}
            <div className="absolute inset-0 bg-section-elegant" />

            {/* Subtle pattern layer */}
            <div className="absolute inset-0 pattern-subtle-dots opacity-50" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] blob-sage-strong opacity-50" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] blob-coastal opacity-50" />
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] blob-blush opacity-40" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Image */}
                    <div
                        ref={imageRef}
                        className={`relative order-2 lg:order-1 scroll-slide-left ${imageVisible ? 'visible' : ''}`}
                    >
                        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-sage/20">
                            <img
                                src="/pam-owner.jpg"
                                alt="Pam with a happy poodle"
                                className="w-full h-full object-cover aspect-[4/5]"
                            />
                        </div>

                        {/* Floating accent card */}
                        <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl shadow-charcoal/5 border border-sand/50">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-sage/10 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-charcoal font-medium text-sm">Certified</p>
                                    <p className="text-muted text-xs">Pet Care Pro</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div
                        ref={contentRef}
                        className={`order-1 lg:order-2 scroll-slide-right ${contentVisible ? 'visible' : ''}`}
                    >
                        <p className="section-label">About Us</p>
                        <h2 className="mb-6">
                            Pets Deserve a Home,
                            <span className="block text-sage mt-1">Not a Cage</span>
                        </h2>
                        <div className="divider" />

                        <div className="space-y-5 text-muted leading-relaxed mt-8">
                            <p className="text-lg">
                                At Whiskers & Wags, we believe every pet deserves to feel at home — even when
                                they're away from theirs.
                            </p>
                            <p>
                                That's why we've created a cage-free, family-oriented environment where your
                                furry companions can relax, play, and be themselves. Whether they stay in our
                                cozy home or prefer the comfort of their own space with in-home visits, they'll
                                receive the same personal attention and genuine care.
                            </p>
                        </div>

                        {/* Values Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-12">
                            {values.map((item, i) => (
                                <div
                                    key={i}
                                    className={`group flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 transition-all duration-500 hover:bg-white hover:shadow-lg hover:shadow-sage/5 scroll-fade-up stagger-${i + 1} ${contentVisible ? 'visible' : ''}`}
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-sage/15 to-sage/5 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:from-sage/25 group-hover:to-sage/10 group-hover:scale-110">
                                        <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-charcoal text-sm mb-0.5">{item.title}</p>
                                        <p className="text-xs text-muted">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
