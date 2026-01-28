import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowUpRight } from 'lucide-react';

// --- Custom Cursor ---
export const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('button, a, .interactive')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);
        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference rounded-full border border-white transition-transform duration-100 ease-out"
                style={{ transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 1.5 : 1})` }}
            />
            <div
                className="fixed top-0 left-0 w-1 h-1 bg-[#FF2D2D] rounded-full pointer-events-none z-[9999]"
                style={{ transform: `translate(${position.x - 2}px, ${position.y - 2}px)` }}
            />
        </>
    );
};

// --- Dot Accent ---
export const DotAccent = ({ animate = true }: { animate?: boolean }) => (
    <span className={`inline-block w-2 h-2 rounded-full bg-[#FF2D2D] mr-2 ${animate ? 'animate-pulse' : ''}`} />
);

// --- Nothing Card ---
export const NothingCard = ({ children, className = "" }: { children?: React.ReactNode, className?: string, key?: React.Key }) => (
    <div className={`glass rounded-2xl p-6 hover:border-[#FF2D2D]/30 transition-all duration-500 group relative overflow-hidden ${className}`}>
        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-4 h-4 text-[#FF2D2D]" />
        </div>
        {children}
    </div>
);

// --- Section Title ---
export const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
    <div className="mb-12 border-l border-[#FF2D2D] pl-6 pointer-events-auto">
        <h2 className="text-4xl md:text-5xl font-bold doto-font uppercase tracking-tighter mb-2">{title}</h2>
        {subtitle && <p className="text-zinc-500 mono-font text-sm uppercase tracking-widest">{subtitle}</p>}
    </div>
);

// --- Background Geometry ---
export const BackgroundGeometry = () => {
    return (
        <div className="fixed inset-0 z-0">
            <Spline scene="https://prod.spline.design/Loui2fRDebTE58VR/scene.splinecode" />
            <div className="absolute bottom-4 right-4 w-48 h-12 bg-black z-50 flex items-center justify-center px-4 pointer-events-auto cursor-default rounded-l-full border-l border-white/10">
                <span className="text-sm font-bold text-zinc-200 doto-font uppercase tracking-widest">Shan Neeraj</span>
            </div>
        </div>
    );
};

// --- Video Player ---
export const VideoPlayer = ({ videoUrl, title, className = "" }: { videoUrl: string, title: string, className?: string }) => {
    const embedUrl = getYouTubeEmbedUrl(videoUrl);

    // YouTube Embed
    if (embedUrl) {
        return (
            <iframe
                src={embedUrl}
                title={title}
                className={`w-full h-full ${className}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ border: 0 }}
            />
        );
    }

    // Local Video (if videoUrl is provided but not YouTube)
    if (videoUrl) {
        return (
            <video
                src={videoUrl}
                title={title}
                className={`w-full h-full object-cover ${className}`}
                controls
                playsInline
            >
                Your browser does not support the video tag.
            </video>
        );
    }

    // Fallback
    return (
        <div className={`w-full h-full flex items-center justify-center text-zinc-600 ${className}`}>
            <span className="text-xs uppercase tracking-widest">No Video Available</span>
        </div>
    );
};

// --- Helpers ---
export const getYouTubeEmbedUrl = (url: string) => {
    try {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}?modestbranding=1&rel=0` : null;
    } catch (e) {
        return null;
    }
};
