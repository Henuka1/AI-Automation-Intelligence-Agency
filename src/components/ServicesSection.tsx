import React from 'react';
import { Sparkles, Zap, Monitor, Activity, Award, ShieldCheck } from 'lucide-react';
import { servicesData, ServiceItem } from '../data/services';

interface ServicesSectionProps {
  onGetStarted?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onGetStarted }) => {
  const renderIcon = (iconName: ServiceItem['iconName']) => {
    const iconClass = 'w-4 h-4 text-neutral-800';
    switch (iconName) {
      case 'zap':
        return <Zap className={iconClass} />;
      case 'monitor':
        return <Monitor className={iconClass} />;
      case 'activity':
        return <Activity className={iconClass} />;
      case 'award':
        return <Award className={iconClass} />;
      case 'shieldCheck':
        return <ShieldCheck className={iconClass} />;
      default:
        return <Zap className={iconClass} />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Eyebrow tag */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
            <Sparkles className="w-3 h-3 text-neutral-700" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
              WHY CHOOSE US?
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#111113] tracking-tight leading-tight">
            Unlock the potential of
            <br />
            AI for your business.
          </h2>
          <p className="mt-3 text-sm sm:text-[14.5px] text-neutral-500 leading-relaxed">
            Live dashboards and custom reports that surface the insights you need—instantly.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 sm:mt-16">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:border-neutral-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center mb-5 border border-neutral-200/50">
                  {renderIcon(service.iconName)}
                </div>
                <h3 className="text-[15px] font-semibold text-[#111113] leading-snug">
                  {service.title}
                </h3>
              </div>
              <p className="text-xs sm:text-[12.5px] text-neutral-500 mt-4 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* Card 6: Dark highlight CTA card */}
          <div className="bg-[#0F0F11] text-white rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[15px] sm:text-[16px] font-medium leading-snug text-neutral-100">
                We&apos;ve partnered with companies in <span className="font-semibold text-white">e-commerce</span> and more to deliver transformative AI solutions.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => {
                  if (onGetStarted) onGetStarted();
                  else document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white hover:bg-neutral-100 text-neutral-900 font-semibold rounded-full px-6 py-2.5 text-xs transition-all shadow-xs active:scale-98"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
