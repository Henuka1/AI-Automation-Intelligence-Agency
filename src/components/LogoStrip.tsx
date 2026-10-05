import React from 'react';
import { Logoipsum } from './BrandLogos';

export const LogoStrip: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 border-b border-neutral-100/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs sm:text-[13px] font-medium text-neutral-500 tracking-normal mb-8">
          Trusted by 2,200 Companies
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-20 opacity-80 hover:opacity-100 transition-opacity">
          <Logoipsum variant={1} className="h-6" />
          <Logoipsum variant={2} className="h-6" />
          <Logoipsum variant={3} className="h-6" />
          <Logoipsum variant={4} className="h-6" />
          <Logoipsum variant={5} className="h-6" />
        </div>
      </div>
    </section>
  );
};
