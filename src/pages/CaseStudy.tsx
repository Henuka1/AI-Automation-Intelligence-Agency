import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { FAQSection } from '../components/FAQSection';
import { images } from '../assets/images';
import blogBackground from '../assets/images/blog_bg.png';
import { CaseStudyBadgeIcon, FeatureBadgeIcon, LogoipsumMark, ChipPillIcon } from '../components/BrandLogos';
import {
  Sparkles,
  Zap,
  Cpu,
  Globe,
  MessageSquare,
  X,
  CheckCircle2,
  TrendingUp,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface CaseStudyProps {
  onNavigate?: (
    page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' | 'case-study-details' | 'privacy' | '404'
  ) => void;
}

interface CaseStudyDetail {
  id: string;
  client: string;
  industry: string;
  service: string;
  image: string;
  summary: string;
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
  challenge: string;
  solution: string[];
  deliverables: string[];
  results: string[];
}

export const CaseStudy: React.FC<CaseStudyProps> = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<string | undefined>(undefined);
  const [activeDossier, setActiveDossier] = useState<CaseStudyDetail | null>(null);

  const handleOpenModal = (interest?: string) => {
    setSelectedInterest(interest);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      window.location.href = '/contact';
    }
  };

  // 3 Case Study items matching the screenshot
  const caseStudies = [
    {
      id: 'fresh-care',
      client: 'Fresh Care',
      industry: 'Furniture & E-Commerce',
      service: 'AI Product Recommendations & Predictive Merchandising',
      image: images.caseStudyFabric,
      summary:
        'Integrated AI-driven product recommendations based on real-time user behavior and historical data.',
      metric1: { value: '90%', label: 'Average selling product' },
      metric2: { value: '43%', label: 'Improved team output' },
      challenge:
        'Fresh Care faced high cart abandonment on high-ticket modular furniture sets and stagnant recommendation conversion rates across their multi-regional online catalog.',
      solution: [
        'Integrated deep contextual buyer affinity modeling trained on browsing velocity and past cart interactions.',
        'Deployed dynamic catalog sorting that updates inventory positioning in real-time.',
        'Built automated design pairing suggestions generating complete living room collections.',
      ],
      deliverables: [
        'Vector Search Recommendation Engine',
        'Omnichannel Storefront API',
        'Automated Real-Time Visual Merchandiser',
        'Executive Conversion & Revenue Dashboard',
      ],
      results: [
        '90% average selling product conversion velocity',
        '43% improvement in team merchandising output',
        '3x increase in repeat customer engagement within 6 months',
      ],
    },
    {
      id: 'kondam-loius',
      client: 'Kondam Loius',
      industry: 'Enterprise SaaS & Cloud Infrastructure',
      service: 'Autonomous Workflow RPA & 24/7 Intelligent Triage',
      image: images.kondamSwirlFabric,
      summary:
        'Integrated AI-driven product recommendations based on real-time user behavior and historical data.',
      metric1: { value: '90%', label: 'Average selling product' },
      metric2: { value: '43%', label: 'Improved team output' },
      challenge:
        'Manual user onboarding and fragmented technical support queues created long triage times and reduced productivity across core engineering teams.',
      solution: [
        'Constructed custom multi-agent retrieval systems resolving high-frequency tickets automatically.',
        'Engineered an escalation gateway that drafts synthesized diagnostics for engineering teams before handoff.',
        'Automated cross-system data reconciliation between Stripe, Salesforce, and internal databases.',
      ],
      deliverables: [
        'Autonomous Multi-Agent Triage Pipeline',
        'Zero-Latency CRM Data Harmonizer',
        'Customer Sentiment Tracking Radar',
        'Executive ROI & Workflow Velocity Dashboard',
      ],
      results: [
        'Over 80% of tier-1 support tickets solved with zero human intervention',
        '70% of manual repetitive workflows automated in under 90 days',
        'Mean time to resolution dropped from 4 hours to under 45 seconds',
      ],
    },
    {
      id: 'lokos-estate',
      client: 'Lokos Estate',
      industry: 'Real Estate & PropTech',
      service: 'Deep Neural Property Valuation & Automated Closing',
      image: images.lokosArchitecture,
      summary:
        'Integrated AI-driven product recommendations based on real-time user behavior and historical data.',
      metric1: { value: '90%', label: 'Average selling product' },
      metric2: { value: '43%', label: 'Improved team output' },
      challenge:
        'Property matching and document review backlogs prolonged commercial transaction cycles by over 80 days with frequent pricing misalignments.',
      solution: [
        'Built computer vision and geospatial neural models analyzing regional cap rates and historical permitting.',
        'Deployed automated disclosure audit tools verifying tenancy agreements and lease terms.',
        'Constructed an investor deal room simulating long-term portfolio yields instantaneously.',
      ],
      deliverables: [
        'Spatial Valuation Neural Engine',
        'Autonomous Contract Disclosure Audit Agent',
        'Interactive Investor Deal Room & Calculator',
        'Municipal Land Registry Ingestion Connector',
      ],
      results: [
        '$12M+ in commercial property transactions verified and facilitated in Year 1',
        'Closing cycle reduced from 84 days down to 29 days',
        '99.4% valuation consistency validated against post-sale appraisals',
      ],
    },
  ];

  const marqueeTags = [
    'CUSTOM AI DEVELOPMENT',
    'MACHINE LEARNING MODELS',
    'AUTOMATION & RPA',
    'NATURAL LANGUAGE PROCESSING (NLP)',
    'AI STRATEGY & CONSULTING',
    'CUSTOM AI DEVELOPMENT',
    'MACHINE LEARNING MODELS',
    'AUTOMATION & RPA',
  ];

  const marqueeIcons = [ChipPillIcon, ChipPillIcon, Zap, Globe, Sparkles, ChipPillIcon, ChipPillIcon, Zap];

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. TOP NAVBAR */}
      <Navbar
        currentPage="case-study"
        onNavigate={onNavigate}
        onBookDemo={() => handleOpenModal('Book a Demo')}
      />

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <section className="relative pt-36 sm:pt-44 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#fbfbfb] via-[#f8f8f9] to-white overflow-hidden">
          {/* Fully responsive background topographic wavy texture matching screenshot */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-full z-0 overflow-hidden select-none [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
            aria-hidden="true"
          >
            <img
              src={blogBackground}
              alt=""
              className="w-full h-full object-cover object-top opacity-85"
            />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            {/* Eyebrow Pill Badge: Icon + CASE STUDY with soft shadow */}
            <div className="w-full flex justify-center mb-6 sm:mb-7">
              <div className="case-study-hero__badge inline-flex items-center gap-2.5 rounded-full select-none transition-transform hover:scale-102 duration-300">
                <div className="case-study-hero__badge-icon rounded-full bg-[#121214] flex items-center justify-center shrink-0">
                  <CaseStudyBadgeIcon className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="case-study-hero__badge-label uppercase pr-1">
                  CASE STUDY
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="case-study-hero__title block w-full text-center">
              Proven Results, Real Impact
            </h1>

            {/* Subtitle */}
            <p className="case-study-hero__description mt-3.5 sm:mt-4 mx-auto whitespace-normal sm:whitespace-nowrap">
              We provide powerful, flexible, and secure AI solutions—built for real business outcomes.
            </p>
          </div>
        </section>

        {/* 3. THREE STACKED CASE STUDY CARDS (Fresh Care, Kondam Loius, Lokos Estate) */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                tabIndex={0}
                className="case-study-card-wrapper rounded-3xl sm:rounded-[36px]"
              >
                <div className="case-study-card-inner case-study-card bg-[#F8F8FA] rounded-3xl sm:rounded-[36px] border border-white p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04),inset_0_1px_0_#ffffff]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Image with rounded corners */}
                    <div className="lg:col-span-5">
                      <div className="case-study-card__image rounded-2xl overflow-hidden border border-white aspect-[4/3] bg-neutral-100 shadow-xs group">
                        <img
                          src={study.image}
                          alt={`${study.client} case study`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    {/* Right Column: Logo, Title, Copy, Button, Metrics */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                      <div>
                        {/* Logoipsum Mark */}
                        <LogoipsumMark className="case-study-card__logo h-8" />

                        {/* Client Title */}
                        <h2 className="case-study-card__heading text-2xl sm:text-3xl font-semibold mt-4 text-[#111113]">
                          {study.client}
                        </h2>

                        {/* Description */}
                        <p className="case-study-card__copy text-xs sm:text-[13.5px] text-neutral-600 mt-2.5 leading-relaxed max-w-lg">
                          {study.summary}
                        </p>

                        {/* See Case Study Button */}
                        <div className="pt-4">
                          <button
                            onClick={() => {
                              if (onNavigate) {
                                onNavigate('case-study-details');
                                window.history.pushState({}, '', `/case-study-details?id=${study.id}`);
                              } else {
                                window.location.href = `/case-study-details?id=${study.id}`;
                              }
                            }}
                            className="case-study-card__button bg-[#111113] hover:bg-neutral-800 text-white rounded-full px-7 py-2.5 sm:py-3 text-xs sm:text-[13px] font-medium transition-all shadow-xs hover:shadow active:scale-98 cursor-pointer"
                          >
                            See Case Study
                          </button>
                        </div>
                      </div>

                      {/* Metrics Row: Two White Cards */}
                      <div className="pt-8 border-t border-neutral-200/60 grid grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-white rounded-2xl border border-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_0_#ffffff]">
                          <div className="case-study-metric__value text-3xl sm:text-4xl font-bold tracking-tight tabular-nums text-neutral-900">
                            {study.metric1.value}
                          </div>
                          <p className="case-study-metric__label text-xs sm:text-[12.5px] mt-1 font-medium text-neutral-500">
                            {study.metric1.label}
                          </p>
                        </div>

                        <div className="bg-white rounded-2xl border border-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_0_#ffffff]">
                          <div className="case-study-metric__value text-3xl sm:text-4xl font-bold tracking-tight tabular-nums text-neutral-900">
                            {study.metric2.value}
                          </div>
                          <p className="case-study-metric__label text-xs sm:text-[12.5px] mt-1 font-medium text-neutral-500">
                            {study.metric2.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Scrolling Pill Tags Marquee matching About Us */}
            <div className="mt-8 sm:mt-12 overflow-hidden mask-marquee-edges select-none">
              <div className="animate-marquee-left flex items-center gap-4 py-2">
                {marqueeTags.concat(marqueeTags).map((tag, idx) => (
                  <div
                    key={`${tag}-${idx}`}
                    className="about-marquee-pill inline-flex h-12 items-center gap-2.5 rounded-full border border-white bg-gradient-to-b from-white to-[#f1f1f1] px-5 text-[11px] font-semibold tracking-[0.08em] text-neutral-800 uppercase shrink-0 sm:text-xs"
                  >
                    {(() => {
                      const Icon = marqueeIcons[idx % marqueeIcons.length];
                      if (tag === 'AUTOMATION & RPA') {
                        return <Icon className="h-4 w-4 shrink-0 text-black fill-black" strokeWidth={1.5} aria-hidden="true" />;
                      }
                      if (tag === 'AI STRATEGY & CONSULTING') {
                        return <Icon className="h-4 w-4 shrink-0 text-black fill-black" strokeWidth={1.5} aria-hidden="true" />;
                      }
                      if (Icon === ChipPillIcon) {
                        return <Icon className="h-4 w-4 shrink-0 text-black" />;
                      }
                      return <Icon className="h-4.5 w-4.5 shrink-0 text-black" strokeWidth={2.2} aria-hidden="true" />;
                    })()}
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. FREQUENTLY ASKED QUESTIONS SECTION */}
        <FAQSection variant="pricing" onContactClick={handleContactClick} />

        {/* 6. PRE-FOOTER CTA SECTION (Let's Build the Future, Together) */}
        <FinalCTA onConsultationClick={() => handleOpenModal('Case Study Consultation')} />
      </main>

      {/* 7. FOOTER */}
      <Footer onNavigate={onNavigate} />

      {/* 8. INTERACTIVE CASE STUDY DOSSIER MODAL */}
      {activeDossier && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in"
          onClick={() => setActiveDossier(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-neutral-200 shadow-2xl p-6 sm:p-10 my-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveDossier(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors cursor-pointer"
              aria-label="Close Case Study Details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="pr-12">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                  {activeDossier.industry}
                </span>
                <span className="text-xs text-neutral-400">• Verified Engagement</span>
              </div>
              <LogoipsumMark className="h-7 mt-3" />
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mt-3">
                {activeDossier.client} Case Study
              </h2>
              <p className="text-sm text-neutral-600 mt-1 font-medium">
                {activeDossier.service}
              </p>
            </div>

            {/* Metrics Highlight Card */}
            <div className="mt-8 bg-neutral-50 border border-neutral-200/80 rounded-2xl p-6 grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-neutral-900 tabular-nums">
                  {activeDossier.metric1.value}
                </div>
                <div className="text-xs text-neutral-500 mt-1 font-medium">
                  {activeDossier.metric1.label}
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-neutral-900 tabular-nums">
                  {activeDossier.metric2.value}
                </div>
                <div className="text-xs text-neutral-500 mt-1 font-medium">
                  {activeDossier.metric2.label}
                </div>
              </div>
            </div>

            {/* The Challenge */}
            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                The Challenge
              </h3>
              <p className="text-neutral-700 text-sm sm:text-[15px] leading-relaxed">
                {activeDossier.challenge}
              </p>
            </div>

            {/* The Axonix Solution */}
            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                The Axonix AI Solution
              </h3>
              <ul className="space-y-2.5">
                {activeDossier.solution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Deliverables */}
            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neutral-900" />
                Key Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeDossier.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-neutral-200 rounded-xl p-3 text-xs sm:text-sm font-medium text-neutral-800 flex items-center gap-2"
                  >
                    <Layers className="w-3.5 h-3.5 text-neutral-500" />
                    {deliv}
                  </div>
                ))}
              </div>
            </div>

            {/* Measurable ROI & Results */}
            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Measurable Business Outcomes
              </h3>
              <ul className="space-y-2">
                {activeDossier.results.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Bottom Action */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-neutral-500 text-center sm:text-left">
                Want similar quantifiable results for your organization?
              </p>
              <button
                onClick={() => {
                  setActiveDossier(null);
                  handleOpenModal(`Case Study: ${activeDossier.client}`);
                }}
                className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white rounded-full px-6 py-2.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                Schedule Solution Briefing
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 9. DEMO / CONSULTATION MODAL */}
      <DemoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialInterest={selectedInterest}
      />
    </div>
  );
};
