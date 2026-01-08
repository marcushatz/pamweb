import hatMask from '../assets/hat-mask.png';

export const HatwebsWatermark = () => {
    return (
        <a
            href="https://hatwebs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-0 opacity-60 hover:opacity-100 transition-opacity duration-300 group"
            aria-label="Made by Hatwebs"
        >
            <span className="text-white/40 text-[10px] uppercase tracking-widest font-medium mr-1.5">
                Website by
            </span>

            {/* 
                Transparent Hat Logo 
                Note: The image source 'hat-mask.png' should be a transparent PNG 
                so it automatically adapts to any footer background color.
            */}
            <img
                src={hatMask}
                alt="Hatwebs Logo"
                className="h-7 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 mr-1"
            />

            {/* Text Part */}
            <div className="flex flex-col items-start leading-none gap-0 subpixel-antialiased transform-gpu">
                <span className="text-lg font-bold text-[#607D8B] tracking-tight group-hover:text-[#90A4AE] transition-colors">
                    Hatwebs
                </span>
                <span className="text-[7px] font-bold tracking-[0.2em] text-[#546E7A] uppercase group-hover:text-[#78909C] transition-colors -mt-1">
                    Digital Design
                </span>
            </div>
        </a>
    );
};
