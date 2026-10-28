import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import blogBackground from '../assets/images/blog_bg.png';

interface PricingProps {
  onNavigate?: (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' |  'privacy' | '404') => void;
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

      <main className="flex-1">
        {/* 2. HERO & PRICING PLANS SECTION */}
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#fbfbfb] via-[#f8f8f9] to-white pt-36 sm:pt-44 pb-16 sm:pb-24">
          {/* Fully responsive background topographic wavy texture */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[560px] sm:h-[620px] md:h-[680px] z-0 overflow-hidden select-none [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] flex justify-center"
            aria-hidden="true"
          >
            <img
              src={blogBackground}
              alt=""
              className="w-full h-full object-cover object-top opacity-85 min-w-[750px] sm:min-w-full"
            />
          </div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-5 sm:gap-6 mt-12 sm:mt-16">
              {plans.map((plan) => (
                <article
                  key={plan.id}
                  tabIndex={0}
                  className={`feature-hover-card pricing-plan-card min-h-[330px] rounded-[18px] border border-white bg-[#f1f1f1] p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.035),0_8px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_14px_28px_rgba(0,0,0,0.1)] ${
                    plan.isPopular
                      ? 'ring-1 ring-neutral-300/80'
                      : ''
                  }`}
                >
                  <div className="feature-hover-card-inner flex h-full flex-col rounded-[13px] bg-[#f1f1f1] p-1">
                    <div className="min-h-[138px] rounded-[13px] border border-white/90 bg-gradient-to-b from-[#fafafa] to-[#f1f1f1] p-3.5 shadow-[inset_0_1px_0_#fff,0_2px_7px_rgba(0,0,0,0.08)] sm:p-4">
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
                      <div className="mt-3 flex items-baseline tracking-tight">
                        <span className="text-[34px] sm:text-[38px] font-bold leading-none text-[#111113] tabular-nums">
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
                    <ul className="flex-1 space-y-2.5 px-2.5 py-4.5">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-[11px] sm:text-xs text-neutral-700 font-normal"
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
