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
                    className="absolute w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                >
                    {/* Using a reliable Pexels video - dogs playing */}
                    <source
                        src="https://videos.pexels.com/video-files/4974055/4974055-uhd_2560_1440_25fps.mp4"
                        type="video/mp4"
                    />
                </video>
                {/* Overlay for readability */}
                <div
                    className="absolute inset-0 bg-charcoal"
                    style={{ opacity: overlayOpacity }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default VideoBackground;
