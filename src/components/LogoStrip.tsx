import React from 'react';
import {
  LogoipsumBear,
  LogoipsumClover,
  LogoipsumSunburst,
  LogoipsumBolt,
} from './BrandLogos';

export const LogoStrip: React.FC = () => {
  // Exact logo list and sequence matching user's screenshot:
  // 1. logo bear ipsum™
  // 2. circle clover Logoipsum
  // 3. sunburst 12 rays Logoipsum
  // 4. circle bolt Logoipsum
  // 5. circle clover Logoipsum
  const logos = [
    { id: 'bear-1', Component: LogoipsumBear },
    { id: 'clover-1', Component: LogoipsumClover },
    { id: 'sunburst-1', Component: LogoipsumSunburst },
    { id: 'bolt-1', Component: LogoipsumBolt },
    { id: 'clover-2', Component: LogoipsumClover },
  ];

  return (
    <section className="relative w-full pt-8 pb-3 sm:pt-10 sm:pb-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title matching screenshot: "Trusted by 2.200 Companies" */}
        <p className="text-center text-[15px] sm:text-[16px] font-normal text-[#16171A] tracking-[-0.01em] mb-8 sm:mb-10">
          Trusted by 2.200 Companies
        </p>

        {/* Infinite marquee ticker container with left and right gradient fade masks matching screenshot */}
        <div className="relative w-full overflow-hidden mask-marquee-edges">
          <div className="animate-marquee-left flex items-center gap-14 sm:gap-20 md:gap-24 select-none py-2">
            {/* First set of logos in exact screenshot order */}
            {logos.map(({ id, Component }) => (
              <div
                key={id}
                className="flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-105 cursor-pointer"
              >
                <Component />
              </div>
            ))}

            {/* Second set of logos for seamless continuous loop */}
            {logos.map(({ id, Component }) => (
              <div
                key={`dup-${id}`}
                className="flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-105 cursor-pointer"
              >
                <Component />
              </div>
            ))}

            {/* Third set of logos to ensure ultra-wide screens are completely filled */}
            {logos.map(({ id, Component }) => (
              <div
                key={`trip-${id}`}
                className="flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-105 cursor-pointer"
              >
                <Component />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
