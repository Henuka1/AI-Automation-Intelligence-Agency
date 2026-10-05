import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';
import { InteractiveCube } from './InteractiveCube';

interface AnimatedCounterProps {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  to,
  duration = 1800,
  prefix = '',
  suffix = '',
}) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.35 });

  useEffect(() => {
    if (!isInView) {
      setValue(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animId: number;

    const animate = (now: number) => {
      if (!startTimestamp) startTimestamp = now;
      const elapsed = now - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic curve
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(ease * to));

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        setValue(to);
      }
    };

    animId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animId);
  }, [isInView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="pt-2 sm:pt-4 pb-16 sm:pb-24 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Rounded Container Card matching reference screenshot */}
        <div className="bg-[#F8F9FA] rounded-[32px] sm:rounded-[44px] border border-neutral-200/75 pt-14 sm:pt-20 md:pt-24 px-6 sm:px-12 md:px-16 pb-8 sm:pb-12 text-center relative overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.02)]">
          {/* Subtle concentric ambient glow */}
          <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />

          {/* Heading with vertical text fade matching reference screenshot */}
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-[32px] sm:text-[46px] md:text-[54px] lg:text-[60px] tracking-[-0.035em] leading-[1.12]">
              <span className="block text-[#5B5E68] font-medium">
                Empowering the Future
              </span>
              <span className="block text-[#0D0E11] font-semibold mt-1">
                with Artificial Intelligence
              </span>
            </h2>
          </div>

          {/* Real Interactive Three.js 3D Voxel Cube Matrix - Moves smoothly with cursor, 100% transparent background */}
          <div className="relative my-6 sm:my-10 md:my-12 flex flex-col justify-center items-center z-10">
            <div className="w-72 sm:w-96 md:w-[460px] lg:w-[500px] h-[300px] sm:h-[380px] md:h-[460px] lg:h-[490px] max-w-full relative flex items-center justify-center">
              <InteractiveCube className="w-full h-full" />
            </div>
            {/* Subtle interactive hint */}
            <span className="text-[11px] sm:text-xs text-neutral-400 font-medium tracking-wide mt-1 select-none pointer-events-none flex items-center gap-1.5 opacity-60">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
              Hover or drag to rotate 3D matrix
            </span>
          </div>

          {/* Bottom 3 Statistic Cards with Smooth Count-Up Countdown Animation */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mt-6 sm:mt-10">
            {/* Card 1: $5M+ */}
            <div className="bg-white rounded-[24px] sm:rounded-[28px] border border-neutral-200/80 p-7 sm:p-9 md:p-10 text-left shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
              <div className="flex items-baseline tracking-[-0.03em] leading-none">
                <span className="text-[44px] sm:text-[52px] md:text-[62px] lg:text-[68px] font-bold text-[#0D0E11]">
                  <AnimatedCounter to={5} prefix="$" suffix="M" duration={1600} />
                </span>
                <span className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] text-neutral-400 font-normal ml-1">
                  +
                </span>
              </div>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#5F6368] mt-4 font-normal tracking-[-0.01em]">
                Performance Snapshot
              </p>
            </div>

            {/* Card 2: 250+ (Exact screenshot value with animated counter) */}
            <div className="bg-white rounded-[24px] sm:rounded-[28px] border border-neutral-200/80 p-7 sm:p-9 md:p-10 text-left shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
              <div className="flex items-baseline tracking-[-0.03em] leading-none">
                <span className="text-[44px] sm:text-[52px] md:text-[62px] lg:text-[68px] font-bold text-[#0D0E11]">
                  <AnimatedCounter to={250} duration={2000} />
                </span>
                <span className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] text-neutral-400 font-normal ml-1">
                  +
                </span>
              </div>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#5F6368] mt-4 font-normal tracking-[-0.01em]">
                Digital Reach
              </p>
            </div>

            {/* Card 3: 98% (Exact screenshot value with animated counter) */}
            <div className="bg-white rounded-[24px] sm:rounded-[28px] border border-neutral-200/80 p-7 sm:p-9 md:p-10 text-left shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
              <div className="flex items-baseline tracking-[-0.03em] leading-none">
                <span className="text-[44px] sm:text-[52px] md:text-[62px] lg:text-[68px] font-bold text-[#0D0E11]">
                  <AnimatedCounter to={98} duration={1800} />
                </span>
                <span className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] text-neutral-400 font-normal ml-1">
                  %
                </span>
              </div>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#5F6368] mt-4 font-normal tracking-[-0.01em]">
                Client Trust
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
