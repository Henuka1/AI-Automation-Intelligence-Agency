import React from 'react';
import { Sparkles } from 'lucide-react';
import { pricingPlans } from '../data/pricing';

interface PricingSectionProps {
  onSelectPlan?: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Eyebrow tag */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
            <Sparkles className="w-3 h-3 text-neutral-700" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
              PRICING
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#111113] tracking-tight leading-tight">
            Flexible Plans for Every Stage
          </h2>
          <p className="mt-3 text-sm sm:text-[14.5px] text-neutral-500 leading-relaxed">
            Live dashboards and custom reports that surface the insights you need—instantly.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mt-12 sm:mt-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                plan.isPopular
                  ? 'border-neutral-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)] ring-1 ring-neutral-200'
                  : 'border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-neutral-300'
              }`}
            >
              <div>
                {/* Header row with Popular badge */}
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-[#111113]">
                    {plan.name}
                  </h3>
                  {plan.isPopular && (
                    <span className="bg-[#111113] text-white text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full tracking-wide">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111113] tabular-nums">
                    {plan.price}
                  </span>
                  <span className="text-sm font-normal text-neutral-500">
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-[12.5px] text-neutral-500 mt-3 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="mt-7 space-y-3 pt-6 border-t border-neutral-100 text-xs sm:text-[13px] text-neutral-700">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6">
                <button
                  onClick={() => {
                    if (onSelectPlan) onSelectPlan(plan.id);
                    else alert(`Selected ${plan.name} plan (${plan.price}). Proceeding to checkout.`);
                  }}
                  className={`w-full py-2.5 px-4 rounded-full text-xs sm:text-[13px] font-medium transition-all shadow-xs active:scale-98 ${
                    plan.isPopular
                      ? 'bg-[#111113] hover:bg-neutral-800 text-white shadow-xs hover:shadow'
                      : 'bg-white hover:bg-neutral-50 border border-neutral-250 text-neutral-850'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
