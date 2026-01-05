import { useState, useEffect, useCallback } from 'react';

interface GoogleReview {
    author: string;
    rating: number;
    text: string;
    date: string;
    profilePhoto?: string;
}

const reviews: GoogleReview[] = [
    {
        author: "Marcus Hatzakis",
        rating: 5,
        text: "Pam is a true professional and animal lover! Outstanding service!! Would highly recommend to anyone in the area! 🐾✨",
        date: "2 months ago",
    },
    {
        author: "Carolyn Eldridge",
        rating: 5,
        text: "We left our two Aussie 'fur babies' with Pam at Whiskers and Wags for a week. It was so nice to get morning updates and pictures of our girls. It's comforting to know someone cares about your pets and makes sure they are comfortable and well cared for in your absence. They made so many new friends! 🐾💕",
        date: "3 months ago",
    },
    {
        author: "Mary Sipe",
        rating: 5,
        text: "We are so grateful we found Pam to care for our doodle! Clara loves being at her house with other dogs. She is well cared for and comes home contented. We have already scheduled for the next time we are away.",
        date: "4 months ago",
    },
    {
        author: "Karrie Krell",
        rating: 5,
        text: "Pam was so easy to coordinate with and she was happy to help. I have an elderly dog with some special needs which Pam was great with. She did the drop in visits at the times she said and even sent pictures of our happy fur babies. I really felt comfortable and she eased my mind about being away with someone new. I highly recommend her, she is lovely!",
        date: "5 months ago",
    },
];

const GoogleReviewCard = ({ review, isActive }: { review: GoogleReview; isActive: boolean }) => (
    <div
        className={`absolute inset-0 transition-all duration-700 ease-out ${isActive
            ? 'opacity-100 translate-x-0 scale-100'
            : 'opacity-0 translate-x-8 scale-95 pointer-events-none'
            }`}
    >
        <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
            {/* Google Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    {/* Profile Initial */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-lg">
                        {review.author.charAt(0)}
                    </div>
                    <div>
                        <p className="font-semibold text-charcoal">{review.author}</p>
                        <p className="text-xs text-muted">{review.date}</p>
                    </div>
                </div>
                {/* Google Icon */}
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-5 h-5 ${i < review.rating ? 'text-amber-400' : 'text-gray-200'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>

            {/* Review Text */}
            <blockquote className="text-charcoal leading-relaxed flex-1 text-lg">
                "{review.text}"
            </blockquote>
        </div>
    </div>
);

const GoogleReviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextReview = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, []);

    const prevReview = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextReview, 5000);
        return () => clearInterval(interval);
    }, [isPaused, nextReview]);

    return (
        <section id="testimonials" className="section bg-cream">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sage font-medium mb-3 tracking-wide uppercase text-sm">
                        Google Reviews
                    </p>
                    <h2 className="mb-6">What Our Clients Say</h2>
                    <div className="divider mx-auto" />

                    {/* Google Rating Badge */}
                    <div className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-white rounded-full shadow-md">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-charcoal">5.0</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <span className="text-muted text-sm border-l pl-3 ml-1">Based on {reviews.length} reviews</span>
                    </div>
                </div>

                {/* Interactive Carousel */}
                <div
                    className="max-w-3xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Review Cards */}
                    <div className="relative h-[320px] mb-8">
                        {reviews.map((review, index) => (
                            <GoogleReviewCard
                                key={index}
                                review={review}
                                isActive={index === activeIndex}
                            />
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-6">
                        {/* Previous Button */}
                        <button
                            onClick={prevReview}
                            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-sage hover:text-white transition-all group"
                            aria-label="Previous review"
                        >
                            <svg className="w-5 h-5 text-charcoal group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === activeIndex
                                        ? 'bg-sage w-8'
                                        : 'bg-sand hover:bg-sage/50'
                                        }`}
                                    aria-label={`Go to review ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={nextReview}
                            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-sage hover:text-white transition-all group"
                            aria-label="Next review"
                        >
                            <svg className="w-5 h-5 text-charcoal group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-10">
                        <a
                            href="https://share.google/oXS85I6SooTtkVlnT"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sage font-medium hover:text-sage-dark transition-colors"
                        >
                            <span>See all reviews on Google</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoogleReviews;
