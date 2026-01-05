const BookingCTA = () => {
    return (
        <section id="book" className="section bg-gradient-to-br from-sage/10 via-sand to-coastal/5">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Decorative Paw Prints */}
                    <div className="flex justify-center gap-4 mb-8 opacity-30">
                        <span className="text-3xl">🐾</span>
                        <span className="text-3xl">🐾</span>
                        <span className="text-3xl">🐾</span>
                    </div>

                    {/* Header */}
                    <h2 className="mb-6">Ready to Give Your Pet the Care They Deserve?</h2>
                    <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                        Let's start with a free meet & greet so we can get to know your furry family member.
                        It's the first step to stress-free pet care.
                    </p>

                    {/* CTA Button */}
                    <a href="mailto:hello@whiskersandwags.com" className="btn-primary text-lg px-8 py-4">
                        Book Your Meet & Greet
                    </a>

                    {/* Additional Info */}
                    <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5">
                            <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="font-medium text-charcoal text-sm">Flexible Scheduling</p>
                            <p className="text-muted text-xs mt-1">Calendar filling up fast</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5">
                            <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="font-medium text-charcoal text-sm">Last-Minute OK</p>
                            <p className="text-muted text-xs mt-1">We'll do our best to help</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5">
                            <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <p className="font-medium text-charcoal text-sm">Holiday Bookings</p>
                            <p className="text-muted text-xs mt-1">Plan ahead for peace of mind</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingCTA;
