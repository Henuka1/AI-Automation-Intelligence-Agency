import { CaseStudyBadgeIcon, LogoipsumMark, ChipPillIcon } from './BrandLogos';
import { images } from '../assets/images';
import blogBackground from '../assets/images/blog_bg.png';
import { Sparkles, Cpu, Zap, Globe } from 'lucide-react';

interface CaseStudySectionProps {
  onSeeCaseStudy?: () => void;
}

const marqueeTags = [
  'CUSTOM AI DEVELOPMENT',
  'MACHINE LEARNING MODELS',
  'AUTOMATION & RPA',
  'NATURAL LANGUAGE PROCESSING (NLP)',
  'AI STRATEGY & CONSULTING',
  'CUSTOM AI DEVELOPMENT',
  'MACHINE LEARNING MODELS',
  'AUTOMATION & RPA',
];

const marqueeIcons = [ChipPillIcon, ChipPillIcon, Zap, Globe, Sparkles, ChipPillIcon, ChipPillIcon, Zap];

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ onSeeCaseStudy }) => {
  return (
    <section id="case-study" className="relative case-study-feature bg-white pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden">
      {/* Fully responsive background topographic wavy texture matching screenshot */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] sm:h-[540px] lg:h-[620px] z-0 overflow-hidden select-none [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
        aria-hidden="true"
      >
        <img
          src={blogBackground}
          alt=""
          className="w-full h-full object-cover object-top opacity-85"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Eyebrow Pill Badge: Circular Icon + CASE STUDY with soft drop shadow */}
        <div className="w-full flex justify-center mb-6 sm:mb-7">
          <div className="case-study-hero__badge inline-flex items-center gap-2.5 rounded-full select-none transition-transform hover:scale-102 duration-300">
            <div className="case-study-hero__badge-icon rounded-full bg-[#121214] flex items-center justify-center shrink-0">
              <CaseStudyBadgeIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="case-study-hero__badge-label uppercase pr-1">
              CASE STUDY
            </span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="case-study-hero__intro text-center max-w-4xl mx-auto">
          <h2 className="case-study-hero__title">
            Proven Results, Real Impact
          </h2>
          <p className="case-study-hero__description mt-3.5 sm:mt-4 max-w-3xl mx-auto">
            We provide powerful, flexible, and secure AI solutions—built for real business outcomes.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="case-study-card-wrapper mt-9 sm:mt-12 rounded-3xl sm:rounded-[36px]" tabIndex={0}>
          <div className="case-study-card-inner case-study-card bg-[#F8F8FA] rounded-3xl sm:rounded-[36px] border border-white p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04),inset_0_1px_0_#ffffff]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left: Textured Fabric Image */}
              <div className="lg:col-span-5">
                <div className="case-study-card__image rounded-2xl overflow-hidden border border-white aspect-square bg-neutral-100 shadow-xs">
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
                      className="case-study-card__button bg-[#111113] hover:bg-neutral-800 text-white rounded-full px-6 py-2.5 text-xs sm:text-[13px] font-medium transition-all shadow-xs hover:shadow active:scale-98 cursor-pointer"
                    >
                      See Case Study
                    </button>
                  </div>
                </div>

                {/* Metrics Row */}
                <div className="pt-8 border-t border-neutral-200/60 grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white rounded-2xl border border-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_0_#ffffff]">
                    <div className="case-study-metric__value text-3xl sm:text-4xl font-bold tracking-tight tabular-nums">
                      90%
                    </div>
                    <p className="case-study-metric__label text-xs sm:text-[12.5px] mt-1 font-medium text-neutral-500">
                      Average selling product
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_0_#ffffff]">
                    <div className="case-study-metric__value text-3xl sm:text-4xl font-bold tracking-tight tabular-nums">
                      43%
                    </div>
                    <p className="case-study-metric__label text-xs sm:text-[12.5px] mt-1 font-medium text-neutral-500">
                      Improved team output
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Pill Tags Marquee matching About Us section */}
        <div className="mt-8 sm:mt-12 overflow-hidden mask-marquee-edges select-none">
          <div className="animate-marquee-left flex items-center gap-4 py-2">
            {marqueeTags.concat(marqueeTags).map((tag, idx) => (
              <div
                key={`${tag}-${idx}`}
                className="about-marquee-pill inline-flex h-12 items-center gap-2.5 rounded-full border border-white bg-gradient-to-b from-white to-[#f1f1f1] px-5 text-[11px] font-semibold tracking-[0.08em] text-neutral-800 uppercase shrink-0 sm:text-xs"
              >
                {(() => {
                  const Icon = marqueeIcons[idx % marqueeIcons.length];
                  if (tag === 'AUTOMATION & RPA') {
                    return <Icon className="h-4 w-4 shrink-0 text-black fill-black" strokeWidth={1.5} aria-hidden="true" />;
                  }
                  if (tag === 'AI STRATEGY & CONSULTING') {
                    return <Icon className="h-4 w-4 shrink-0 text-black fill-black" strokeWidth={1.5} aria-hidden="true" />;
                  }
                  if (Icon === ChipPillIcon) {
                    return <Icon className="h-4 w-4 shrink-0 text-black" />;
                  }
                  return <Icon className="h-4.5 w-4.5 shrink-0 text-black" strokeWidth={2.2} aria-hidden="true" />;
                })()}
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
