import React from 'react';
import { Sparkles } from 'lucide-react';
import { images } from '../assets/images';
import { Logoipsum } from './BrandLogos';

interface CaseStudySectionProps {
  onSeeCaseStudy?: () => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ onSeeCaseStudy }) => {
  return (
    <section id="case-study" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Eyebrow tag */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
            <Sparkles className="w-3 h-3 text-neutral-700" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
              CASE STUDY
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#111113] tracking-tight leading-tight">
            Proven Results, Real Impact
          </h2>
          <p className="mt-3 text-sm sm:text-[14.5px] text-neutral-500 leading-relaxed">
            Live dashboards and custom reports that surface the insights you need—instantly.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="mt-12 sm:mt-16 bg-[#F8F8FA] rounded-3xl sm:rounded-[36px] border border-neutral-200/80 p-6 sm:p-10 lg:p-12 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Textured Fabric Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-neutral-200/80 aspect-square bg-neutral-100 shadow-xs">
                <img
                  src={images.caseStudyFabric}
                  alt="Fresh Care tactile material texture in grayscale"
                  className="w-full h-full object-cover filter grayscale contrast-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right: Info & Metrics */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
              <div>
                <Logoipsum variant={3} className="h-6" />
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#111113] tracking-tight mt-4">
                  Fresh Care
                </h3>
                <p className="text-xs sm:text-[13.5px] text-neutral-500 mt-2.5 leading-relaxed max-w-lg">
                  Integrated AI-driven product recommendations based on real-time behavior and historical data.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      if (onSeeCaseStudy) onSeeCaseStudy();
                      else alert('Full Fresh Care case study dossier: 90% product retention rate achieved in 90 days.');
                    }}
                    className="bg-[#111113] hover:bg-neutral-800 text-white rounded-full px-6 py-2.5 text-xs sm:text-[13px] font-medium transition-all shadow-xs hover:shadow active:scale-98"
                  >
                    See Case Study
                  </button>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="pt-8 border-t border-neutral-200/60 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111113] tabular-nums">
                    90%
                  </div>
                  <p className="text-xs sm:text-[12.5px] text-neutral-500 mt-1 font-medium">
                    Average selling product
                  </p>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111113] tabular-nums">
                    43%
                  </div>
                  <p className="text-xs sm:text-[12.5px] text-neutral-500 mt-1 font-medium">
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
