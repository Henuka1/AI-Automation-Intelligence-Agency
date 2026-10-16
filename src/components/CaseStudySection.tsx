import React from 'react';
import { FeatureBadgeIcon, LogoipsumMark } from './BrandLogos';
import { images } from '../assets/images';

interface CaseStudySectionProps {
  onSeeCaseStudy?: () => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ onSeeCaseStudy }) => {
  return (
    <section id="case-study" className="case-study-feature bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Eyebrow tag */}
        <div className="text-center mb-6">
          <div className="case-study-feature__badge inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5">
            <FeatureBadgeIcon className="h-4 w-4 text-neutral-800" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
              CASE STUDY
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="case-study-feature__intro text-center max-w-2xl mx-auto">
          <h2 className="case-study-feature__title font-semibold">
            Proven Results, Real Impact
          </h2>
          <p className="case-study-feature__description mt-4 text-sm sm:text-base leading-relaxed">
            Live dashboards and custom reports that surface the insights you need—instantly.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="case-study-card mt-12 sm:mt-16 bg-[#F8F8FA] rounded-3xl sm:rounded-[36px] border border-neutral-200/80 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Textured Fabric Image */}
            <div className="lg:col-span-5">
              <div className="case-study-card__image rounded-2xl overflow-hidden border border-neutral-200/80 aspect-square bg-neutral-100 shadow-xs">
                <img
                  src={images.caseStudyFabric}
                  alt="Fresh Care tactile material texture"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right: Info & Metrics */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
              <div>
                <LogoipsumMark className="case-study-card__logo h-8" />
                <h3 className="case-study-card__heading text-2xl sm:text-3xl font-semibold mt-4">
                  Fresh Care
                </h3>
                <p className="case-study-card__copy text-xs sm:text-[13.5px] mt-2.5 leading-relaxed max-w-lg">
                  Integrated AI-driven product recommendations based on real-time behavior and historical data.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      if (onSeeCaseStudy) onSeeCaseStudy();
                      else alert('Full Fresh Care case study dossier: 90% product retention rate achieved in 90 days.');
                    }}
                    className="case-study-card__button bg-[#111113] hover:bg-neutral-800 text-white rounded-full px-6 py-2.5 text-xs sm:text-[13px] font-medium transition-all shadow-xs hover:shadow active:scale-98"
                  >
                    See Case Study
                  </button>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="pt-8 border-t border-neutral-200/60 grid grid-cols-2 gap-4 sm:gap-6">
                <div className="case-study-metric">
                  <div className="case-study-metric__value text-3xl sm:text-4xl font-bold tracking-tight tabular-nums">
                    90%
                  </div>
                  <p className="case-study-metric__label text-xs sm:text-[12.5px] mt-1 font-medium">
                    Average selling product
                  </p>
                </div>

                <div className="case-study-metric">
                  <div className="case-study-metric__value text-3xl sm:text-4xl font-bold tracking-tight tabular-nums">
                    43%
                  </div>
                  <p className="case-study-metric__label text-xs sm:text-[12.5px] mt-1 font-medium">
                    Improved team output
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
