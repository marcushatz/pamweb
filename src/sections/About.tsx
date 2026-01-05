const About = () => {
    return (
        <section id="about" className="section bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <div className="aspect-square bg-gradient-to-br from-sand to-sand-light flex items-center justify-center">
                                <div className="text-center p-8">
                                    <span className="text-8xl mb-4 block">🏠</span>
                                    <p className="text-muted text-sm">A real home, not a kennel</p>
                                </div>
                            </div>
                        </div>
                        {/* Accent */}
                        <div className="absolute -z-10 top-8 -left-4 w-24 h-24 bg-sage/20 rounded-full blur-2xl" />
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <p className="text-sage font-medium mb-3 tracking-wide uppercase text-sm">About Us</p>
                        <h2 className="mb-6">
                            Pets Deserve a Home,
                            <span className="block text-sage">Not a Cage</span>
                        </h2>
                        <div className="divider" />

                        <div className="space-y-5 text-muted leading-relaxed">
                            <p>
                                At Whiskers & Wags, we believe every pet deserves to feel at home — even when
                                they're away from theirs. That's why we've created a cage-free, family-oriented
                                environment where your furry companions can relax, play, and be themselves.
                            </p>
                            <p>
                                Whether your pet stays in our cozy home or prefers the comfort of their own
                                space with in-home visits, they'll receive the same personal attention, genuine
                                affection, and loving care that you would give them yourself.
                            </p>
                            <p>
                                This isn't just a service — it's a promise. Your pets become part of our family
                                from the moment they walk through the door.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="grid grid-cols-2 gap-6 mt-10">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-charcoal">Genuine Love</p>
                                    <p className="text-sm text-muted">For every pet we care for</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-charcoal">Home Environment</p>
                                    <p className="text-sm text-muted">Comfort & familiarity</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-charcoal">Fully Insured</p>
                                    <p className="text-sm text-muted">Peace of mind for you</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-charcoal">Personal Attention</p>
                                    <p className="text-sm text-muted">One-on-one care always</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
