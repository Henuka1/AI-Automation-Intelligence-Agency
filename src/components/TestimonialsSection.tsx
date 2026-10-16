import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { LogoipsumMark } from './BrandLogos';
import { Avatar } from './Avatar';

interface TestimonialsSectionProps {
  withHoverEffect?: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ withHoverEffect = false }) => {
  const topRow = testimonials.slice(0, 2);
  const bottomRow = testimonials.slice(2, 5);

  return (
    <section id="testimonials" className="testimonials-feature bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Eyebrow badge matching reference screenshot */}
        <div className="text-center mb-5 sm:mb-6">
          <div className="testimonials-feature__badge inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 select-none">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-black shrink-0"
              aria-hidden="true"
            >
              <circle cx="13" cy="13" r="4.4" stroke="currentColor" strokeWidth="2.2" />
              <path
                d="M7.4 3.4C8 2.4 9.4 2.4 10 3.4L13.8 9.8C14.4 10.8 13.7 12 12.5 12H4.9C3.7 12 3 10.8 3.6 9.8L7.4 3.4Z"
                fill="white"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-black">
              TESTIMONIALS
            </span>
          </div>
        </div>

        {/* Heading with vertical fade gradient matching reference screenshot */}
        <div className="testimonials-feature__intro text-center max-w-2xl mx-auto">
          <h2 className="testimonials-feature__title font-semibold">
            What Our Clients Say
          </h2>
          <p className="testimonials-feature__description mt-4 text-sm sm:text-base leading-relaxed font-normal">
            Live dashboards and custom reports that surface the insights you need—instantly.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="mt-12 sm:mt-16 space-y-6">
          {/* Top Row: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topRow.map((item, idx) => (
              <article
                key={item.id}
                tabIndex={withHoverEffect ? 0 : undefined}
                className={withHoverEffect ? 'feature-hover-card rounded-[22px]' : undefined}
              >
                <div className={`testimonial-card bg-white rounded-2xl sm:rounded-[22px] border border-neutral-200/80 p-6 sm:p-7 flex flex-col justify-between ${withHoverEffect ? 'feature-hover-card-inner' : ''}`}>
                  <div>
                    <div className="testimonial-card__brand mb-5">
                      <LogoipsumMark className="h-7" />
                    </div>
                    <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                      {item.quote}
                    </p>
                  </div>

                  <div className="testimonial-card__author mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between">
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
              </article>
            ))}
          </div>

          {/* Bottom Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottomRow.map((item, idx) => (
              <article
                key={item.id}
                tabIndex={withHoverEffect ? 0 : undefined}
                className={withHoverEffect ? 'feature-hover-card rounded-[22px]' : undefined}
              >
                <div className={`testimonial-card bg-white rounded-2xl sm:rounded-[22px] border border-neutral-200/80 p-6 sm:p-7 flex flex-col justify-between ${withHoverEffect ? 'feature-hover-card-inner' : ''}`}>
                  <div>
                    <div className="testimonial-card__brand mb-5">
                      <LogoipsumMark className="h-7" />
                    </div>
                    <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                      {item.quote}
                    </p>
                  </div>

                  <div className="testimonial-card__author mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between">
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
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
