import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServiceArea = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });

    const areas = ['Satellite Beach', 'Indian Harbour Beach', 'Melbourne', 'Melbourne Beach', 'West Melbourne', 'Palm Bay'];

    return (
        <section id="area" className="section relative overflow-hidden">
            {/* Rich gradient background - Pasty Cream Green */}
            <div className="absolute inset-0" style={{ backgroundColor: '#f2f7f4' }} />

            {/* Subtle pattern */}
            <div className="absolute inset-0 pattern-waves" />

            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] blob-coastal opacity-50" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] blob-sage-strong opacity-35" />
            <div className="absolute top-1/2 right-0 w-[350px] h-[350px] blob-sage opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Header */}
                    <div
                        ref={headerRef}
                        className={`scroll-fade-up ${headerVisible ? 'visible' : ''}`}
                    >
                        <p className="section-label">Service Area</p>
                        <h2 className="mb-6">Serving Florida's Space Coast</h2>
                        <div className="divider mx-auto" />
                    </div>

                    {/* Interactive Google Map */}
                    <div
                        ref={contentRef}
                        className={`scroll-fade-up stagger-1 ${contentVisible ? 'visible' : ''}`}
                    >
                        <div className="mt-10 mb-10 rounded-2xl overflow-hidden shadow-xl shadow-sage/10 border border-sand/50">
                            <iframe
                                src="https://maps.google.com/maps?q=4003+Palladian+Way,+Melbourne,+FL+32904&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Service Area Map - Florida's Space Coast"
                                className="w-full"
                            />
                        </div>

                        {/* Location Badge */}
                        <div className="mb-10">
                            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-sage/15 shadow-lg shadow-sage/5 transition-all duration-500 hover:shadow-xl hover:shadow-sage/10 hover:-translate-y-0.5">
                                <div className="w-8 h-8 bg-gradient-to-br from-sage/20 to-coastal/10 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="font-medium text-charcoal">Melbourne, Florida</span>
                            </div>
                        </div>

                        {/* Coverage Description */}
                        <p className={`text-muted leading-relaxed mb-10 text-lg scroll-fade-up stagger-2 ${contentVisible ? 'visible' : ''}`}>
                            We proudly serve pet parents from <span className="font-medium text-charcoal">Satellite Beach</span> to <span className="font-medium text-charcoal">Palm Bay</span>, and everywhere in between along Florida's beautiful Space Coast.
                        </p>

                        {/* Areas List */}
                        <div className={`flex flex-wrap justify-center gap-3 mb-12 scroll-fade-up stagger-3 ${contentVisible ? 'visible' : ''}`}>
                            {areas.map((area, i) => (
                                <span
                                    key={area}
                                    className="px-5 py-2.5 bg-white/70 backdrop-blur-sm text-muted rounded-full text-sm font-medium border border-sand/60 hover:bg-white hover:text-charcoal hover:border-sage/20 hover:shadow-md transition-all duration-400 cursor-default"
                                    style={{ transitionDelay: `${i * 50}ms` }}
                                >
                                    {area}
                                </span>
                            ))}
                        </div>

                        {/* CTA for outside area */}
                        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-sand/60 shadow-xl shadow-charcoal/[0.03] scroll-scale stagger-4 ${contentVisible ? 'visible' : ''}`}>
                            <p className="text-charcoal font-medium mb-2">Not in our area?</p>
                            <p className="text-muted text-sm mb-5">
                                Reach out — we may still be able to help.
                            </p>
                            <a href="#book" className="group text-sage font-medium hover:text-sage-dark transition-colors inline-flex items-center gap-2 text-sm">
                                Get in touch
                                <svg className="w-4 h-4 transition-transform duration-400 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceArea;
