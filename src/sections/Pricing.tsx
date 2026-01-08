import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PricingItemProps {
    title: string;
    details: { label: string; price: string }[];
    notes?: string[];
}

const PricingCategory = ({ title, details, notes, index, isVisible }: PricingItemProps & { index: number; isVisible: boolean }) => (
    <div
        className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-sand/50 shadow-sm hover:shadow-md transition-all duration-500 scroll-fade-up stagger-${index + 1} ${isVisible ? 'visible' : ''}`}
    >
        <h3 className="text-xl font-medium text-charcoal mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-sage/30 rounded-full"></span>
            {title}
        </h3>
        <div className="space-y-4">
            {details.map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-sand/30 pb-3 last:border-0 last:pb-0">
                    <span className="text-muted-light font-medium">{item.label}</span>
                    <span className="text-charcoal font-semibold text-lg">{item.price}</span>
                </div>
            ))}
        </div>
        {notes && notes.length > 0 && (
            <div className="mt-6 pt-4 border-t border-sand/50">
                {notes.map((note, i) => (
                    <p key={i} className="text-xs text-muted/80 italic leading-relaxed mt-1">
                        * {note}
                    </p>
                ))}
            </div>
        )}
    </div>
);

const Pricing = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

    const pricingData = [
        {
            title: "Dog Walking",
            details: [
                { label: "30 Minute Walk", price: "$25" },
                { label: "60 Minute Walk", price: "$40" }
            ]
        },
        {
            title: "Drop-In Visits",
            details: [
                { label: "30 Minute Check-in", price: "$25" },
                { label: "60 Minute Check-in", price: "$40" },
                { label: "30 Minute Cat Visit", price: "$25" }
            ],
            notes: ["Perfect for mid-day breaks or cat care"]
        },
        {
            title: "Overnight Care",
            details: [
                { label: "In-Client's Home (12hrs)", price: "$85" },
                { label: "Boarding (In Our Home)", price: "$40/night" }
            ],
            notes: [
                "$85 rate includes one 30-min check-in (7pm-7am)",
                "$60 rate for overnight only (no mid-day visit)",
                "+$20 per additional dog for boarding",
                "+$25 daycare fee for pickup after 2pm"
            ]
        },
        {
            title: "Daycare",
            details: [
                { label: "Full Day (9am - 6pm)", price: "$25" }
            ],
            notes: [
                "+$10 per additional dog"
            ]
        }
    ];

    return (
        <section id="pricing" className="section relative bg-warm overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pattern-subtle-dots opacity-30" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] blob-sage opacity-20" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-warm opacity-40" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center max-w-2xl mx-auto mb-16 scroll-fade-up ${headerVisible ? 'visible' : ''}`}
                >
                    <p className="section-label">Transparent Pricing</p>
                    <h2 className="mb-6">Simple Rates, Zero Surprises</h2>
                    <div className="divider mx-auto" />
                </div>

                {/* Pricing Grid */}
                <div
                    ref={contentRef}
                    className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                >
                    {pricingData.map((category, index) => (
                        <PricingCategory
                            key={index}
                            {...category}
                            index={index}
                            isVisible={contentVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
