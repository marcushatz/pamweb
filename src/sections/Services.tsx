interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    details: string[];
}

const ServiceCard = ({ icon, title, description, details }: ServiceCardProps) => (
    <div className="card group">
        <div className="w-14 h-14 bg-sage/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-sage/20 transition-colors">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-charcoal mb-3">{title}</h3>
        <p className="text-muted mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-2">
            {details.map((detail, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted">
                    <svg className="w-4 h-4 text-sage shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {detail}
                </li>
            ))}
        </ul>
    </div>
);

const Services = () => {
    const services = [
        {
            icon: (
                <svg className="w-7 h-7 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            title: 'Cage-Free Boarding',
            description: 'Your dog stays in a real home, not a kennel. Personal attention in a family environment.',
            details: ['Family home environment', 'Personal attention & love', 'Plenty of playtime'],
        },
        {
            icon: (
                <svg className="w-7 h-7 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            ),
            title: 'In-Home Overnight Stays',
            description: 'Perfect for elderly pets, those with medical needs, or pets who prefer their own space.',
            details: ['12-hour overnight shifts', 'Mid-day visit included', 'Medication administration'],
        },
        {
            icon: (
                <svg className="w-7 h-7 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Drop-In Visits',
            description: 'Regular check-ins for dogs or cats who need attention while you\'re away.',
            details: ['30 or 60 minute visits', 'Feeding & fresh water', 'Walks & playtime', 'Medication if needed'],
        },
        {
            icon: (
                <svg className="w-7 h-7 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            title: 'Dog Walks',
            description: 'One-on-one walks only — no pack walks. Your dog gets undivided attention.',
            details: ['30 or 60 minute sessions', 'One-on-one attention', 'Tailored to your dog\'s pace'],
        },
    ];

    return (
        <section id="services" className="section bg-cream">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sage font-medium mb-3 tracking-wide uppercase text-sm">Our Services</p>
                    <h2 className="mb-6">Thoughtful Care for Every Need</h2>
                    <div className="divider mx-auto" />
                    <p className="text-muted mt-6">
                        Every pet is unique, and their care should be too. Choose the service that
                        fits your pet's personality and needs.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
