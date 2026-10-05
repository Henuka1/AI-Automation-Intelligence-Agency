import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { faqsData } from '../data/faqs';

interface FAQSectionProps {
  onContactClick?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onContactClick }) => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Title & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
                <Sparkles className="w-3 h-3 text-neutral-700" />
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-medium text-[#111113] tracking-tight leading-[1.18]">
              Questions? We&apos;re
              <br />
              here to assist!
            </h2>

            <p className="text-xs sm:text-[13.5px] text-neutral-500 leading-relaxed max-w-sm">
              Position your brand at the forefront, leading trends, captivating audiences, and creating lasting market impressions.
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  if (onContactClick) onContactClick();
                  else alert('Contacting Axonix team: hello@axonix.com / +117 2345 6948');
                }}
                className="bg-[#111113] hover:bg-neutral-800 text-white rounded-full px-6 py-2.5 text-xs sm:text-sm font-medium transition-all shadow-xs hover:shadow active:scale-98"
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
                      ? 'bg-[#111113] text-white border-neutral-900 shadow-sm'
                      : 'bg-[#F8F8FA] hover:bg-[#F2F2F5] text-neutral-900 border-neutral-200/70'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-[14px]"
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
