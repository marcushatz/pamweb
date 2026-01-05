import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    details: string[];
    index: number;
    isVisible: boolean;
}

const ServiceCard = ({ icon, title, description, details, index, isVisible }: ServiceCardProps) => (
    <div
        className={`group bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-sand/50 shadow-lg shadow-charcoal/[0.02] hover:shadow-2xl hover:shadow-sage/10 transition-all duration-700 hover:-translate-y-2 scroll-fade-up stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
    >
        <div className="w-14 h-14 bg-gradient-to-br from-sage/15 to-coastal/10 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:from-sage/25 group-hover:to-coastal/15 group-hover:scale-110 group-hover:rotate-3">
            <svg className="w-7 h-7 text-sage transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d={icon} />
            </svg>
        </div>
        <h3 className="text-lg font-medium text-charcoal mb-3">{title}</h3>
        <p className="text-muted text-sm mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3">
            {details.map((detail, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted group/item">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-sage/12 to-sage/5 flex items-center justify-center shrink-0 transition-all duration-300 group-hover/item:from-sage/20 group-hover/item:to-sage/10">
                        <svg className="w-3 h-3 text-sage" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <span className="transition-colors duration-300 group-hover/item:text-charcoal">{detail}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Services = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

    const services = [
        {
            icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
            title: 'Cage-Free Boarding',
            description: 'Your dog stays in a real home, not a kennel. Personal attention in a family environment.',
            details: ['Family home environment', 'Personal attention & love', 'Plenty of playtime'],
        },
        {
            icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
            title: 'In-Home Overnight Stays',
            description: 'Perfect for elderly pets, those with medical needs, or pets who prefer their own space.',
            details: ['12-hour overnight shifts', 'Mid-day visit included', 'Medication administration'],
        },
        {
            icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
            title: 'Drop-In Visits',
            description: 'Regular check-ins for dogs or cats who need attention while you\'re away.',
            details: ['30 or 60 minute visits', 'Feeding & fresh water', 'Walks & playtime'],
        },
        {
            icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
            title: 'Dog Walks',
            description: 'One-on-one walks only — no pack walks. Your dog gets undivided attention.',
            details: ['30 or 60 minute sessions', 'One-on-one attention', 'Tailored to your dog\'s pace'],
        },
    ];

    return (
        <section id="services" className="section relative overflow-hidden bg-cream">
            {/* Simple clean background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-cream" />

            {/* Decorative pattern */}
            <div className="absolute inset-0 pattern-diagonal opacity-40" />

            {/* Decorative blobs */}
            <div className="absolute top-20 left-0 w-[500px] h-[500px] blob-sage-strong opacity-40" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] blob-coastal opacity-40" />
            <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] blob-lavender opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center max-w-2xl mx-auto mb-16 scroll-fade-up ${headerVisible ? 'visible' : ''}`}
                >
                    <p className="section-label">Our Services</p>
                    <h2 className="mb-6">Thoughtful Care for Every Need</h2>
                    <div className="divider mx-auto" />
                    <p className="text-muted mt-8 text-lg leading-relaxed">
                        Every pet is unique, and their care should be too. Choose the service that
                        fits your pet's personality and needs.
                    </p>
                </div>

                {/* Services Grid */}
                <div ref={gridRef} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} isVisible={gridVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
