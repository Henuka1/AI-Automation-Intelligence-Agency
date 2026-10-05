import React from 'react';
import { Sparkles } from 'lucide-react';
import { images } from '../assets/images';
import { insightsData } from '../data/insights';

interface InsightsSectionProps {
  onReadArticle?: (id: string) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onReadArticle }) => {
  const getImage = (key: string) => {
    switch (key) {
      case 'insightWaves':
        return images.insightWaves;
      case 'insightParticles':
        return images.insightParticles;
      case 'insightSpiral':
        return images.insightSpiral;
      default:
        return images.insightWaves;
    }
  };

  return (
    <section id="blog" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Eyebrow tag */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
            <Sparkles className="w-3 h-3 text-neutral-700" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
              BLOG & INSIGHT
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#111113] tracking-tight leading-tight">
            Insights on AI, Automation & Innovation
          </h2>
          <p className="mt-3 text-sm sm:text-[14.5px] text-neutral-500 leading-relaxed">
            Explore trends, case studies, and insights from our AI experts.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16">
          {insightsData.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-3xl border border-neutral-200/80 p-4 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all hover:border-neutral-300"
            >
              <div>
                {/* Article Image */}
                <div className="rounded-2xl overflow-hidden aspect-[16/11] bg-neutral-100 border border-neutral-200/60 shadow-2xs">
                  <img
                    src={getImage(article.imageKey)}
                    alt={article.title}
                    className="w-full h-full object-cover filter grayscale contrast-105 transition-transform duration-300 hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-[14.5px] font-semibold text-[#111113] leading-snug mt-4 line-clamp-2">
                  {article.title}
                </h3>
              </div>

              {/* Read Blog Button */}
              <div className="mt-6 pt-2">
                <button
                  onClick={() => {
                    if (onReadArticle) onReadArticle(article.id);
                    else alert(`Opening: ${article.title}`);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl sm:rounded-full bg-[#F8F8FA] hover:bg-neutral-100 border border-neutral-200/80 text-[12.5px] font-medium text-neutral-800 transition-colors"
                >
                  Read Blog
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
