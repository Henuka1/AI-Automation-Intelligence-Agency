import React, { useRef, useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';
import { useScroll, useMotionValueEvent } from 'motion/react';

interface HeroProps {
  onBookDemo?: () => void;
  onExploreWork?: () => void;
}

const VIDEO_URL =
  'https://res.cloudinary.com/djxspiq46/video/upload/v1789555650/Robotic_and_human_hands_separating_20260916034641_fdp5xl.mp4';

export const Hero: React.FC<HeroProps> = ({ onBookDemo, onExploreWork }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video duration state (default fallback ~10 seconds)
  const [duration, setDuration] = useState<number>(10.005);

  // Target playback time for smooth LERP interpolation
  const targetTimeRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  // Track scroll through the multi-viewport container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate video target time based on scroll progress
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (duration > 0) {
      const calculated = latest * duration;
      targetTimeRef.current = Math.min(Math.max(calculated, 0), Math.max(duration - 0.05, 0.1));
    }
  });

  // Setup video metadata and load handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration) && video.duration > 0) {
        setDuration(video.duration);
      }
    };

    if (video.readyState >= 1 && video.duration) {
      setDuration(video.duration);
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  // RequestAnimationFrame loop for liquid-smooth 60fps video scrubbing (LERP)
  useEffect(() => {
    let isCancelled = false;

    const updateVideoFrame = () => {
      const video = videoRef.current;
      if (video && video.readyState >= 2) {
        const current = video.currentTime;
        const target = targetTimeRef.current;
        const diff = target - current;

        // When difference is noticeable, smoothly lerp towards target
        if (Math.abs(diff) > 0.02) {
          video.currentTime += diff * 0.24;
        } else if (Math.abs(diff) > 0.002) {
          video.currentTime = target;
        }
      }

      if (!isCancelled) {
        rafIdRef.current = requestAnimationFrame(updateVideoFrame);
      }
    };

    rafIdRef.current = requestAnimationFrame(updateVideoFrame);

    return () => {
      isCancelled = true;
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [duration]);

  return (
    // Outer scroll track: When user scrolls, the sticky hero remains pinned while video plays.
    // Once the video finishes playing at the end of the scroll, the next section naturally appears!
    <section ref={containerRef} className="relative h-[260vh] bg-white">
      {/* Sticky full-viewport container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
        {/* Background Video element with full natural clarity */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          <video
            ref={videoRef}
            src={VIDEO_URL}
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Modern bottom feather fade raised higher up to blend seamlessly into 'Trusted by 2,200 Companies' */}
        <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-56 md:h-[18vh] min-h-[175px] max-h-[250px] bg-gradient-to-t from-white via-white/85 via-white/40 to-transparent pointer-events-none z-10" />

        {/* Delicate curved vector lines matching design */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-10 opacity-30">
          <svg
            className="w-full h-full max-w-[1440px]"
            viewBox="0 0 1440 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M-100 550C250 520 400 350 420 -50" stroke="#CBD5E1" strokeWidth="1.2" />
            <path d="M-60 570C290 530 430 340 460 -50" stroke="#CBD5E1" strokeWidth="1.2" />
            <path d="M-20 590C330 540 470 330 500 -50" stroke="#CBD5E1" strokeWidth="1" />
            <path d="M1020 -50C1040 350 1190 520 1540 550" stroke="#CBD5E1" strokeWidth="1.2" />
            <path d="M980 -50C1010 340 1150 530 1500 570" stroke="#CBD5E1" strokeWidth="1.2" />
            <path d="M940 -50C970 330 1110 540 1460 590" stroke="#CBD5E1" strokeWidth="1" />
          </svg>
        </div>

        {/* Hero Content: ALWAYS clearly visible without fading out */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24">
          {/* Eyebrow badge matching screenshot with dark CPU disc */}
          <div className="inline-flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-white/95 border border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.03)] mb-8 transition-transform hover:scale-[1.01]">
            <div className="w-7 h-7 rounded-full bg-gradient-to-b from-[#2A2B30] to-[#0E0F12] text-white flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.35)] shrink-0">
              <Cpu className="w-3.5 h-3.5 text-white stroke-[2.2]" />
            </div>
            <span className="text-[12px] sm:text-[12.5px] font-semibold tracking-[0.06em] text-[#1E1F24] uppercase">
              AI AUTOMATION FOR BUSINESSES
            </span>
          </div>

          {/* Main headline: Smarter Solutions, Powered by AI - Single line on desktop with vertical fade */}
          <h1 className="hero-gradient-headline text-[32px] sm:text-[44px] md:text-[54px] lg:text-[66px] xl:text-[74px] font-semibold tracking-[-0.035em] leading-[1.12] w-full mx-auto select-none sm:whitespace-nowrap drop-shadow-sm">
            Smarter Solutions, Powered by AI
          </h1>

          {/* Subtitle - Single line on desktop */}
          <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16.5px] md:text-[18px] text-[#4F515A] w-full mx-auto leading-relaxed font-normal md:whitespace-nowrap">
            We build intelligent tools, systems, and strategies that help businesses scale, automate, and innovate—faster.
          </p>

          {/* CTA Buttons - Interactive CSS Hover Transition / Transform Animation */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4">
            {/* Primary Book a Demo Button with Text Rolling Hover Effect */}
            <button
              onClick={() => {
                if (onBookDemo) onBookDemo();
                else document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative h-[52px] min-w-[175px] px-8 bg-gradient-to-b from-[#232326] to-[#111113] hover:from-[#2d2e33] hover:to-[#18181b] text-white text-[15px] sm:text-[15.5px] font-medium rounded-[14px] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_25px_rgba(0,0,0,0.22)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_14px_32px_rgba(0,0,0,0.32)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center justify-center cursor-pointer overflow-hidden"
            >
              <div className="relative overflow-hidden h-[22px] flex items-center justify-center">
                <span className="block transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[135%]">
                  Book a Demo
                </span>
                <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[135%] group-hover:translate-y-0 text-white font-medium select-none pointer-events-none">
                  Book a Demo
                </span>
              </div>
            </button>

            {/* Secondary Explore Our Work Button with Text Rolling Hover Effect */}
            <button
              onClick={() => {
                if (onExploreWork) onExploreWork();
                else document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative h-[52px] min-w-[175px] px-8 bg-gradient-to-b from-white to-[#F8F8FA] hover:to-[#ECECF0] border border-neutral-200/90 text-[#141416] text-[15px] sm:text-[15.5px] font-medium rounded-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_26px_rgba(0,0,0,0.1)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center justify-center cursor-pointer overflow-hidden"
            >
              <div className="relative overflow-hidden h-[22px] flex items-center justify-center">
                <span className="block transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[135%]">
                  Explore Our Work
                </span>
                <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[135%] group-hover:translate-y-0 text-[#141416] font-medium select-none pointer-events-none">
                  Explore Our Work
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
