// src/components/FullPageSection.tsx
import React, { ReactNode, useRef, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'; // Import the new hook

interface FullPageSectionProps {
  headline: string;
  description: string;
  videoSrc: string; // URL to the video
  reverseLayout?: boolean; // To swap text/video sides
  children?: ReactNode; // For any extra content
}

export default function FullPageSection({ 
  headline, 
  description, 
  videoSrc, 
  reverseLayout = false 
}: FullPageSectionProps) {
  
  // 1. Use the Intersection Observer hook
  // Threshold 0.9 ensures it only triggers when 90% or more is visible (i.e., fully snapped)
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.9 }); 
  const videoRef = useRef<HTMLVideoElement>(null);

  // 2. Effect for Video Playback Control
  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        // Play the video and start the animation when section is fully visible
        videoRef.current.play();
      } else {
        // Pause and reset video when section scrolls out
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset to start
      }
    }
  }, [isVisible]);


  // Tailwind classes for animation
  const animationClasses = isVisible
    ? "opacity-100 translate-y-0 transition-all duration-1000 ease-out"
    : "opacity-0 translate-y-10";

  return (
    // 'h-screen' and 'snap-start' are critical for scroll snapping
    <section ref={sectionRef} className="snap-section h-screen w-full flex items-center justify-center p-8 text-white bg-black/50 relative">
      
      <div 
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 ${reverseLayout ? 'md:flex-row-reverse' : ''}`}
      >
        {/* Text Content Block */}
        <div className={`w-full md:w-1/2 ${animationClasses}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{headline}</h1>
          <p className="text-xl text-white/80 max-w-lg">{description}</p>
        </div>

        {/* Video/Mockup Block */}
        <div className={`w-full md:w-1/2 relative p-4 ${animationClasses} transition-delay-300`}>
          {/* Mockup Frame (if needed) */}
          <div className="absolute inset-0 border-[8px] border-white/10 rounded-3xl pointer-events-none z-10"></div>
          
          <video 
            ref={videoRef}
            src={videoSrc}
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}