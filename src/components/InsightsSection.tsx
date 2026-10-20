import React, { useState } from 'react';
import { images } from '../assets/images';
import { X, Clock, Calendar, ArrowRight } from 'lucide-react';

interface BlogPostItem {
  id: string;
  image: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
}

interface InsightsSectionProps {
  onReadArticle?: (id: string) => void;
  onNavigate?: (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' | 'privacy') => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onReadArticle, onNavigate }) => {
  const [activePost, setActivePost] = useState<BlogPostItem | null>(null);

  // Exactly matching the top 3 featured posts from the Blog page
  const posts: BlogPostItem[] = [
    {
      id: '1',
      image: images.insightSpiral,
      title: 'Explore trends, case studies, and insights from our AI experts.',
      category: 'Insights & Research',
      readTime: '5 min read',
      date: 'May 18, 2025',
      author: {
        name: 'Dr. Aris Thorne',
        role: 'Chief AI Architect',
      },
      content: [
        'Artificial intelligence is progressing from disconnected narrow tools into deeply unified autonomous enterprise nervous systems.',
        'In this briefing, our research team analyzes the key structural shifts organizations must undertake when embedding multi-agent reasoning into high-stakes operational workflows.',
        'From dynamic prompt graphs to continuous parameter optimization, discover the patterns proven to yield defensible business advantage.'
      ],
    },
    {
      id: '2',
      image: images.insightParticles,
      title: 'Discover trends, case studies, and insights from our AI specialists.',
      category: 'Case Studies',
      readTime: '6 min read',
      date: 'May 14, 2025',
      author: {
        name: 'Elena Rostova',
        role: 'VP of Applied Intelligence',
      },
      content: [
        'Deploying generative intelligence inside mission-critical pipelines requires bulletproof reliability, zero data leakage, and sub-second deterministic latency.',
        'We unpack three practical client case studies across supply chain forecasting, automated reconciliation, and executive scenario simulation.',
        'Learn how each architecture achieved over 40% reduction in cycle time while retaining human-in-the-loop governance.'
      ],
    },
    {
      id: '3',
      image: images.caseStudyFabric,
      title: 'Explore the latest trends, success stories,from our AI experts.',
      category: 'Innovation',
      readTime: '4 min read',
      date: 'May 10, 2025',
      author: {
        name: 'Marcus Vance',
        role: 'Principal Systems Engineer',
      },
      content: [
        'Success in machine learning initiatives is rarely determined by raw model parameter scale alone, but by data orchestration and pipeline ergonomics.',
        'Here, we review the foundational building blocks required to elevate conversational prototypes into resilient production systems.',
        'See how top-tier teams establish guardrails, automated regression evals, and audit-ready observability.'
      ],
    },
  ];

  return (
    <section id="blog" className="py-20 sm:py-28 bg-[#fafafa] border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Pill Badge: "BLOG & INSIGHT" matching OUR FEATURES badge */}
        <div className="mb-7 flex justify-center">
          <span
            className="inline-flex items-center select-none"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 22px',
              fontFamily: '"Inter Tight", "Inter", system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#1a1a1a',
              borderRadius: '999px',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              background: 'linear-gradient(180deg, #ffffff 0%, #f8f8f8 55%, #f0f0f0 100%)',
              boxShadow:
                'inset 0 1px 0 #fff, 0 1px 2px rgba(0,0,0,.06), 0 6px 14px rgba(0,0,0,.08), 0 14px 26px rgba(0,0,0,.05)',
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#111"
              strokeWidth="1.8"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              <circle cx="15" cy="15" r="6" />
              <path
                d="M8.2 3.8 L13.4 12.6 Q13.9 13.4 13 13.4 L3.4 13.4 Q2.5 13.4 3 12.6 L7.2 3.8 Q7.7 3 8.2 3.8 Z"
                fill="#fff"
              />
            </svg>
            BLOG &amp; INSIGHT
          </span>
        </div>

        {/* Hero Title & Subtitle matching Blog page gradient headline */}
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="blog-hero-title font-['Inter'] text-[28px] font-semibold leading-[1.15] tracking-[-0.04em] sm:text-[38px] md:text-[46px] lg:text-[54px] sm:whitespace-nowrap">
            <span className="hero-gradient-headline">Insights on AI, Automation &amp; Innovation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-['Inter'] text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-neutral-600 sm:text-[17px] lg:max-w-none lg:whitespace-nowrap">
            Explore trends, case studies, and insights from our AI experts.
          </p>
        </div>

        {/* 3 Featured cards with exact Blog page design and typography */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {posts.map((post) => (
            <article
              key={post.id}
              className="blog-card-hover group flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[1.38/1] overflow-hidden rounded-[24px] border border-white bg-neutral-100 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:rounded-[28px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover object-center grayscale contrast-105 transition-transform duration-500 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bottom Card Body */}
              <div className="-mt-px flex min-h-[214px] flex-1 flex-col rounded-[24px] border border-white bg-[#f7f7f7] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:rounded-[28px] sm:p-7">
                <h3 className="text-[21px] font-medium leading-[1.28] tracking-[-0.045em] text-[#111113] sm:text-[24px]">
                  {post.title}
                </h3>

                <button
                  onClick={() => {
                    setActivePost(post);
                    if (onReadArticle) onReadArticle(post.id);
                  }}
                  className="mt-auto w-full rounded-[14px] border border-neutral-200/90 bg-white px-4 py-4 text-center text-[16px] font-medium text-[#111113] shadow-[0_8px_18px_rgba(0,0,0,0.08)] transition-all hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.99] cursor-pointer"
                >
                  Read Blog
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Optional Explore All Articles CTA */}
        {onNavigate && (
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300/80 bg-white px-6 py-3 font-['Inter'] text-[14px] font-medium text-neutral-800 shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition-all hover:border-neutral-400 hover:bg-neutral-50 active:scale-[0.98] cursor-pointer"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Article Reader Modal matching Blog page */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActivePost(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-neutral-200 shadow-2xl p-6 sm:p-8 animate-scaleUp relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 mb-6">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover grayscale contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Badges / Metadata */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mb-3">
              <span className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 font-semibold">
                {activePost.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {activePost.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {activePost.date}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-medium text-neutral-950 tracking-tight mb-4 leading-tight">
              {activePost.title}
            </h2>

            {/* Author */}
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-neutral-100">
              <div className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-semibold">
                {activePost.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">{activePost.author.name}</p>
                <p className="text-xs text-neutral-500">{activePost.author.role}</p>
              </div>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              {activePost.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Footer Modal CTA */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              {onNavigate && (
                <button
                  onClick={() => {
                    setActivePost(null);
                    onNavigate('blog');
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-neutral-950 text-white text-xs font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Go to Full Blog</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setActivePost(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-neutral-300 text-neutral-700 text-xs font-medium hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
