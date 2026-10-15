import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';

interface PricingProps {
  onNavigate?: (page: 'home' | 'about' | 'pricing' | 'blog' | 'contact') => void;
}

const darkButtonStyle =
  'bg-gradient-to-b from-[#303030] via-[#171717] to-[#050505] text-white shadow-[0_3px_8px_rgba(0,0,0,0.25)]';

export const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<string | undefined>(undefined);

  const handleOpenModal = (interest?: string) => {
    setSelectedInterest(interest);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: billingCycle === 'monthly' ? '$999' : '$799',
      period: '/mo',
      description: 'Integrated AI-driven product recommendations based on real-time user behavior.',
      isPopular: false,
      features: [
        '1 Campaign',
        'Monthly Reports',
        'Email Support',
        'Priority Support',
        '4x Revisions',
      ],
      buttonStyle: 'bg-white text-neutral-900 border border-neutral-200/90 hover:bg-neutral-50',
    },
    {
      id: 'growth',
      name: 'Growth',
      price: billingCycle === 'monthly' ? '$2.999' : '$2.399',
      period: '/mo',
      description: 'Integrated AI-driven product recommendations based on real-time user behavior.',
      isPopular: true,
      popularTag: 'Most Popular',
      features: [
        '1 Campaign',
        'Monthly Reports',
        'Email Support',
        'Priority Support',
        '4x Revisions',
      ],
      buttonStyle: `${darkButtonStyle} hover:from-[#393939]`,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: billingCycle === 'monthly' ? '$3.200' : '$2.560',
      period: '/mo',
      description: 'Integrated AI-driven product recommendations based on real-time user behavior.',
      isPopular: false,
      features: [
        '1 Campaign',
        'Monthly Reports',
        'Email Support',
        'Priority Support',
        '4x Revisions',
      ],
      buttonStyle: 'bg-white text-neutral-900 border border-neutral-200/90 hover:bg-neutral-50',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. TOP NAVBAR */}
      <Navbar
        currentPage="pricing"
        onNavigate={onNavigate}
        onBookDemo={() => handleOpenModal('Pricing Demo')}
      />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* 2. HERO & PRICING PLANS SECTION */}
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f8f8f8] via-[#fbfbfb] to-white pt-12 sm:pt-16 pb-16 sm:pb-24">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[680px] w-full opacity-70"
            viewBox="0 0 1440 680"
            preserveAspectRatio="none"
            fill="none"
          >
            <path d="M-80 140C140 300 280 300 460 232C630 168 790 176 940 230C1110 292 1280 312 1520 132" stroke="white" strokeWidth="2" />
            <path d="M-80 164C140 324 280 324 460 256C630 192 790 200 940 254C1110 316 1280 336 1520 156" stroke="white" strokeWidth="2" />
            <path d="M-80 188C140 348 280 348 460 280C630 216 790 224 940 278C1110 340 1280 360 1520 180" stroke="white" strokeWidth="2" />
            <path d="M-80 212C140 372 280 372 460 304C630 240 790 248 940 302C1110 364 1280 384 1520 204" stroke="white" strokeWidth="2" />
            <path d="M-80 236C140 396 280 396 460 328C630 264 790 272 940 326C1110 388 1280 408 1520 228" stroke="white" strokeWidth="2" />
            <path d="M-80 260C140 420 280 420 460 352C630 288 790 296 940 350C1110 412 1280 432 1520 252" stroke="white" strokeWidth="2" />
            <path d="M-80 284C140 444 280 444 460 376C630 312 790 320 940 374C1110 436 1280 456 1520 276" stroke="white" strokeWidth="2" />
          </svg>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
            {/* Pill Eyebrow Badge matching screenshot */}
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-transform hover:scale-105">
                <svg
                  className="w-3.5 h-3.5 text-neutral-800"
                  viewBox="0 0 20 20"
                  fill="none"
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
                <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
                  PRICING
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="pricing-heading text-4xl sm:text-5xl md:text-[52px] leading-tight text-center max-w-3xl mx-auto">
              Flexible Plans for Every Stage
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base text-neutral-500 font-normal max-w-none mx-auto text-center leading-relaxed sm:whitespace-nowrap">
              We provide powerful, flexible and secure AI solutions—built for real business outcomes.
            </p>

            {/* Billing Toggle Switcher matching screenshot */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center p-1 bg-[#F1F2F4] rounded-full border border-neutral-200/50 shadow-2xs">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    billingCycle === 'monthly'
                      ? `${darkButtonStyle} rounded-full`
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    billingCycle === 'yearly'
                      ? 'bg-[#111113] text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Yearly — Most Popular
                </button>
              </div>
            </div>

            {/* 3 Pricing Cards Grid matching screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mt-12 sm:mt-16">
              {plans.map((plan) => (
                <article
                  key={plan.id}
                  tabIndex={0}
                  className={`feature-hover-card pricing-plan-card rounded-[22px] border border-white bg-[#f1f1f1] p-2 ${
                    plan.isPopular
                      ? 'ring-1 ring-neutral-300/80'
                      : ''
                  }`}
                >
                  <div className="feature-hover-card-inner flex h-full flex-col rounded-[16px] bg-[#f1f1f1] p-1.5">
                    <div className="rounded-[13px] border border-white/90 bg-gradient-to-b from-[#fafafa] to-[#f1f1f1] p-3.5 shadow-[inset_0_1px_0_#fff,0_2px_7px_rgba(0,0,0,0.08)] sm:p-4">
                      {/* Header Row */}
                      <div className="flex items-center justify-between min-h-[26px]">
                        <h3 className="text-[13px] font-semibold text-[#111113]">{plan.name}</h3>
                        {plan.isPopular && (
                          <span className={`${darkButtonStyle} rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold tracking-wide`}>
                            {plan.popularTag}
                          </span>
                        )}
                      </div>

                      {/* Price Display */}
                      <div className="mt-4 flex items-baseline tracking-tight">
                        <span className="text-3xl sm:text-4xl font-bold text-[#111113] tabular-nums">
                          {plan.price}
                        </span>
                        <span className="text-sm font-normal text-neutral-500 ml-1">
                          {plan.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-2 text-[11px] sm:text-xs text-neutral-500 leading-relaxed font-normal">
                        {plan.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <ul className="flex-1 space-y-2.5 px-2.5 py-4">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-[11px] sm:text-xs text-neutral-700 font-medium"
                        >
                          <svg
                            className="w-3.5 h-3.5 text-[#111113] shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                  {/* CTA Button */}
                  <div className="mt-auto px-0.5 pb-0.5">
                    <button
                      onClick={() => handleOpenModal(`${plan.name} Plan`)}
                      className={`w-full rounded-xl py-2.5 text-[11px] sm:text-xs font-semibold transition-all active:scale-98 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.12)] ${plan.buttonStyle}`}
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TESTIMONIALS SECTION (With exact bold badge & bottom shadow) */}
        <TestimonialsSection withHoverEffect />

        {/* 4. FREQUENTLY ASKED QUESTIONS SECTION */}
        <FAQSection onContactClick={() => handleOpenModal('Pricing Questions')} variant="pricing" />

        {/* 5. PRE-FOOTER CTA SECTION */}
        <FinalCTA onConsultationClick={() => handleOpenModal('Custom AI Plan Consultation')} />
      </main>

      {/* 6. FOOTER */}
      <Footer onNavigate={onNavigate} />

      {/* 7. DEMO & PLAN MODAL */}
      <DemoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialInterest={selectedInterest}
      />
    </div>
  );
};
