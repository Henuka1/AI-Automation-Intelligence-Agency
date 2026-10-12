import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { Logoipsum } from './BrandLogos';
import { Avatar } from './Avatar';

export const TestimonialsSection: React.FC = () => {
  const topRow = testimonials.slice(0, 2);
  const bottomRow = testimonials.slice(2, 5);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Eyebrow badge matching reference screenshot */}
        <div className="text-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_4px_14px_rgba(0,0,0,0.15),0_1px_3px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:scale-105 select-none">
            {/* Overlapping rounded triangle and circle icon - bold stroke matching screenshot */}
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-black shrink-0"
            >
              <circle
                cx="13"
                cy="13"
                r="4.4"
                stroke="currentColor"
                strokeWidth="2.2"
              />
              <path
                d="M7.4 3.4C8 2.4 9.4 2.4 10 3.4L13.8 9.8C14.4 10.8 13.7 12 12.5 12H4.9C3.7 12 3 10.8 3.6 9.8L7.4 3.4Z"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[12.5px] font-bold tracking-[-0.01em] uppercase text-black">
              TESTIMONIALS
            </span>
          </div>
        </div>

        {/* Heading with vertical fade gradient matching reference screenshot */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-[-0.03em] leading-[1.15]">
            <span className="bg-gradient-to-b from-[#555963] via-[#2A2D35] to-[#0B0C0E] bg-clip-text text-transparent inline-block">
              What Our Clients Say
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-[15px] text-neutral-500 leading-relaxed font-normal tracking-[-0.01em]">
            Live dashboards and custom reports that surface the insights you need—instantly.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="mt-12 sm:mt-16 space-y-6">
          {/* Top Row: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topRow.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl sm:rounded-[22px] border border-neutral-200/80 p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-0.5"
              >
                <div>
                  <div className="mb-4">
                    <Logoipsum variant={((idx % 5) + 1) as 1 | 2 | 3 | 4 | 5} className="h-5" />
                  </div>
                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                    {item.quote}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar src={item.avatar} name={item.author} className="w-9 h-9" />
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-semibold text-[#111113]">
                        {item.author}
                      </h4>
                      <p className="text-[11px] text-neutral-400">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[#111113] text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-current text-neutral-900" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottomRow.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl sm:rounded-[22px] border border-neutral-200/80 p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-0.5"
              >
                <div>
                  <div className="mb-4">
                    <Logoipsum variant={(((idx + 2) % 5) + 1) as 1 | 2 | 3 | 4 | 5} className="h-5" />
                  </div>
                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                    {item.quote}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar src={item.avatar} name={item.author} className="w-9 h-9" />
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-semibold text-[#111113]">
                        {item.author}
                      </h4>
                      <p className="text-[11px] text-neutral-400">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[#111113] text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-current text-neutral-900" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
