import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { images } from '../assets/images';
import blogBackground from '../assets/images/blog_bg.png';
import { FeatureBadgeIcon, LogoipsumMark } from '../components/BrandLogos';
import {
  ChevronDown,
  Sparkles,
  Zap,
  Cpu,
  Globe,
  MessageSquare,
  HelpCircle,
  X,
  CheckCircle2,
  TrendingUp,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface CaseStudyProps {
  onNavigate?: (
    page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study'
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
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default as in screenshot
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

  // Marquee capabilities matching the screenshot strip
  const marqueeItems = [
    { title: 'CUSTOM AI DEVELOPMENT', icon: Sparkles },
    { title: 'MACHINE LEARNING MODELS', icon: Cpu },
    { title: 'AUTOMATION & RPA', icon: Zap },
    { title: 'NATURAL LANGUAGE PROCESSING (NLP)', icon: Globe },
    { title: 'AI STRATEGY & CONSULTING', icon: MessageSquare },
  ];

  // 6 FAQ Items matching the screenshot
  const faqs = [
    {
      q: 'Why is a strong brand identity or website important?',
      a: "A robust brand identity and website serve as the face of your business, shaping how it is perceived by potential customers. They not only convey professionalism but also establish trust and credibility, vital factors in today's competitive market.",
    },
    {
      q: 'What service do you offer?',
      a: 'We offer end-to-end artificial intelligence solutions including workflow automation, custom LLM fine-tuning, predictive modeling, API integration, and ongoing performance optimization tailored for your business.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes, our flexible partnership tiers allow you to scale up, pause, or cancel at any time with no long-term lock-in or hidden termination fees.',
    },
    {
      q: 'Do you work with international clients?',
      a: 'Yes, we partner with visionary teams across North America, Europe, Asia, and globally, maintaining 24/7 asynchronous collaboration and real-time support.',
    },
    {
      q: 'How long before I see results?',
      a: 'Most clients see tangible productivity improvements and operational cost reductions within 2 to 4 weeks of initial deployment.',
    },
    {
      q: 'What industries do you specialize in?',
      a: 'We specialize in finance, e-commerce, healthcare, legal tech, enterprise SaaS, and supply chain logistics.',
    },
  ];

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
        <section className="relative pt-36 sm:pt-44 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#fbfbfb] via-[#f8f8f9] to-white overflow-hidden">
          {/* Subtle wavy background overlay matching screenshot */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-60" aria-hidden="true">
            <img
              src={blogBackground}
              alt=""
              className="absolute -top-12 h-[calc(100%+32px)] w-full object-cover object-center"
            />
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            {/* Eyebrow Pill Badge: Icon + CASE STUDY */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-7 select-none">
              <div className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center">
                <FeatureBadgeIcon className="h-3 w-3 text-white" />
              </div>
              <span className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-neutral-800">
                CASE STUDY
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#111113] leading-[1.12]">
              Proven Results, Real Impact
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-sm sm:text-[15.5px] text-neutral-500 max-w-2xl mx-auto leading-relaxed">
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
                className="case-study-card bg-[#F8F8FA] rounded-3xl sm:rounded-[36px] border border-neutral-200/80 p-6 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all hover:border-neutral-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Image with rounded corners */}
                  <div className="lg:col-span-5">
                    <div className="case-study-card__image rounded-2xl overflow-hidden border border-neutral-200/80 aspect-[4/3] bg-neutral-100 shadow-xs group">
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
                          onClick={() => setActiveDossier(study)}
                          className="case-study-card__button bg-[#111113] hover:bg-neutral-800 text-white rounded-full px-7 py-2.5 sm:py-3 text-xs sm:text-[13px] font-medium transition-all shadow-xs hover:shadow active:scale-98 cursor-pointer"
                        >
                          See Case Study
                        </button>
                      </div>
                    </div>

                    {/* Metrics Row: Two White Cards */}
                    <div className="pt-8 border-t border-neutral-200/60 grid grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-white rounded-2xl border border-neutral-200/60 p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                        <div className="case-study-metric__value text-3xl sm:text-4xl font-bold tracking-tight tabular-nums text-neutral-900">
                          {study.metric1.value}
                        </div>
                        <p className="case-study-metric__label text-xs sm:text-[12.5px] mt-1 font-medium text-neutral-500">
                          {study.metric1.label}
                        </p>
                      </div>

                      <div className="bg-white rounded-2xl border border-neutral-200/60 p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
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
            ))}
          </div>
        </section>

        {/* 4. CAPABILITIES HORIZONTAL STRIP (Marquee exactly matching screenshot) */}
        <section className="border-y border-neutral-100/90 bg-neutral-50/50 py-3.5 overflow-hidden my-8 sm:my-14">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-8 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-neutral-600 whitespace-nowrap overflow-x-auto scrollbar-none">
            {marqueeItems.concat(marqueeItems).map((item, idx) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={idx}>
                  <span className="flex items-center gap-2 shrink-0">
                    <Icon className="w-3.5 h-3.5 text-neutral-800 shrink-0" />
                    <span>{item.title}</span>
                  </span>
                  <span className="text-neutral-300">✦</span>
                </React.Fragment>
              );
            })}
          </div>
        </section>

        {/* 5. FREQUENTLY ASKED QUESTIONS SECTION */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Eyebrow, Heading, Description, Contact Us Button */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
                    <HelpCircle className="w-3.5 h-3.5 text-neutral-700" />
                    <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
                      FREQUENTLY ASKED QUESTIONS
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#111113] leading-[1.15]">
                  Questions? We&apos;re
                  <br />
                  here to assist!
                </h2>

                <p className="text-xs sm:text-[14px] text-neutral-500 leading-relaxed max-w-sm">
                  Position your brand at the forefront, leading trends, captivating audiences, and creating lasting market impressions.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleContactClick}
                    className="bg-[#111113] hover:bg-neutral-800 text-white rounded-full px-7 py-3 text-xs sm:text-[13px] font-medium transition-all shadow-xs hover:shadow active:scale-98 cursor-pointer"
                  >
                    Contact Us
                  </button>
                </div>
              </div>

              {/* Right Column: 6 FAQ Accordion items */}
              <div className="lg:col-span-7 space-y-3.5">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? 'bg-[#141414] text-white shadow-xs'
                          : 'bg-[#F5F5F7] hover:bg-[#efeff2] text-neutral-900'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <span
                          className={`text-sm sm:text-[15.5px] font-medium ${
                            isOpen ? 'text-white' : 'text-neutral-900'
                          }`}
                        >
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-white' : 'text-neutral-500'
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0">
                          <p className="text-xs sm:text-[13.5px] text-neutral-300 leading-relaxed border-t border-neutral-800 pt-4">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

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
