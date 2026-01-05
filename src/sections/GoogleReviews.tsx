import { useState, useEffect, useCallback } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface GoogleReview {
    author: string;
    rating: number;
    text: string;
    date: string;
}

const reviews: GoogleReview[] = [
    {
        author: "Marcus Hatzakis",
        rating: 5,
        text: "Pam is a true professional and animal lover! Outstanding service!! Would highly recommend to anyone in the area!",
        date: "2 months ago",
    },
    {
        author: "Mary Sipe",
        rating: 5,
        text: "Reasonable price. We are so grateful we found Pam to care for our doodle! Clara loves being at her house with other dogs. She is well cared for and comes home contented. We have already scheduled for the next time we are away.",
        date: "a month ago",
    },
    {
        author: "Carolyn Eldridge",
        rating: 5,
        text: "We left our two Aussie 'fur babies' with Pam at Whiskers and Wags for a week. It was so nice to get morning updates and pictures of our girls. It's comforting to know someone cares about your pets and makes sure they are comfortable and well cared for in your absence. They made so many new friends! 🐾💕",
        date: "7 months ago",
    },
    {
        author: "Karrie Krell",
        rating: 5,
        text: "Pam was referred to me by 2 other people. I was in a pinch because my neighbor backed out on caring for my dogs at the last minute. Pam was so easy to coordinate with and she was happy to help. She came over for a meet and greet and was wonderful!",
        date: "2 years ago",
    },
    {
        author: "Cara Webb",
        rating: 5,
        text: "Pam is wonderful! We have two dogs. A boxer who is bouncy and a bulldog/lab rescue who is lazy. So they both need walks and attention for different reasons. She is on time, great communication with notes/texts/photos, and gives them lots of love.",
        date: "2 years ago",
    },
    {
        author: "Tamara Renick",
        rating: 5,
        text: "Pam is very professional, punctual and clearly loves all animals. She cares for our pets like I would! We highly recommend her services. She keeps contact sending pictures of your pets so you feel relaxed knowing that they are cared for.",
        date: "a year ago",
    },
    {
        author: "S. Locklear",
        rating: 5,
        text: "Pam with Whiskers and Wags Pet Services was phenomenal. She was very attentive and lenient with the needs of my very particular German Shepherds. They seemed to have a stress free/fun time and I will definitely utilize her services in the future.",
        date: "2 years ago",
    },
    {
        author: "Sophia Luther",
        rating: 5,
        text: "I am so happy I found Whiskers and Wags. Abner absolutely loves going there for Doggy Daycare. He is so happy when we pull up. He runs to see Pam, her family and the other dogs she cares for. I know I don't have to worry about how Abner is being cared for. What a blessing. I would highly recommend!",
        date: "a year ago",
    },
    {
        author: "Amanda Roberts",
        rating: 5,
        text: "Pam is fantastic! We have used Whiskers and Wags several times since moving here and always have a positive experience. Our furbaby (Izzie) is a 14 year old senior pup who's an only child. She doesn't do well in boarding facilities and Pam takes wonderful care of her!",
        date: "9 months ago",
    },
    {
        author: "Mary Mills",
        rating: 5,
        text: "I am so glad we found Whiskers and Wags! Scout and Dakota had a great doggie vacation with Pam! She provided regular updates and photos of all the fun. More stays are definitely in the future! Thank you for taking such great care of them 🐶💕🐕",
        date: "a year ago",
    },
    {
        author: "Angie Noojin",
        rating: 5,
        text: "Pam is amazing! She has taken care of our most valuable assets, our baby dogs. She is so good with them. She has helped out in short notice and was great with organizing our visits. She is extremely reasonable with pricing. So glad we chose her and her services. Highly recommend!",
        date: "a year ago",
    },
    {
        author: "Eba Kim",
        rating: 5,
        text: "Pam did such a marvelous job with our two elderly pets! Her house is so clean and lovely and our dogs felt right at home. They even made friends with the other puppers during their stay. Our interactions were very professional!",
        date: "a year ago",
    },
    {
        author: "Jill Bohl",
        rating: 5,
        text: "We left our 5 month old Aussie for a couple of nights for the first time and were a bit nervous. We were very pleased when we came back to pick him up. Pam's home is very clean and she has a nice fenced in backyard. I would definitely recommend Pam for all your pet sitting needs. She is the best!!",
        date: "8 months ago",
    },
    {
        author: "Karlee Waid",
        rating: 5,
        text: "Pam took care of our 3 cats while we were out of town and she did such an amazing job! She communicated every time she visited and sent us photos! Our 8 month old kitten is very scared of strangers but by the second day she was able to get him out of hiding which never happens with new people! Such amazing service!",
        date: "10 months ago",
    },
    {
        author: "Chris Pollock",
        rating: 5,
        text: "I would recommend Whiskers and Wags pet service to anyone that is traveling or even locals. Pam communicates very well and takes care of your pet like it's her own. Our puppy was well taken care of!",
        date: "a year ago",
    },
    {
        author: "Craig Beam",
        rating: 5,
        text: "This was my FIRST dog boarding experience and it was with my 9 month old puppy, so you can imagine how nervous I was leaving her for the first time for a week. Pam was so kind and supportive throughout the whole process. She was super wonderful!",
        date: "a year ago",
    },
    {
        author: "Gabriela Abadia",
        rating: 5,
        text: "I am so glad that I found Pam to watch over my precious dog Cooper. Cooper has now stayed overnight at Pam's house on two separate occasions and we had no issues. Pam is very professional and keeps a clean home and backyard. It's so nice!",
        date: "a year ago",
    },
    {
        author: "Susan Petracco",
        rating: 5,
        text: "Pam was a great dog sitter for our Rusty! She sent detailed messages and photos with every visit. I could see on my dog's face that he was happy and felt secure. Thank you so much, Pam!",
        date: "9 months ago",
    },
    {
        author: "Krista Tremblay",
        rating: 5,
        text: "I love Pam! The second we met at the Meet n Greet for Binx and Poe, I felt so welcome and knew that my boys were going to be loved by her as much as I love them. Thank you for taking on my unhinged madmen and accommodating a recent very last minute request. So happy we have made Whiskers and Wags part of our family.",
        date: "8 months ago",
    },
    {
        author: "LuAnn McCarty",
        rating: 5,
        text: "Pam is an excellent pet care professional! She took such great care of our dear dog when we were recently on a weekend trip. I could tell that she really got to know him. She communicated so well and I felt so comfortable!! And it was clear that our doggie did too! So glad to have found her 😊!",
        date: "a year ago",
    },
    {
        author: "Zach Jacob",
        rating: 5,
        text: "Pam did a great job taking care of our elderly pets, and attending to their very particular needs! She sent pictures often and was very pleasant to work with. We will absolutely be using her services again!",
        date: "11 months ago",
    },
    {
        author: "Kayne",
        rating: 5,
        text: "Pam is GREAT! We were so relieved to find a kind and trustworthy person to watch our pretty big dogs. One of them in particular can be finicky with people and other dogs, but he loves Pam! She comes when she says she's gonna come.",
        date: "a year ago",
    },
    {
        author: "Gina Bardy",
        rating: 5,
        text: "I highly recommend Pam's Whiskers and Wags Pet Services. We met up beforehand, saw her place and discussed my dog and his personality. While he was there her care and communication was excellent. My Sheltie enjoyed himself and was happy!",
        date: "a year ago",
    },
    {
        author: "Denise O'Connor",
        rating: 5,
        text: "I am so grateful I found this service for my dog while I was spending the day in Melbourne. A nice home setting that was safe and friendly for my best buddy. Pamela sent me pictures and updates along the way which I really appreciated. If you are in the area and need a sitter I highly recommend Whiskers and Wags.",
        date: "10 months ago",
    },
    {
        author: "Wendy Barnes",
        rating: 5,
        text: "I can't say enough about how wonderful it's been to find such a caring person as Pam. My dog was no fan of local daycare and boarding facilities in the area and would tremble in the backseat upon arriving. Now, she is so happy to see Pam!",
        date: "a year ago",
    },
    {
        author: "Dylan M",
        rating: 5,
        text: "I cannot recommend Whiskers and Wags enough! Pam did an outstanding job taking care of our 4 cats while we were out of state for a week! She was so thoughtful and caring, it really made a huge difference compared to prior sitters we've had!",
        date: "a year ago",
    },
    {
        author: "Jamie Murphy",
        rating: 5,
        text: "We used Pam to board our 7 month old puppy for a few nights for the first time. She was flexible with pick up/drop off times and sent an update with photos everyday. We were happy with our experience and will use her in the future!",
        date: "9 months ago",
    },
    {
        author: "Gatormom",
        rating: 5,
        text: "Pam is an amazing pet sitter! I was looking for a pet sitter recently for our two cats. She came to meet me, got all info on our cats, walked around the house with me to make sure she knew what we needed. Sent pictures everyday!",
        date: "a year ago",
    },
    {
        author: "Shadi Scortino",
        rating: 5,
        text: "Pam was welcoming and caring. She made sure to get all the details to make Bohdi's stay the best. She sent photos and kept me updated daily while we were away. I highly recommend her if you need someone to watch your furry family member.",
        date: "9 months ago",
    },
    {
        author: "Sharon Rice",
        rating: 5,
        text: "What a wonderful experience with pet services! Consistent reports, feeding and play time, and photos during each visit. Highly recommend and I will certainly use again. My fur babies were happy!",
        date: "2 years ago",
    },
    {
        author: "Maria Bazemore",
        rating: 5,
        text: "Pam is wonderful! She took great care of our pups. Would definitely recommend!",
        date: "4 months ago",
    },
    {
        author: "Alicja Hatzakis",
        rating: 5,
        text: "A loving home where your pet will feel like being at home surrounded by a caring family. I highly recommend Pam, her professionalism and heart. I couldn't ask for a better place for my dog.",
        date: "a year ago",
    },
    {
        author: "Trevor Else",
        rating: 5,
        text: "Pam & family took care of our young puppy for an entire month, providing the kind of pet care that one dreams of. From daily updates and photos to responsive communication, we couldn't have found a better sitter. Truly first class. Superior service and highly recommended. Big thanks!",
        date: "a year ago",
    },
    {
        author: "Sharon Hope Winters",
        rating: 5,
        text: "Pam is so kind, she took such good care of our pup! She kept us updated on his fun adventures with her and sent lots of photos! Excellent service!",
        date: "a year ago",
    },
    {
        author: "Sandy Knarvik",
        rating: 5,
        text: "I highly recommend Pam from Whiskers and Wags Pet Services. She recently took care of my cat, Rosie, and gave her wonderful care. Pam met with Rosie several times before I went away so she was comfortable. I received pictures and messages every day. If you want quality care, call Whiskers and Wags Pet Services.",
        date: "a year ago",
    },
    {
        author: "Thomas O'Neil",
        rating: 5,
        text: "Our two golden retrievers had a wonderful stay at Whiskers and Wags! I loved that they were allowed to roam freely and didn't have to be in a kennel because they're not used to that. They came back happy & healthy! 100% recommend.",
        date: "a year ago",
    },
    {
        author: "Susan Carraro",
        rating: 5,
        text: "Whiskers and Wags took such great care of our Grand Puppy Skye. Thank you for spending so much time earning her trust. You're one of her besties now and we will be using your services again soon!!",
        date: "8 months ago",
    },
    {
        author: "Jacquelyn Sada",
        rating: 5,
        text: "I had a last minute trip I booked. Pam made time during the holidays to meet with me and my pups to make sure we were comfortable. Once I met her I knew I had nothing to worry about while I was traveling. She was wonderful. She gave me updates and pics often. I highly recommend her.",
        date: "2 years ago",
    },
    {
        author: "J M",
        rating: 5,
        text: "Let me tell you about Pam and her daughter Leah. My Dad passed away unexpectedly in New Jersey and I needed a dog walker for my 120 pound dog with cancer. She was the only one that would take us on last minute and a special needs dog. Amazing!",
        date: "a year ago",
    },
    {
        author: "Terry Giles",
        rating: 5,
        text: "Pam took such good care of my cat! She was always prompt arriving to feed her and clean the litter box. I will always use her for my pets because of her loving and caring demeanor. Five stars ⭐️⭐️⭐️⭐️⭐️",
        date: "a year ago",
    },
    {
        author: "Susan Kendrick",
        rating: 5,
        text: "Whiskers and Wags has been one of the best decisions my husband and I ever made when it comes to taking care of our two dogs! Pam takes such pride in her work, whether she's just walking them for us, to when we board them, she's just amazing! Thank you for caring so much for our Lola and AJ!",
        date: "a year ago",
    },
    {
        author: "Pamela Hulse",
        rating: 5,
        text: "I have an anxious, mini goldendoodle needing socializing as well as walking. Finding someone that I trusted was my biggest concern. Thank you Whiskers and Wags for being compassionate with Tully and reassuring me that he was safe in your care. Highly recommend their services.",
        date: "a year ago",
    },
    {
        author: "John DeStefon",
        rating: 5,
        text: "Great environment for your pet. Pam is very good with the dogs and allows them to have fun playing together. Felt my Gracie was in good hands and safe.",
        date: "a year ago",
    },
    {
        author: "Marissa Lee",
        rating: 5,
        text: "Pam did great with our dog Luna! It was super last minute and she was able to accommodate us. The process was very easy. She did great with caring for our rescue dog.",
        date: "2 years ago",
    },
    {
        author: "Aimee Herschberger",
        rating: 5,
        text: "Pam and her family took great care of our elderly chihuahuas and our 5 year old boxer. She made them feel right at home.",
        date: "a year ago",
    },
    {
        author: "Jen J",
        rating: 5,
        text: "I am so glad I found Whiskers and Wags because I will never use anyone else! My kitty got the attention and care he deserved while I was away and I came back to a happy cat! I was sent updates and pictures every day!! Thanks again Whiskers and Wags!",
        date: "a year ago",
    },
    {
        author: "Shine Solutions",
        rating: 5,
        text: "My Mack loves going to Whiskers and Wags. He is right at home and receives all the love and attention I could dream of for him. Amazing care and true love for your animals.",
        date: "a year ago",
    },
    {
        author: "Erin McGuire",
        rating: 5,
        text: "Zina had a blast! It was a great feeling to know Zina was loved and cared for like it was her own home! We will definitely be frequent flyers!!!!!",
        date: "a year ago",
    },
    {
        author: "Jan Russo",
        rating: 5,
        text: "Pam did an amazing job! Surpassed my expectations. Will definitely hire again.",
        date: "a year ago",
    },
    {
        author: "Cindy Manierre",
        rating: 5,
        text: "Kind and compassionate - always reliable and great availability :) thank you always taking care of the herd of cats for us!",
        date: "2 years ago",
    },
    {
        author: "Ingrid Egeli",
        rating: 5,
        text: "Wonderful dog service - friendly and clean!",
        date: "9 months ago",
    },
];

