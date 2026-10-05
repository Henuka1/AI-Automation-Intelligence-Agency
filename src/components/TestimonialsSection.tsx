import React from 'react';
import { Sparkles, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { Logoipsum } from './BrandLogos';
import { Avatar } from './Avatar';

export const TestimonialsSection: React.FC = () => {
  const topRow = testimonials.slice(0, 2);
  const bottomRow = testimonials.slice(2, 5);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Eyebrow tag */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
            <Sparkles className="w-3 h-3 text-neutral-700" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
              TESTIMONIALS
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#111113] tracking-tight leading-tight">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-sm sm:text-[14.5px] text-neutral-500 leading-relaxed">
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
                className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all hover:border-neutral-300"
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
                className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all hover:border-neutral-300"
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
