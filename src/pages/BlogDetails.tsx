import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { insightsData } from '../data/insights';
import blogBackground from '../assets/images/blog_bg.png';
import { images } from '../assets/images';
import {
  ChevronDown,
  Sparkles,
  Zap,
  Cpu,
  Globe,
  MessageSquare,
  HelpCircle,
} from 'lucide-react';

interface BlogDetailsProps {
  onNavigate?: (
    page: 'home' | 'about' | 'features' | 'pricing' | 'blog' |  'contact' | 'terms' | 'case-study' |  'privacy' | '404'
  ) => void;
  id?: string;
}

export const BlogDetails: React.FC<BlogDetailsProps> = ({ onNavigate, id }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<string | undefined>(undefined);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default

  // Load blog based on id, default to first insight if not found
  const post = insightsData.find(p => p.id === id) || insightsData[0];
  const { title, category, readTime, date, author, content } = post;

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

  const marqueeItems = [
    { title: 'CUSTOM AI DEVELOPMENT', icon: Sparkles },
    { title: 'MACHINE LEARNING MODELS', icon: Cpu },
    { title: 'AUTOMATION & RPA', icon: Zap },
    { title: 'NATURAL LANGUAGE PROCESSING (NLP)', icon: Globe },
    { title: 'AI STRATEGY & CONSULTING', icon: MessageSquare },
  ];

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

  const moreBlogs = [
    {
      image: images.insightParticles,
      title: 'Discover trends, case studies, and insights from our AI specialists.',
    },
    {
      image: images.insightSpiral,
      title: 'Explore the latest trends, success stories,from our AI experts.',
    },
    {
      image: images.caseStudyFabric,
      title: 'Get inspired by emerging trends, real-world case studies, and AI insights.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. TOP NAVBAR */}
      <Navbar
        currentPage="blog"
        onNavigate={onNavigate}
        onBookDemo={() => handleOpenModal('Book a Demo')}
      />

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#fbfbfb] via-[#f8f8f9] to-white overflow-hidden">
          {/* Subtle wavy background overlay matching screenshot */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-60" aria-hidden="true">
            <img
              src={blogBackground}
              alt=""
              className="absolute -top-12 h-[calc(100%+32px)] w-full object-cover object-center"
            />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            {/* News Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6 select-none">
              <span className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-neutral-800">
                {category}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold tracking-tight text-[#111113] leading-[1.15] max-w-3xl">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-[15.5px] text-neutral-500 max-w-xl mx-auto leading-relaxed">
              {readTime} • {date}
            </p>

            {/* Author Profile */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-200 border border-neutral-300">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-neutral-900">{author.name}</p>
                <p className="text-xs text-neutral-500">{author.role}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURED HERO ARTICLE IMAGE */}
        <section className="pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl sm:rounded-[36px] overflow-hidden border border-neutral-200/80 bg-neutral-100 aspect-[16/9] sm:aspect-[21/10] shadow-md">
              <img
                src={images[post.imageKey]}
                alt={title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* 4. ARTICLE BODY CONTENT */}
        <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-4">
              {(content || []).map((p, i) => (
                <p key={i} className="text-sm sm:text-[15px] text-neutral-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* 5. "SEE MORE BLOG" SECTION */}
        <section className="py-16 sm:py-24 bg-[#F8F8FA] border-t border-neutral-200/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-2xs">
                <Cpu className="w-3.5 h-3.5 text-neutral-800" />
                <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-neutral-800">
                  BLOG &amp; INSIGHT
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#111113] tracking-tight">
                See more blog
              </h2>
              <p className="text-xs sm:text-[14.5px] text-neutral-500 leading-relaxed">
                Explore trends, case studies, and insights from our AI experts.
              </p>
            </div>

            {/* 3 Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {moreBlogs.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all group"
                >
                  <div className="space-y-5">
                    <div className="rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-100 aspect-[16/11]">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#111113] leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-100">
                    <button
                      onClick={() => handleOpenModal('Read Blog')}
                      className="w-full bg-white hover:bg-neutral-50 border border-neutral-200/90 text-neutral-900 rounded-xl py-3 text-xs sm:text-sm font-medium transition-colors shadow-2xs cursor-pointer"
                    >
                      Read Blog
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CAPABILITIES MARQUEE STRIP */}
        <section className="border-y border-neutral-100/90 bg-neutral-50/50 py-3.5 overflow-hidden">
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

        {/* 7. FREQUENTLY ASKED QUESTIONS SECTION */}
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

        {/* 8. PRE-FOOTER CTA SECTION */}
        <FinalCTA onConsultationClick={() => handleOpenModal('Blog Consultation')} />
      </main>

      {/* 9. FOOTER */}
      <Footer onNavigate={onNavigate} />

      {/* 10. DEMO MODAL */}
      <DemoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialInterest={selectedInterest}
      />
    </div>
  );
};
