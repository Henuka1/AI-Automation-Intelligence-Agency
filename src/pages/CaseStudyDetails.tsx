import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { caseStudiesData, CaseStudyItem } from '../data/caseStudies';
import { LogoipsumMark, ChipPillIcon } from '../components/BrandLogos';
import { FAQSection } from '../components/FAQSection';
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
      {/* 1. NAVBAR */}
      <Navbar
        currentPage="case-study"
        onNavigate={onNavigate}
        onBookDemo={() => handleOpenModal('Book a Demo')}
      />

      <main className="flex-1">
        {/* 2. HERO HEADER SECTION */}
        <section
          className="about-hero-feature relative pt-36 sm:pt-44 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#fbfbfb] via-[#f8f8f9] to-white overflow-hidden"
        >
          {/* Fully responsive background topographic wavy texture */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-full z-0 overflow-hidden select-none [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] flex justify-center"
            aria-hidden="true"
          >
            <img
              src={blogBackground}
              alt=""
              className="w-full h-full object-cover object-top opacity-85 min-w-[750px] sm:min-w-full"
            />
          </div>

          <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
            {/* Logoipsum Brand Mark matching reference screenshot */}
            <div className="inline-flex items-center justify-center mb-6 sm:mb-7 select-none">
              <LogoipsumMark className="scale-95 sm:scale-100" />
            </div>

            {/* Headline matching image font and styling */}
            <h1 className="case-study-hero__title block w-full text-center">
              {currentStudy.client}
            </h1>

            {/* Subtitle matching image font and styling */}
            <p className="case-study-hero__description mt-3.5 sm:mt-4 max-w-3xl mx-auto">
              {currentStudy.summary}
            </p>

            {/* ── SPECS CARD (Exact width & Inter Tight font matching reference image) ── */}
            <div className="w-full mt-10 sm:mt-14">
              <div className="rounded-[22px] sm:rounded-[26px] p-[1.5px] bg-gradient-to-b from-white via-white/80 to-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)]">
                <div className="bg-[#f7f7f8]/95 backdrop-blur-md rounded-[20px] sm:rounded-[24px] border border-white overflow-hidden font-['Inter_Tight',sans-serif]">
                  {/* Desktop: 4-column row separated by thin vertical dividers */}
                  <div className="hidden sm:flex items-stretch py-2.5">
                    <div className="flex-1 px-8 py-4 text-left border-r border-[#e5e5e8]">
                      <span className="text-[13px] font-normal text-[#888890] block mb-2 tracking-normal font-['Inter_Tight',sans-serif]">
                        Client
                      </span>
                      <span className="text-[18px] font-medium text-[#111113] leading-tight block tracking-tight font-['Inter_Tight',sans-serif]">
                        {currentStudy.client}
                      </span>
                    </div>
                    <div className="flex-1 px-8 py-4 text-left border-r border-[#e5e5e8]">
                      <span className="text-[13px] font-normal text-[#888890] block mb-2 tracking-normal font-['Inter_Tight',sans-serif]">
                        Tools
                      </span>
                      <span className="text-[18px] font-medium text-[#111113] leading-tight block tracking-tight font-['Inter_Tight',sans-serif]">
                        {currentStudy.tools}
                      </span>
                    </div>
                    <div className="flex-1 px-8 py-4 text-left border-r border-[#e5e5e8]">
                      <span className="text-[13px] font-normal text-[#888890] block mb-2 tracking-normal font-['Inter_Tight',sans-serif]">
                        Industry
                      </span>
                      <span className="text-[18px] font-medium text-[#111113] leading-tight block tracking-tight font-['Inter_Tight',sans-serif]">
                        {currentStudy.industry}
                      </span>
                    </div>
                    <div className="flex-1 px-8 py-4 text-left">
                      <span className="text-[13px] font-normal text-[#888890] block mb-2 tracking-normal font-['Inter_Tight',sans-serif]">
                        Service Type
                      </span>
                      <span className="text-[18px] font-medium text-[#111113] leading-tight block tracking-tight font-['Inter_Tight',sans-serif]">
                        {currentStudy.service}
                      </span>
                    </div>
                  </div>

                  {/* Mobile: 2×2 grid */}
                  <div className="grid grid-cols-2 sm:hidden text-left p-2">
                    <div className="px-5 py-3.5 border-r border-b border-[#e5e5e8]">
                      <span className="text-[12px] font-normal text-[#888890] block mb-1 font-['Inter_Tight',sans-serif]">Client</span>
                      <span className="text-[15px] font-medium text-[#111113] tracking-tight font-['Inter_Tight',sans-serif]">{currentStudy.client}</span>
                    </div>
                    <div className="px-5 py-3.5 border-b border-[#e5e5e8]">
                      <span className="text-[12px] font-normal text-[#888890] block mb-1 font-['Inter_Tight',sans-serif]">Tools</span>
                      <span className="text-[15px] font-medium text-[#111113] tracking-tight font-['Inter_Tight',sans-serif]">{currentStudy.tools}</span>
                    </div>
                    <div className="px-5 py-3.5 border-r border-[#e5e5e8]">
                      <span className="text-[12px] font-normal text-[#888890] block mb-1 font-['Inter_Tight',sans-serif]">Industry</span>
                      <span className="text-[15px] font-medium text-[#111113] tracking-tight font-['Inter_Tight',sans-serif]">{currentStudy.industry}</span>
                    </div>
                    <div className="px-5 py-3.5">
                      <span className="text-[12px] font-normal text-[#888890] block mb-1 font-['Inter_Tight',sans-serif]">Service Type</span>
                      <span className="text-[15px] font-medium text-[#111113] tracking-tight font-['Inter_Tight',sans-serif]">{currentStudy.service}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FEATURED BIG IMAGE & CHALLENGE SECTION (Matching reference image) */}
        <section className="pt-10 sm:pt-14 pb-0 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Outer Featured Bento Card */}
            <div className="rounded-[30px] sm:rounded-[36px] p-[1.5px] bg-gradient-to-b from-white via-white/80 to-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.03)] font-['Inter_Tight',sans-serif]">
              <div className="bg-[#f7f7f8]/95 backdrop-blur-md rounded-[28px] sm:rounded-[34px] border border-white p-5 sm:p-7 overflow-hidden">
                {/* Main Big Image Container inside card */}
                <div className="rounded-[22px] sm:rounded-[26px] overflow-hidden border border-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-neutral-100">
                  <img
                    src={currentStudy.image}
                    alt={currentStudy.client}
                    className="w-full h-[320px] sm:h-[440px] md:h-[500px] object-cover object-center"
                  />
                </div>

                {/* Bottom Row: Challenge description + 2 White Metric Cards */}
                <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
                  {/* Challenge Text Area */}
                  <div className="lg:col-span-6 flex flex-col justify-center px-2 py-1 text-left">
                    <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-2.5 font-['Inter_Tight',sans-serif]">
                      Challenge
                    </h2>
                    <p className="text-[14px] sm:text-[15px] text-[#666670] leading-relaxed font-normal max-w-md font-['Inter_Tight',sans-serif]">
                      {currentStudy.challenge}
                    </p>
                  </div>

                  {/* Metric Card 1 */}
                  <div className="lg:col-span-3 rounded-[22px] p-[1.5px] bg-gradient-to-b from-white via-white/90 to-white/50 shadow-[0_4px_18px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer group">
                    <div className="h-full bg-white rounded-[20px] border border-white group-hover:border-neutral-200/60 p-6 sm:p-7 flex flex-col justify-between text-left transition-colors duration-300">
                      <div className="text-4xl sm:text-[44px] font-semibold tracking-tight text-[#111113] font-['Inter_Tight',sans-serif] leading-none mb-3">
                        {currentStudy.metric1.value}
                      </div>
                      <p className="text-[13px] sm:text-[13.5px] text-[#666670] font-normal leading-snug font-['Inter_Tight',sans-serif]">
                        {currentStudy.metric1.label}
                      </p>
                    </div>
                  </div>

                  {/* Metric Card 2 */}
                  <div className="lg:col-span-3 rounded-[22px] p-[1.5px] bg-gradient-to-b from-white via-white/90 to-white/50 shadow-[0_4px_18px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer group">
                    <div className="h-full bg-white rounded-[20px] border border-white group-hover:border-neutral-200/60 p-6 sm:p-7 flex flex-col justify-between text-left transition-colors duration-300">
                      <div className="text-4xl sm:text-[44px] font-semibold tracking-tight text-[#111113] font-['Inter_Tight',sans-serif] leading-none mb-3">
                        {currentStudy.metric2.value}
                      </div>
                      <p className="text-[13px] sm:text-[13.5px] text-[#666670] font-normal leading-snug font-['Inter_Tight',sans-serif]">
                        {currentStudy.metric2.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHAT WE DID & IDENTIFY RELEVANT TOPICS SECTION (Aligned width & tighter gap matching image) */}
        <section className="pt-10 sm:pt-14 pb-0 px-4 sm:px-6 lg:px-8 bg-white font-['Inter_Tight',sans-serif]">
          <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12 text-left">
            {/* What we did block */}
            <div className="space-y-5">
              <div>
                <h2 className="text-3xl sm:text-[38px] font-semibold text-[#111113] tracking-[-0.03em] leading-tight mb-3.5 font-['Inter_Tight',sans-serif]">
                  What we did?
                </h2>
                <p className="text-[14px] sm:text-[15px] text-[#666670] leading-[1.65] font-normal font-['Inter_Tight',sans-serif] w-full">
                  Start with an outline or storyboard to structure your content logically, ensuring it covers the key points. Write the article, record the video, or design the infographic, focusing on quality and relevance. Keep the audience in mind, using an appropriate tone and language. Optimize content with keywords, meta descriptions, alt tags, and other SEO techniques to increase its visibility online. Check for grammatical errors, consistency in tone, and overall flow. Make sure the content delivers the intended message effectively.
                </p>
              </div>

              {/* Checklist items matching screenshot */}
              <div className="space-y-3.5 pt-1">
                {currentStudy.solution.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-[22px] h-[22px] rounded-full bg-[#111113] flex items-center justify-center shrink-0 text-white shadow-xs">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] sm:text-[16px] font-medium text-[#111113] tracking-[-0.015em] font-['Inter_Tight',sans-serif]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Identify relevant topics block */}
            <div className="space-y-5 pt-2">
              <div>
                <h2 className="text-3xl sm:text-[38px] font-semibold text-[#111113] tracking-[-0.03em] leading-tight mb-3.5 font-['Inter_Tight',sans-serif]">
                  Identify relevant topics by researching industry trends
                </h2>
                <p className="text-[14px] sm:text-[15px] text-[#666670] leading-[1.65] font-normal font-['Inter_Tight',sans-serif] w-full">
                  Data analytics is revolutionizing the way marketers understand consumer behavior in today&apos;s digital age. By harnessing the power of data collected from diverse sources such as social media, website interactions, and purchasing patterns, marketers can unlock valuable insights into their target audience. Identify relevant topics by researching industry trends, competitor content, and audience pain points. Use tools like Google Trends, AnswerThePublic, or SEMrush to discover what your audience is searching for.
                </p>
              </div>

              {/* Two Side-by-Side Images matching on-feature card styling and exact left/right line */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-3">
                {/* Chair Card 1 */}
                <div className="rounded-[28px] sm:rounded-[32px] p-[1.5px] bg-gradient-to-b from-white via-white/80 to-white/40 shadow-[0_10px_32px_rgba(0,0,0,0.06),0_2px_5px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
                  <div className="bg-[#f7f7f8]/95 backdrop-blur-md rounded-[26px] sm:rounded-[30px] border border-white p-3.5 sm:p-4 overflow-hidden">
                    <div className="rounded-[20px] sm:rounded-[24px] overflow-hidden border border-white shadow-[0_3px_12px_rgba(0,0,0,0.04)] bg-neutral-100 aspect-[4/3] sm:aspect-[1/1] md:aspect-[4/3]">
                      <img
                        src={currentStudy.chairImages?.[0] || images.freshCareChair1}
                        alt="Chair design 1"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>

                {/* Chair Card 2 */}
                <div className="rounded-[28px] sm:rounded-[32px] p-[1.5px] bg-gradient-to-b from-white via-white/80 to-white/40 shadow-[0_10px_32px_rgba(0,0,0,0.06),0_2px_5px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
                  <div className="bg-[#f7f7f8]/95 backdrop-blur-md rounded-[26px] sm:rounded-[30px] border border-white p-3.5 sm:p-4 overflow-hidden">
                    <div className="rounded-[20px] sm:rounded-[24px] overflow-hidden border border-white shadow-[0_3px_12px_rgba(0,0,0,0.04)] bg-neutral-100 aspect-[4/3] sm:aspect-[1/1] md:aspect-[4/3]">
                      <img
                        src={currentStudy.chairImages?.[1] || images.freshCareChair2}
                        alt="Chair design 2"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CAPABILITIES SCROLLING MARQUEE (Tight gap matching reference image, no border line) */}
        <section className="pt-4 sm:pt-6 pb-6 sm:pb-8 bg-white overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden mask-marquee-edges select-none">
              <div className="animate-marquee-left flex items-center gap-4 py-1">
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

        {/* 8. FREQUENTLY ASKED QUESTIONS SECTION (Matching Case Study page) */}
        <FAQSection variant="pricing" onContactClick={handleContactClick} />

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
