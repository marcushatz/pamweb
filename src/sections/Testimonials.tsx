interface TestimonialProps {
    quote: string;
    author: string;
    petName: string;
    petType: string;
}

const TestimonialCard = ({ quote, author, petName, petType }: TestimonialProps) => (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>

        {/* Quote */}
        <blockquote className="text-charcoal leading-relaxed mb-6">
            "{quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                <span className="text-lg">{petType === 'dog' ? '🐕' : '🐈'}</span>
            </div>
            <div>
                <p className="font-medium text-charcoal text-sm">{author}</p>
                <p className="text-muted text-xs">{petName}'s parent</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const testimonials = [
        {
            quote: "We left our two Aussie 'fur babies' with Pam at Whiskers and Wags for a week. It was so nice to get morning updates and pictures of our girls. It's comforting to know someone cares about your pets and makes sure they are comfortable and well cared for in your absence. They made so many new friends! 🐾💕",
            author: "Carolyn Eldridge",
            petName: "The Girls",
            petType: "dog",
        },
        {
            quote: "We are so grateful we found Pam to care for our doodle! Clara loves being at her house with other dogs. She is well cared for and comes home contented. We have already scheduled for the next time we are away.",
            author: "Mary Sipe",
            petName: "Clara",
            petType: "dog",
        },
        {
            quote: "Pam was so easy to coordinate with and she was happy to help. I have an elderly dog with some special needs which Pam was great with. She did the drop in visits at the times she said and even sent pictures of our happy fur babies. I really felt comfortable and she eased my mind about being away with someone new. I highly recommend her, she is lovely!",
            author: "Karrie Krell",
            petName: "Elderly Pup",
            petType: "dog",
        },
    ];

    return (
        <section id="testimonials" className="section bg-cream">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sage font-medium mb-3 tracking-wide uppercase text-sm">Testimonials</p>
                    <h2 className="mb-6">What Pet Parents Are Saying</h2>
                    <div className="divider mx-auto" />
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
