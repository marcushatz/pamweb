import VideoBackground from '../components/VideoBackground';

const Hero = () => {
    return (
        <VideoBackground className="min-h-screen flex items-center pt-20" overlayOpacity={0.5}>
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="animate-fade-in-up">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 mb-6">
                            <svg className="w-4 h-4 text-sage" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Licensed • Certified • Insured</span>
                        </div>

                        {/* Headline */}
                        <h1 className="mb-6 text-white drop-shadow-lg">
                            Where Every Pet
                            <span className="block text-sage">Becomes Family</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg leading-relaxed drop-shadow">
                            Personal, loving pet care in a real home environment. Because your furry
                            family members deserve more than a kennel — they deserve a home away from home.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a href="#book" className="btn-primary">
                                Book a Meet & Greet
                            </a>
                            <a href="#services" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all">
                                Explore Services
                            </a>
                        </div>

                        {/* Quick Stats */}
                        <div className="flex gap-8 mt-12 pt-8 border-t border-white/20">
                            <div>
                                <p className="text-2xl font-semibold text-white">100+</p>
                                <p className="text-sm text-white/70">Happy Pets</p>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-white">5★</p>
                                <p className="text-sm text-white/70">Client Rating</p>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-white">24/7</p>
                                <p className="text-sm text-white/70">Care Available</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/hero-pet.png"
                                alt="Happy dog relaxing on a cozy sofa in a home environment"
                                className="w-full h-auto aspect-[4/5] object-cover"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-sage/20 rounded-2xl" />
                        <div className="absolute -z-20 -top-8 -right-8 w-full h-full bg-white/10 rounded-2xl" />
                    </div>
                </div>
            </div>
        </VideoBackground>
    );
};

export default Hero;

