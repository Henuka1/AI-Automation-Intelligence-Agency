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
      buttonStyle: 'bg-[#111113] text-white hover:bg-neutral-800 shadow-xs',
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
        <section className="pt-12 sm:pt-16 pb-16 sm:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Pill Eyebrow Badge matching screenshot */}
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-transform hover:scale-105">
                <svg
                  className="w-3.5 h-3.5 text-neutral-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                  <path d="M7 7h.01" />
                </svg>
                <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
                  PRICING
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-[54px] font-medium text-[#111113] tracking-tight leading-tight text-center max-w-3xl mx-auto">
              Flexible Plans for Every Stage
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base text-neutral-500 font-normal max-w-xl mx-auto text-center leading-relaxed">
              We provide powerful, flexible, and secure AI solutions—built for real business outcomes.
            </p>

            {/* Billing Toggle Switcher matching screenshot */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center p-1 bg-[#F1F2F4] rounded-full border border-neutral-200/50 shadow-2xs">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    billingCycle === 'monthly'
                      ? 'bg-[#111113] text-white shadow-xs'
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
                <div
                  key={plan.id}
                  className={`bg-white rounded-3xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 ${
                    plan.isPopular
                      ? 'border-neutral-300 shadow-[0_4px_24px_rgba(0,0,0,0.04)] ring-1 ring-neutral-200/80'
                      : 'border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)]'
                  }`}
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between min-h-[26px]">
                      <h3 className="text-base font-semibold text-[#111113]">{plan.name}</h3>
                      {plan.isPopular && (
                        <span className="bg-[#111113] text-white text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full tracking-wide">
                          {plan.popularTag}
                        </span>
                      )}
                    </div>

                    {/* Price Display */}
                    <div className="mt-4 flex items-baseline tracking-tight">
                      <span className="text-4xl sm:text-5xl font-bold text-[#111113] tabular-nums">
                        {plan.price}
                      </span>
                      <span className="text-sm font-normal text-neutral-500 ml-1">
                        {plan.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-[13px] text-neutral-500 leading-relaxed font-normal">
                      {plan.description}
                    </p>

                    <div className="my-6 border-t border-neutral-100" />

                    {/* Features List */}
                    <ul className="space-y-3.5">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2.5 text-xs sm:text-[13px] text-neutral-700 font-medium"
                        >
                          <svg
                            className="w-4 h-4 text-[#111113] shrink-0"
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
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-2">
                    <button
                      onClick={() => handleOpenModal(`${plan.name} Plan`)}
                      className={`w-full rounded-full py-2.5 text-xs sm:text-[13px] font-semibold transition-all active:scale-98 cursor-pointer ${plan.buttonStyle}`}
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TESTIMONIALS SECTION (With exact bold badge & bottom shadow) */}
        <TestimonialsSection />

        {/* 4. FREQUENTLY ASKED QUESTIONS SECTION */}
        <FAQSection onContactClick={() => handleOpenModal('Pricing Questions')} />

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
