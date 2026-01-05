const ServiceArea = () => {
    return (
        <section id="area" className="section bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Header */}
                    <p className="text-sage font-medium mb-3 tracking-wide uppercase text-sm">Service Area</p>
                    <h2 className="mb-6">Serving Florida's Space Coast</h2>
                    <div className="divider mx-auto" />

                    {/* Location Info */}
                    <div className="mt-10 mb-10">
                        <div className="inline-flex items-center gap-3 bg-sand/50 rounded-full px-6 py-3">
                            <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-medium text-charcoal">Melbourne, Florida</span>
                        </div>
                    </div>

                    {/* Coverage Description */}
                    <p className="text-muted text-lg leading-relaxed mb-8">
                        We proudly serve pet parents from <span className="font-medium text-charcoal">Satellite Beach</span> down
                        to <span className="font-medium text-charcoal">Palm Bay</span>, and everywhere in between along
                        Florida's beautiful Space Coast.
                    </p>

                    {/* Areas List */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {['Satellite Beach', 'Indian Harbour Beach', 'Melbourne', 'Melbourne Beach', 'West Melbourne', 'Palm Bay'].map((area) => (
                            <span
                                key={area}
                                className="px-4 py-2 bg-sage/5 text-muted rounded-full text-sm font-medium hover:bg-sage/10 transition-colors"
                            >
                                {area}
                            </span>
                        ))}
                    </div>

                    {/* CTA for outside area */}
                    <div className="bg-sand/30 rounded-2xl p-8 max-w-xl mx-auto">
                        <p className="text-charcoal font-medium mb-2">Not in our area?</p>
                        <p className="text-muted text-sm mb-4">
                            We may still be able to help! Reach out and let's chat about your needs.
                        </p>
                        <a href="#book" className="text-sage font-medium hover:text-sage-dark transition-colors inline-flex items-center gap-2">
                            Get in touch
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceArea;
