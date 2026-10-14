import React from 'react';
import { Cpu } from 'lucide-react';

interface FinalCTAProps {
  onConsultationClick?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onConsultationClick }) => {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[270px] flex-col justify-between gap-7 overflow-hidden rounded-[24px] border border-white bg-gradient-to-b from-[#fafafa] to-[#f1f1f1] px-6 py-8 shadow-[inset_0_1px_0_#fff,0_2px_8px_rgba(0,0,0,0.06),0_14px_26px_rgba(0,0,0,0.05)] sm:rounded-[26px] sm:px-10 sm:py-9 md:flex-row md:items-center md:px-12 lg:px-[50px]">
          {/* Left Text */}
          <div className="min-w-0 max-w-[980px] space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white bg-gradient-to-b from-white to-[#f0f0f0] px-3 py-1.5 shadow-[inset_0_1px_0_#fff,0_1px_2px_rgba(0,0,0,0.06),0_6px_14px_rgba(0,0,0,0.08)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111113] text-white shadow-[0_2px_5px_rgba(0,0,0,0.22)]">
                <Cpu className="h-3.5 w-3.5" strokeWidth={2.2} />
              </span>
              <span className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#23252b]">
                AI AUTOMATION FOR BUSINESSES
              </span>
            </div>

            <h2 className="hero-gradient-headline pb-[0.08em] text-[34px] font-semibold leading-[1.12] tracking-[-0.05em] sm:text-[40px] md:text-[44px] lg:text-[46px]">
              Let&apos;s Build the Future, Together
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[1.45] text-[#4d4f56] sm:text-[17px] md:whitespace-nowrap">
              Whether you&apos;re exploring AI for the first time or scaling an existing system, we&apos;re ready to help.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 md:pl-8">
            <button
              onClick={() => {
                if (onConsultationClick) onConsultationClick();
                else document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="whitespace-nowrap rounded-[14px] bg-gradient-to-b from-[#2b2b2d] to-[#111113] px-6 py-4 text-[14px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_20px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-0.5 hover:from-[#303134] hover:to-[#16171a] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_14px_28px_rgba(0,0,0,0.28)] active:scale-[0.98] sm:px-7 sm:py-4 sm:text-[15px]"
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
