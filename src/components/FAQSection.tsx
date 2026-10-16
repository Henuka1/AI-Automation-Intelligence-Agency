import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { faqsData } from '../data/faqs';

interface FAQSectionProps {
  onContactClick?: () => void;
  variant?: 'pricing';
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onContactClick, variant }) => {
  const isPricingVariant = variant === 'pricing';
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className={`py-16 sm:py-24 bg-white border-t border-neutral-100 ${
        isPricingVariant ? '[font-family:Inter,system-ui,sans-serif]' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Title & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
                {isPricingVariant ? (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 text-black shrink-0"
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
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <Sparkles className="w-3 h-3 text-neutral-700" />
                )}
                <span className={`${isPricingVariant ? 'font-[Inter] text-[11.5px] font-bold tracking-normal' : 'text-[11px] font-semibold tracking-[0.14em]'} uppercase text-neutral-800`}>
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </div>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-medium tracking-tight leading-[1.18] ${isPricingVariant ? 'pricing-heading' : 'text-[#111113]'}`}>
              Questions? We&apos;re
              <br />
              here to assist!
            </h2>

            <p className={`text-xs sm:text-[13.5px] text-neutral-500 leading-relaxed max-w-sm ${isPricingVariant ? 'text-[14px]' : ''}`}>
              Position your brand at the forefront, leading trends, captivating audiences, and creating lasting market impressions.
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  if (onContactClick) onContactClick();
                  else alert('Contacting Axonix team: hello@axonix.com / +117 2345 6948');
                }}
                className={isPricingVariant
                  ? 'w-36 h-[45px] rounded-[10px] bg-gradient-to-b from-[#303030] via-[#171717] to-[#050505] text-white text-[13px] font-semibold transition-all shadow-[0_7px_14px_rgba(0,0,0,0.24)] hover:from-[#393939] hover:shadow-[0_9px_18px_rgba(0,0,0,0.28)] active:scale-98'
                  : 'bg-[#111113] hover:bg-neutral-800 text-white rounded-full px-6 py-2.5 text-xs sm:text-sm font-medium transition-all shadow-xs hover:shadow active:scale-98'}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqsData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? isPricingVariant
                        ? 'bg-gradient-to-b from-[#303030] via-[#171717] to-[#050505] text-white border-neutral-900 shadow-[0_8px_16px_rgba(0,0,0,0.2)]'
                        : 'bg-[#111113] text-white border-neutral-900 shadow-sm'
                      : isPricingVariant
                        ? 'bg-gradient-to-b from-[#FAFAFA] to-[#F1F1F1] hover:from-[#F5F5F5] hover:to-[#ECECEC] text-neutral-900 border-neutral-200/70 shadow-[0_7px_14px_rgba(0,0,0,0.12)]'
                        : 'bg-[#F8F8FA] hover:bg-[#F2F2F5] text-neutral-900 border-neutral-200/70'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-[14px] ${isPricingVariant ? 'sm:py-[17px]' : ''}`}
                  >
                    <span className={isOpen ? 'text-white' : 'text-[#111113]'}>
                      {item.question}
                    </span>
                    <span className="shrink-0 p-1">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-neutral-300" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-neutral-500" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-[13px] text-neutral-300 leading-relaxed border-t border-neutral-800">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