const GoogleReviewCard = ({ review, isActive }: { review: GoogleReview; isActive: boolean }) => (
    <div
        className={`absolute inset-0 transition-all duration-700 ease-out ${isActive
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-6 scale-[0.98] pointer-events-none'
            }`}
    >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-charcoal/[0.04] border border-sand/50 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage to-sage-dark flex items-center justify-center text-white font-medium text-base shadow-lg shadow-sage/20">
                        {review.author.charAt(0)}
                    </div>
                    <div>
                        <p className="font-medium text-charcoal">{review.author}</p>
                        <p className="text-xs text-muted">{review.date}</p>
                    </div>
                </div>
                <svg className="w-6 h-6 opacity-50" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'text-amber-400' : 'text-gray-200'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>

            {/* Review Text */}
            <blockquote className="text-charcoal leading-relaxed flex-1 text-base italic">
                "{review.text}"
            </blockquote>
        </div>
    </div>
);

const GoogleReviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation({ threshold: 0.2 });

    const nextReview = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, []);

    const prevReview = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextReview, 6000);
        return () => clearInterval(interval);
    }, [isPaused, nextReview]);

    return (
        <section id="testimonials" className="section relative overflow-hidden">
            {/* Rich gradient background */}
            <div className="absolute inset-0 bg-section-lavender" />

            {/* Decorative pattern */}
            <div className="absolute inset-0 pattern-grid opacity-50" />

            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] blob-sage-strong opacity-35" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] blob-coastal opacity-40" />
            <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] blob-lavender opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center max-w-xl mx-auto mb-14 scroll-fade-up ${headerVisible ? 'visible' : ''}`}
                >
                    <p className="section-label">Reviews</p>
                    <h2 className="mb-6">What Our Clients Say</h2>
                    <div className="divider mx-auto" />

                    {/* Google Rating Badge */}
                    <div className="inline-flex items-center gap-4 mt-10 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg shadow-charcoal/[0.03] border border-sand/50 transition-all duration-500 hover:shadow-xl">
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-medium text-charcoal">4.9</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <span className="text-muted text-xs border-l border-sand pl-4 ml-1">{reviews.length} reviews</span>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={carouselRef}
                    className={`max-w-2xl mx-auto scroll-scale ${carouselVisible ? 'visible' : ''}`}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="relative h-[300px] mb-10">
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
                        <button
                            onClick={prevReview}
                            className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg shadow-charcoal/[0.03] border border-sand/50 flex items-center justify-center hover:bg-sage hover:border-sage hover:text-white transition-all duration-300 hover:scale-110"
                            aria-label="Previous review"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Review counter instead of dots for 51 reviews */}
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full">
                            <span className="text-charcoal font-medium">{activeIndex + 1}</span>
                            <span className="text-muted">/</span>
                            <span className="text-muted">{reviews.length}</span>
                        </div>

                        <button
                            onClick={nextReview}
                            className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg shadow-charcoal/[0.03] border border-sand/50 flex items-center justify-center hover:bg-sage hover:border-sage hover:text-white transition-all duration-300 hover:scale-110"
                            aria-label="Next review"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-10">
                        <a
                            href="https://share.google/mGFxfVWaZiENO2uzm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-sage text-sm font-medium hover:text-sage-dark transition-all duration-300"
                        >
                            <span className="animated-underline">See all reviews on Google</span>
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoogleReviews;
