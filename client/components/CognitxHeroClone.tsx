import { motion } from "framer-motion";
import { useState } from "react"; // Import useState for conditional rendering

// You MUST replace this path with the actual path to your video file (e.g., logo-animation.mp4)
import AnimatedLogoVideo from "/Blyst Ai.mp4"; 

export default function CognitxHeroClone() {
  // State to handle if the video fails to load (e.g., wrong path or unsupported format)
  const [videoLoaded, setVideoLoaded] = useState(true);

  return (
    <section id="clone-hero" className="mt-12 md:mt-16">
      <div className="rounded-2xl bg-black text-white px-6 md:px-10 py-10 md:py-14 border border-white/10 shadow-[0_10px_60px_rgba(0,0,0,0.45)]">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT COLUMN: ANIMATED TEXT */}
          <div className="order-2 md:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight"
            >
              <span className="block">BLYST AI</span>
              <span className="block">ADVISOR</span>
              <span className="block">FOR</span>
              <span className="block">DATA</span>
              <span className="block">ANALYTICS</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-4 text-sm md:text-base text-white/70 max-w-prose"
            >
              Our flagship AI advisor for data analytics turns complex business
              data into actionable insight. Ask natural-language questions and
              get accurate, instant answers to make faster, data‑driven
              decisions.
            </motion.p>
          </div>

          {/* RIGHT COLUMN: VIDEO LOGO */}
          <div className="order-1 md:order-2 grid place-items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
            >
              {/* Conditional rendering: Only show video if it's expected to load */}
              {videoLoaded ? (
                <video
                  src={AnimatedLogoVideo}
                  className="w-full max-w-[260px] h-auto rounded-xl" 
                  autoPlay 
                  loop 
                  muted // Mute is ESSENTIAL for autoPlay on most mobile devices
                  playsInline // Ensures video plays inline on iOS, preventing full-screen takeover
                  
                  // **CRITICAL FIX**: Hides the video element if it fails to load, 
                  // preventing a broken link/huge play button icon from dominating the space.
                  onError={() => {
                    console.error("Failed to load video:", AnimatedLogoVideo);
                    setVideoLoaded(false); 
                  }}
                />
              ) : (
                // Fallback content if the video fails to load
                <div className="w-[260px] h-[260px] flex items-center justify-center bg-gray-900 rounded-xl text-white/50 border border-white/10">
                    <p>Logo Animation</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}