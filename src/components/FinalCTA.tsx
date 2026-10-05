import React from 'react';

interface FinalCTAProps {
  onConsultationClick?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onConsultationClick }) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F8F8FA] rounded-3xl sm:rounded-[36px] border border-neutral-200/80 p-8 sm:p-12 md:p-14 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Left Text */}
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-900 opacity-30" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-900" />
              </span>
              <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
                AI AUTOMATION FOR BUSINESSES
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-medium text-[#111113] tracking-tight leading-snug">
              Let&apos;s Build the Future, Together
            </h2>

            <p className="text-xs sm:text-[13.5px] text-neutral-500 leading-relaxed">
              Whether you&apos;re exploring AI for the first time or scaling an existing system, we&apos;re ready to help.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0">
            <button
              onClick={() => {
                if (onConsultationClick) onConsultationClick();
                else document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#111113] hover:bg-neutral-800 text-white rounded-full px-7 py-3 text-xs sm:text-[13.5px] font-medium transition-all shadow-xs hover:shadow active:scale-98 whitespace-nowrap"
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
