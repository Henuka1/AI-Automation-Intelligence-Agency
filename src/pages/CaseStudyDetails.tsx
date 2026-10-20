import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { caseStudiesData, CaseStudyItem } from '../data/caseStudies';
import { LogoipsumSunburst } from '../components/BrandLogos';
import { images } from '../assets/images';
import blogBackground from '../assets/images/blog_bg.png';
import {
  Check,
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

interface CaseStudyDetailsProps {
  onNavigate?: (
    page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' |  'privacy' | '404'
  ) => void;
  initialCaseId?: string;
}

export const CaseStudyDetails: React.FC<CaseStudyDetailsProps> = ({
  onNavigate,
  initialCaseId = 'fresh-care',
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<string | undefined>(undefined);
  const [currentId, setCurrentId] = useState<string>(initialCaseId);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default as in screenshot

  const currentStudy: CaseStudyItem =
    caseStudiesData.find((s) => s.id === currentId) || caseStudiesData[0];

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

  const faqs = [
    {
      q: 'Why is a strong brand identity or website important?',
      a: 'A robust brand identity and website serve as the face of your business, shaping how it is perceived by potential customers. They not only convey professionalism but also establish trust and credibility, vital factors in today’s competitive market.',
    },
    {
      q: 'What service do you offer?',
      a: 'We offer comprehensive AI automation, intelligent predictive analytics, custom workflow RPA, and end-to-end digital branding and engineering solutions.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes, our partnership terms are transparent and flexible, allowing you to scale or adjust your engagement as your business needs evolve.',
    },
    {
      q: 'Do you work with international clients?',
      a: 'We collaborate with forward-thinking enterprises and fast-growing brands across North America, Europe, Asia, and Australia.',
    },
    {
      q: 'How long before I see results?',
      a: 'Most clients experience measurable operational efficiency and recommendation conversion improvements within the first 30 to 60 days of deployment.',
    },
    {
      q: 'What industries do you specialize in?',
      a: 'We specialize in Furniture & E-Commerce, Enterprise SaaS, Real Estate & PropTech, Financial Services, and Healthcare AI.',
    },
  ];

  const marqueeItems = [
    'CUSTOM AI DEVELOPMENT',
    'MACHINE LEARNING MODELS',
    'AUTOMATION & RPA',
    'NATURAL LANGUAGE PROCESSING (NLP)',
    'AI STRATEGY & CONSULTING',
    'PREDICTIVE ANALYTICS',
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. NAVBAR */}
      <Navbar
        currentPage="case-study"
        onNavigate={onNavigate}
        onBookDemo={() => handleOpenModal('Book a Demo')}
      />

      <main className="flex-1">
        {/* Case Study Switcher Bar for convenience */}
        <div className="bg-neutral-100 border-b border-neutral-200/80 py-3 px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm">
            <span className="font-medium text-neutral-600">Viewing Case Study Details for:</span>
            <div className="flex items-center gap-2">
              {caseStudiesData.map((study) => (
                <button
                  key={study.id}
                  onClick={() => setCurrentId(study.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    currentId === study.id
                      ? 'bg-[#111113] text-white shadow-xs'
                      : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
                  }`}
                >
                  {study.client}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2. HERO HEADER SECTION */}
        <section className="relative pt-20 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#fbfbfb] via-[#f8f8f9] to-white overflow-hidden">
          {/* Subtle wavy background overlay matching screenshot */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-60" aria-hidden="true">
            <img
              src={blogBackground}
              alt=""
              className="absolute -top-12 h-[calc(100%+32px)] w-full object-cover object-center"
            />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            {/* Logoipsum Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-7 select-none">
              <div className="w-5 h-5 rounded-full bg-[#111113] flex items-center justify-center text-white">
                <LogoipsumSunburst className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-neutral-800">
                Logoipsum
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-medium tracking-tight text-[#111113] leading-[1.1]">
              {currentStudy.client}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-[15px] sm:text-[17px] text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              {currentStudy.summary}
            </p>
          </div>
        </section>

        {/* 3. 4-SPECS CARDS GRID */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Client Card */}
            <div className="bg-[#fafafa] rounded-2xl p-5 border border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400 block mb-1">
                Client
              </span>
              <span className="text-base font-semibold text-[#111113]">
                {currentStudy.client}
              </span>
            </div>

            {/* Tools Card */}
            <div className="bg-[#fafafa] rounded-2xl p-5 border border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400 block mb-1">
                Tools
              </span>
              <span className="text-base font-semibold text-[#111113]">
                {currentStudy.tools}
              </span>
            </div>

            {/* Industry Card */}
            <div className="bg-[#fafafa] rounded-2xl p-5 border border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400 block mb-1">
                Industry
              </span>
              <span className="text-base font-semibold text-[#111113]">
                {currentStudy.industry}
              </span>
            </div>

            {/* Service Type Card */}
            <div className="bg-[#fafafa] rounded-2xl p-5 border border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400 block mb-1">
                Service Type
              </span>
              <span className="text-base font-semibold text-[#111113]">
                {currentStudy.service}
              </span>
            </div>
          </div>
        </section>

        {/* 4. FEATURED BIG IMAGE & CHALLENGE SECTION */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Main Featured Image */}
            <div className="rounded-[28px] overflow-hidden border border-neutral-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.08)] bg-neutral-100 mb-10">
              <img
                src={currentStudy.image}
                alt={currentStudy.client}
                className="w-full h-[380px] sm:h-[480px] md:h-[540px] object-cover object-center"
              />
            </div>

            {/* Challenge & Metric Cards Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Challenge Box */}
              <div className="lg:col-span-6 bg-[#fafafa] rounded-3xl p-8 sm:p-10 border border-neutral-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-4">
                    Challenge
                  </h2>
                  <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed font-normal">
                    {currentStudy.challenge}
                  </p>
                </div>
              </div>

              {/* Metric Card 1 */}
              <div className="lg:col-span-3 bg-[#fafafa] rounded-3xl p-8 sm:p-10 border border-neutral-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div>
                  <div className="text-4xl sm:text-5xl font-bold tracking-tight text-[#111113] mb-3">
                    {currentStudy.metric1.value}
                  </div>
                  <p className="text-[14.5px] text-neutral-600 font-medium leading-snug">
                    {currentStudy.metric1.label}
                  </p>
                </div>
              </div>

              {/* Metric Card 2 */}
              <div className="lg:col-span-3 bg-[#fafafa] rounded-3xl p-8 sm:p-10 border border-neutral-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div>
                  <div className="text-4xl sm:text-5xl font-bold tracking-tight text-[#111113] mb-3">
                    {currentStudy.metric2.value}
                  </div>
                  <p className="text-[14.5px] text-neutral-600 font-medium leading-snug">
                    {currentStudy.metric2.label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHAT WE DID SECTION */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#111113] tracking-tight mb-4">
                What we did?
              </h2>
              <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed font-normal">
                Start with an outline or storyboard to structure your content logically, ensuring it covers the key points. Write the article, record the video, or design the infographic, focusing on quality and relevance. Keep the audience in mind, using an appropriate tone and language. Optimize content with keywords, meta descriptions, alt tags, and other SEO techniques to increase its visibility online. Check for grammatical errors, consistency in tone, and overall flow. Make sure the content delivers the intended message effectively.
              </p>
            </div>

            {/* Checklist items matching screenshot */}
            <div className="space-y-4 pt-2">
              {currentStudy.solution.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#111113] flex items-center justify-center shrink-0 text-white shadow-xs">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[15.5px] font-medium text-neutral-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. IDENTIFY RELEVANT TOPICS SECTION */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#111113] tracking-tight mb-4">
                Identify relevant topics by researching industry trends
              </h2>
              <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed font-normal">
                Data analytics is revolutionizing the way marketers understand consumer behavior in today&apos;s digital age. By harnessing the power of data collected from diverse sources such as social media, website interactions, and purchasing patterns, marketers can unlock valuable insights into their target audience. Identify relevant topics by researching industry trends, competitor content, and audience pain points. Use tools like Google Trends, AnswerThePublic, or SEMrush to discover what your audience is searching for.
              </p>
            </div>

            {/* Two Side-by-Side Images matching reference screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[24px] overflow-hidden border border-neutral-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-neutral-100 aspect-[4/3]">
                <img
                  src={currentStudy.chairImages?.[0] || images.lokosArchitecture}
                  alt="Chair design 1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="rounded-[24px] overflow-hidden border border-neutral-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-neutral-100 aspect-[4/3]">
                <img
                  src={currentStudy.chairImages?.[1] || images.featuresLaptopAi}
                  alt="Chair design 2"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. CAPABILITIES MARQUEE STRIP */}
        <div className="py-10 bg-white border-y border-neutral-100 overflow-hidden">
          <div className="flex items-center gap-6 whitespace-nowrap animate-marquee">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#fafafa] border border-neutral-200 text-xs font-bold tracking-[0.12em] uppercase text-neutral-700 shadow-2xs">
                  <div className="w-2 h-2 rounded-full bg-[#111113]" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. FAQ SECTION */}
        <section className="py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Header & Contact */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] select-none">
                <div className="w-5 h-5 rounded-full bg-[#111113] flex items-center justify-center text-white">
                  <HelpCircle className="w-3 h-3 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-neutral-800">
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#111113] leading-[1.15]">
                Questions? We&apos;re
                <br />
                here to assist!
              </h2>

              <p className="text-[15px] text-neutral-600 leading-relaxed max-w-md">
                Position your brand at the forefront, leading trends, captivating audiences, and creating lasting market impressions.
              </p>

              <div>
                <button
                  type="button"
                  onClick={handleContactClick}
                  className="inline-flex items-center justify-center rounded-[14px] bg-[#111113] hover:bg-neutral-800 text-white px-7 py-3.5 text-[14.5px] font-medium transition-all shadow-[0_8px_20px_rgba(0,0,0,0.2)] cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Accordion */}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#fafafa] rounded-2xl border border-neutral-200/80 overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                    >
                      <span className="text-base sm:text-lg font-semibold text-[#111113] pr-4">
                        {faq.q}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-200">
                        <ChevronDown
                          className={`w-4 h-4 text-neutral-700 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-0 text-neutral-600 text-[15px] leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA BANNER */}
        <FinalCTA onConsultationClick={() => handleOpenModal('Free Consultation')} />
      </main>

      {/* 10. FOOTER */}
      <Footer onNavigate={onNavigate} />

      {/* 11. DEMO MODAL */}
      <DemoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialInterest={selectedInterest}
      />
    </div>
  );
};
