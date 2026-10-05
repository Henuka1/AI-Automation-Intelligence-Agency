import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-white border border-neutral-200 shadow-[0_1px_2px_rgba(0,0,0,0.03)] mb-8">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
            ABOUT US
          </span>
        </div>

        {/* Highlighted text block */}
        <p className="text-2xl sm:text-3xl md:text-[34px] leading-[1.35] tracking-tight font-sans">
          <span className="text-[#111113] font-medium">
            We are a forward-thinking AI agency focused on transforming businesses with intelligent automation, machine learning, and predictive analytics.{' '}
          </span>
          <span className="text-neutral-400 font-normal">
            Our team of data scientists, engineers, and creatives craft tailored AI solutions that solve real-world challenges across industries.
          </span>
        </p>
      </div>
    </section>
  );
};
