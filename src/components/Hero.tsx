import React from 'react';
import { Cpu } from 'lucide-react';

interface HeroProps {
  onBookDemo?: () => void;
  onExploreWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookDemo, onExploreWork }) => {
  return (
    <section className="relative pt-20 sm:pt-28 pb-20 sm:pb-32 overflow-hidden bg-white">
      {/* Background delicate curved vector radiating wave arcs matching screenshot */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <svg
          className="w-full h-full max-w-[1440px] opacity-40"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left sweeping curved lines */}
          <path
            d="M-100 550C250 520 400 350 420 -50"
            stroke="#E5E7EB"
            strokeWidth="1.2"
          />
          <path
            d="M-60 570C290 530 430 340 460 -50"
            stroke="#E5E7EB"
            strokeWidth="1.2"
          />
          <path
            d="M-20 590C330 540 470 330 500 -50"
            stroke="#E5E7EB"
            strokeWidth="1"
          />

          {/* Right sweeping curved lines visible in screenshot */}
          <path
            d="M1020 -50C1040 350 1190 520 1540 550"
            stroke="#E5E7EB"
            strokeWidth="1.2"
          />
          <path
            d="M980 -50C1010 340 1150 530 1500 570"
            stroke="#E5E7EB"
            strokeWidth="1.2"
          />
          <path
            d="M940 -50C970 330 1110 540 1460 590"
            stroke="#E5E7EB"
            strokeWidth="1"
          />
        </svg>

        {/* Soft radial glow in center */}
        <div className="absolute w-[600px] h-[350px] bg-neutral-100/50 rounded-full blur-3xl -z-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        <h1 className="hero-gradient-headline text-[32px] sm:text-[44px] md:text-[54px] lg:text-[66px] xl:text-[74px] font-semibold tracking-[-0.035em] leading-[1.12] w-full mx-auto select-none sm:whitespace-nowrap">
          Smarter Solutions, Powered by AI
        </h1>

        {/* Subtitle - Single line on desktop matching screenshot */}
        <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16.5px] md:text-[18px] text-[#5C5E66] w-full mx-auto leading-relaxed font-normal md:whitespace-nowrap">
          We build intelligent tools, systems, and strategies that help businesses scale, automate, and innovate—faster.
        </p>

        {/* CTA Buttons - Matching rounded rectangle cards, shadows, and fonts */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4">
          {/* Primary Book a Demo Button */}
          <button
            onClick={() => {
              if (onBookDemo) onBookDemo();
              else document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="h-[52px] min-w-[170px] px-8 bg-gradient-to-b from-[#232326] to-[#111113] hover:from-[#2a2a2e] hover:to-[#17171a] text-white text-[15px] sm:text-[15.5px] font-medium rounded-[14px] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_10px_25px_rgba(0,0,0,0.22)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_28px_rgba(0,0,0,0.28)] transition-all duration-200 active:scale-[0.98] flex items-center justify-center cursor-pointer"
          >
            Book a Demo
          </button>

          {/* Secondary Explore Our Work Button */}
          <button
            onClick={() => {
              if (onExploreWork) onExploreWork();
              else document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="h-[52px] min-w-[170px] px-8 bg-gradient-to-b from-white to-[#F8F8FA] hover:to-[#F0F0F3] border border-neutral-200/90 text-[#141416] text-[15px] sm:text-[15.5px] font-medium rounded-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.09)] transition-all duration-200 active:scale-[0.98] flex items-center justify-center cursor-pointer"
          >
            Explore Our Work
          </button>
        </div>
      </div>
    </section>
  );
};
