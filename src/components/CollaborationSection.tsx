import React from 'react';
import { Sparkles, GitBranch, ShieldCheck, Headphones } from 'lucide-react';
import { images } from '../assets/images';
import { Avatar } from './Avatar';

interface CollaborationSectionProps {
  onBookDemo?: () => void;
}

export const CollaborationSection: React.FC<CollaborationSectionProps> = ({ onBookDemo }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Process & Feedback Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow tag */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
                <Sparkles className="w-3 h-3 text-neutral-700" />
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
                  OUR PROCESS
                </span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-medium text-[#111113] tracking-tight leading-[1.18]">
              A transparent process of
              <br />
              collaboration and feedback
            </h2>

            <p className="text-sm sm:text-[14.5px] text-neutral-500 leading-relaxed max-w-lg">
              We are a forward-thinking AI agency focused on transforming businesses with intelligent automation, machine learning, and predictive analytics.
            </p>

            {/* 3 Step Cards */}
            <div className="space-y-5 pt-2">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#111113] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <GitBranch className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#111113]">
                    Workflow Assessment
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-500 mt-1 leading-relaxed">
                    We begin by examining your existing workflows to identify where AI can deliver the greatest impact.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#111113] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#111113]">
                    Deploy with Confidence
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-500 mt-1 leading-relaxed">
                    Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#111113] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#111113]">
                    Ongoing Support & Optimization
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-500 mt-1 leading-relaxed">
                    After deployment, we provide support and refine your AI systems to keep them performing at their best.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  if (onBookDemo) onBookDemo();
                  else document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#111113] hover:bg-neutral-800 text-white rounded-full px-6 py-2.5 text-sm font-medium transition-all shadow-xs hover:shadow active:scale-98"
              >
                Book a Demo
              </button>
            </div>
          </div>

          {/* Right Column: Visual with Overlaid Floating Info Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200/80 bg-neutral-50 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
              <img
                src={images.collabHands}
                alt="Collaborative workspace with hands on laptop keyboard"
                className="w-full h-[420px] sm:h-[480px] object-cover filter grayscale contrast-105"
                referrerPolicy="no-referrer"
              />

              {/* Bottom Overlaid Floating Card */}
              <div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-neutral-200/80 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar
                    name="Nicolas Jakson"
                    className="w-10 h-10 border border-neutral-200"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-[#111113]">
                      Nicolas Jakson
                    </h4>
                    <p className="text-xs text-neutral-500">
                      San Francisco, CA
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm sm:text-base font-bold text-[#111113] tabular-nums">
                    $180.64
                  </div>
                  <div className="text-[11px] text-neutral-500 font-medium">
                    8 Orders
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
