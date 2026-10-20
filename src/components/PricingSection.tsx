import React from 'react';
import { pricingPlans } from '../data/pricing';

interface PricingSectionProps {
  onSelectPlan?: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="border-t border-neutral-200 bg-white py-16 text-neutral-900 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Eyebrow tag */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-[7px] rounded-full border border-neutral-300 bg-white px-[14px] py-[6px] shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
            <svg
              className="h-[14px] w-[14px] text-neutral-700"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12.5" cy="12.5" r="4.5" />
              <path d="M7.8 3.5a1.5 1.5 0 0 1 2.6 0l4.3 7.2a1.5 1.5 0 0 1-1.3 2.3H4.8a1.5 1.5 0 0 1-1.3-2.3z" />
            </svg>
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-700">
              PRICING
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-0.04em] text-neutral-900 sm:text-[36px]">
            Flexible Plans for Every Stage
          </h2>
          <p className="mt-3 text-[11px] leading-relaxed text-neutral-600 sm:text-[13px]">
            Live dashboards and custom reports that surface the insights you need—instantly.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-5 sm:gap-6 mt-12 sm:mt-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex min-h-[500px] flex-col rounded-[18px] border border-neutral-200 bg-[#f7f7f7] p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(0,0,0,0.12)] ${
                plan.isPopular
                  ? 'ring-1 ring-neutral-300 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_8px_20px_rgba(0,0,0,0.12)]'
                  : 'shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_8px_20px_rgba(0,0,0,0.1)]'
              }`}
            >
            <div className="flex h-full flex-col rounded-[13px] bg-[#f7f7f7] p-1">
              <div className="min-h-[185px] rounded-[13px] border border-neutral-200 bg-gradient-to-b from-white to-[#f0f0f0] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_7px_rgba(0,0,0,0.08)] sm:p-4">
                {/* Header row with Popular badge */}
                <div className="flex min-h-[26px] items-center justify-between">
                  <h3 className="text-[13px] font-semibold text-neutral-900">
                    {plan.name}
                  </h3>
                  {plan.isPopular && (
                    <span className="rounded-full bg-neutral-900 px-2.5 py-0.5 text-[10.5px] font-semibold tracking-wide text-white">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-1 tracking-tight">
                  <span className="text-[34px] font-bold leading-none text-neutral-950 tabular-nums sm:text-[38px]">
                    {plan.price}
                  </span>
                  <span className="text-sm font-normal text-neutral-500">
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-2 text-[11px] font-normal leading-relaxed text-neutral-600 sm:text-xs">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="flex flex-1 flex-col justify-between px-2.5 py-4 text-[13px] font-normal text-neutral-700 sm:text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <svg
                      className="h-4 w-4 shrink-0 text-neutral-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
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

              {/* Action Button */}
              <div className="mt-auto px-0.5 pb-0.5">
                <button
                  onClick={() => {
                    if (onSelectPlan) onSelectPlan(plan.id);
                    else alert(`Selected ${plan.name} plan (${plan.price}). Proceeding to checkout.`);
                  }}
                  className={`w-full rounded-xl px-4 py-2.5 text-[11px] font-semibold transition-all shadow-[0_2px_8px_rgba(0,0,0,0.12)] active:scale-98 sm:text-xs ${
                    plan.isPopular
                      ? 'bg-neutral-900 text-white hover:bg-neutral-700'
                      : 'border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
