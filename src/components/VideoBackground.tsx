import { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
    children: React.ReactNode;
    className?: string;
    overlayOpacity?: number;
}

const VideoBackground = ({
    children,
    className = '',
    overlayOpacity = 0.4
}: VideoBackgroundProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            if (isVisible) {
                videoRef.current.play().catch(() => {
                    // Autoplay might be blocked, which is fine
                });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isVisible]);

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    className={`absolute w-full h-full object-cover transition-opacity duration-1500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={() => setIsLoaded(true)}
                >
                    <source
                        src="/dogvid1.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Multi-layer overlay for depth */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/40 to-charcoal/60"
                    style={{ opacity: overlayOpacity * 1.6 }}
                />

                {/* Subtle vignette effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

                {/* Top gradient for navbar legibility */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-charcoal/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default VideoBackground;
