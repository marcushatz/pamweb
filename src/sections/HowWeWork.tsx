import VideoBackground from '../components/VideoBackground';

const HowWeWork = () => {
    const steps = [
        {
            number: '01',
            title: 'Schedule a Meet & Greet',
            description: 'Get in touch and we\'ll set up a time to meet you and your pet. It\'s the perfect way for us to get acquainted and for you to see how much we care.',
        },
        {
            number: '02',
            title: 'Tell Us About Your Pet',
            description: 'Share your pet\'s personality, routines, and any special needs. The more we know, the better care we can provide while you\'re away.',
        },
        {
            number: '03',
            title: 'Relax & Enjoy Peace of Mind',
            description: 'Whether it\'s boarding, a drop-in visit, or a walk — your pet is in loving hands. We\'ll keep you updated so you can focus on your day.',
        },
    ];

    return (
        <VideoBackground className="py-24 md:py-32" overlayOpacity={0.55}>
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sage-light font-medium mb-3 tracking-wide uppercase text-sm">
                        Getting Started
                    </p>
                    <h2 className="text-white mb-4">How We Work</h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Simple, stress-free pet care in three easy steps
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            {/* Step Number */}
                            <span className="text-7xl md:text-8xl font-bold text-white/10 absolute -top-6 -left-2 select-none">
                                {step.number}
                            </span>

                            {/* Content */}
                            <div className="relative pt-8">
                                <h3 className="text-xl font-semibold text-white mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-white/70 leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Arrow to next step (except last) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2 text-white/20">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a
                        href="#book"
                        className="inline-flex items-center gap-2 bg-white text-charcoal font-medium px-8 py-4 rounded-lg hover:bg-sage hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Get Started Today
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </VideoBackground>
    );
};

export default HowWeWork;
