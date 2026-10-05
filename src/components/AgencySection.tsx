import React from 'react';
import { Sparkles, BarChart3 } from 'lucide-react';
import { Avatar } from './Avatar';

export const AgencySection: React.FC = () => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Eyebrow tag */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
            <Sparkles className="w-3 h-3 text-neutral-700" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
              OUR FEATURES
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#111113] tracking-tight leading-tight">
            Partner with an AI agency,
            <br />
            delivering smart solutions.
          </h2>
          <p className="mt-3 text-sm sm:text-[15px] text-neutral-500 leading-relaxed">
            We&apos;ve partnered with companies in finance, healthcare, e-commerce, and more to deliver transformative AI solutions.
          </p>
        </div>

        {/* 3 Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16">
          {/* Card 1: Real-Time Analytics with circular gauge */}
          <div className="bg-white rounded-3xl border border-neutral-200/80 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all hover:border-neutral-300">
            <div className="bg-[#F8F8FA] rounded-2xl p-6 min-h-[220px] flex items-center justify-center relative overflow-hidden">
              {/* Circular gauge graphic */}
              <div className="relative w-36 h-36 flex items-center justify-center">
                {/* Outer radial ticks ring */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="4"
                    strokeDasharray="3 3"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#111113"
                    strokeWidth="5"
                    strokeDasharray="180 280"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="34"
                    fill="none"
                    stroke="#D1D5DB"
                    strokeWidth="1.5"
                    strokeDasharray="2 4"
                  />
                </svg>

                {/* Center black disk with bar chart icon */}
                <div className="absolute w-14 h-14 rounded-full bg-[#111113] text-white flex items-center justify-center shadow-md">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <div className="pt-5 px-1 pb-1">
              <h3 className="text-[17px] font-semibold text-[#111113] tracking-tight">
                Real-Time Analytics
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-500 mt-1.5 leading-relaxed">
                Stay ahead with accurate, real-time performance tracking.
              </p>
            </div>
          </div>

          {/* Card 2: AI-Driven Growth with metric & bar chart */}
          <div className="bg-white rounded-3xl border border-neutral-200/80 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all hover:border-neutral-300">
            <div className="bg-[#F8F8FA] rounded-2xl p-5 min-h-[220px] flex flex-col justify-between relative">
              {/* Top tags */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium bg-white border border-neutral-200/80 rounded-full px-2.5 py-0.5 text-neutral-700 shadow-2xs">
                  20% Automation
                </span>
                <span className="text-[11px] font-medium bg-white border border-neutral-200/80 rounded-full px-2.5 py-0.5 text-neutral-700 shadow-2xs">
                  95% Authorized
                </span>
              </div>

              {/* Middle metric */}
              <div className="my-2">
                <span className="text-[11px] font-semibold text-neutral-600 block">
                  +12.8%
                </span>
                <span className="text-3xl font-bold tracking-tight text-[#111113] tabular-nums">
                  3.18K
                </span>
              </div>

              {/* Vertical bar chart */}
              <div className="flex items-end justify-between gap-1.5 h-16 pt-2 border-t border-neutral-200/40">
                <div className="w-3 bg-neutral-300 rounded-t-sm h-[35%]" />
                <div className="w-3 bg-neutral-300 rounded-t-sm h-[50%]" />
                <div className="w-3 bg-neutral-400 rounded-t-sm h-[42%]" />
                <div className="w-3 bg-neutral-400 rounded-t-sm h-[65%]" />
                <div className="w-3 bg-[#111113] rounded-t-sm h-[85%]" />
                <div className="w-3 bg-[#111113] rounded-t-sm h-[95%]" />
                <div className="w-3 bg-[#111113] rounded-t-sm h-[75%]" />
                <div className="w-3 bg-neutral-300 rounded-t-sm h-[45%]" />
              </div>
            </div>

            <div className="pt-5 px-1 pb-1">
              <h3 className="text-[17px] font-semibold text-[#111113] tracking-tight">
                AI-Driven Growth
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-500 mt-1.5 leading-relaxed">
                Make smarter moves with accurate, real-time business insights.
              </p>
            </div>
          </div>

          {/* Card 3: Superfast AI response with chat UI snippet */}
          <div className="bg-white rounded-3xl border border-neutral-200/80 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all hover:border-neutral-300">
            <div className="bg-[#F8F8FA] rounded-2xl p-4 min-h-[220px] flex flex-col justify-center gap-3">
              {/* User snippet */}
              <div className="bg-white rounded-2xl p-3 border border-neutral-200/80 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2">
                  <Avatar name="Ash Gley" className="w-5 h-5 text-[10px]" />
                  <span className="text-[11px] font-semibold text-neutral-900">Ash Gley</span>
                </div>
                <p className="text-[11.5px] text-neutral-600 pl-7 leading-snug">
                  Give me the total profit for this week
                </p>
              </div>

              {/* Bot snippet */}
              <div className="bg-white rounded-2xl p-3 border border-neutral-200/80 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#111113] text-white flex items-center justify-center text-[10px] font-bold">
                    A
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-900">Axonix</span>
                </div>
                <p className="text-[11.5px] text-neutral-600 pl-7 leading-snug">
                  Okay according to your request, I will make a profit recap for this week. Just a moment...
                </p>
              </div>
            </div>

            <div className="pt-5 px-1 pb-1">
              <h3 className="text-[17px] font-semibold text-[#111113] tracking-tight">
                Superfast AI response
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-500 mt-1.5 leading-relaxed">
                Discover how AI can enhance every aspect of your web design workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
