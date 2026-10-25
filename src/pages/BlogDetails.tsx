import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FAQSection } from '../components/FAQSection';
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
      id: '2',
      image: images.insightParticles,
      title: 'Discover trends, case studies, and insights from our AI specialists.',
    },
    {
      id: '1',
      image: images.insightSpiral,
      title: 'Explore the latest trends, success stories,from our AI experts.',
    },
    {
      id: '3',
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

          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            {/* News Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6 select-none">
              <span className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-neutral-800">
                {category}
              </span>
            </div>

            {/* Headline matching image style and typography */}
            <h1 className="case-study-hero__title block w-full text-center font-['Inter_Tight',sans-serif] tracking-[-0.04em] leading-[1.12] max-w-4xl mx-auto">
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

        {/* 3. FEATURED HERO ARTICLE IMAGE & ON-FEATURE CARD */}
        <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Outer On-Feature Bento Card matching screenshot */}
            <div className="rounded-[28px] sm:rounded-[36px] p-[1.5px] bg-gradient-to-b from-white via-white/80 to-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.03)] font-['Inter_Tight',sans-serif]">
              <div className="bg-[#f7f7f8]/95 backdrop-blur-md rounded-[26px] sm:rounded-[34px] border border-white p-4 sm:p-6 md:p-7 overflow-hidden">
                {/* Main Article Image inside card */}
                <div className="rounded-[20px] sm:rounded-[26px] overflow-hidden border border-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-neutral-100 aspect-[16/9] sm:aspect-[21/10] md:aspect-[2.1/1]">
                  <img
                    src={images[post.imageKey]}
                    alt={title}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Bottom Paragraph Container / Article Content Details */}
                <div className="pt-6 sm:pt-7 px-1 sm:px-3 text-left space-y-4">
                  {(content && content.length > 0) ? (
                    content.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-[14px] sm:text-[15.5px] text-[#666670] leading-[1.7] font-normal font-['Inter_Tight',sans-serif]"
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-[14px] sm:text-[15.5px] text-[#666670] leading-[1.7] font-normal font-['Inter_Tight',sans-serif]">
                      Personalization is a key benefit of data analytics in marketing. By understanding the unique preferences and behaviors of different consumer segments, marketers can create highly targeted and personalized campaigns.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. "SEE MORE BLOG" SECTION */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-4">
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-white bg-white px-5 py-2.5 font-['Inter_Tight',sans-serif] text-[13px] font-semibold tracking-[-0.01em] text-[#1a1a1a] shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition-transform hover:scale-105 select-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#111"
                    strokeWidth="1.9"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="shrink-0"
                  >
                    <circle cx="15" cy="15" r="5.5" />
                    <path
                      d="M8.2 3.8 L13.4 12.6 Q13.9 13.4 13 13.4 L3.4 13.4 Q2.5 13.4 3 12.6 L7.2 3.8 Q7.7 3 8.2 3.8 Z"
                      fill="#fff"
                    />
                  </svg>
                  <span className="uppercase tracking-[0.06em] text-[12px] font-semibold text-neutral-800">
                    BLOG &amp; INSIGHT
                  </span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold tracking-[-0.035em] leading-[1.12]">
                <span className="hero-gradient-headline font-['Inter_Tight',sans-serif]">
                  See more blog
                </span>
              </h2>
              <p className="font-['Inter_Tight',sans-serif] text-[15px] sm:text-[16.5px] text-[#55565e] leading-relaxed font-normal">
                Explore trends, case studies, and insights from our AI experts.
              </p>
            </div>

            {/* 3 Featured Blog Cards matching Blog page & On-Feature styling */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
              {moreBlogs.map((post) => (
                <article
                  key={post.id}
                  className="blog-card-hover group flex flex-col"
                >
                  {/* Top Image Frame */}
                  <div className="relative aspect-[1.38/1] overflow-hidden rounded-[24px] border border-white bg-neutral-100 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:rounded-[28px]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover object-center grayscale contrast-105 transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Bottom Content Container */}
                  <div className="-mt-px flex min-h-[214px] flex-1 flex-col rounded-[24px] border border-white bg-[#f7f7f7] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:rounded-[28px] sm:p-7">
                    <h3 className="text-[21px] font-medium leading-[1.28] tracking-[-0.045em] text-[#111113] sm:text-[24px]">
                      {post.title}
                    </h3>

                    <button
                      onClick={() => {
                        if (onNavigate) {
                          onNavigate('blog');
                          window.history.pushState({}, '', `/blog-details?id=${post.id}`);
                        } else {
                          window.location.href = `/blog-details?id=${post.id}`;
                        }
                      }}
                      className="mt-auto w-full rounded-[14px] border border-neutral-200/90 bg-white px-4 py-4 text-center text-[16px] font-medium text-[#111113] shadow-[0_8px_18px_rgba(0,0,0,0.08)] transition-all hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.99] cursor-pointer"
                    >
                      Read Blog
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FREQUENTLY ASKED QUESTIONS SECTION */}
        <FAQSection variant="pricing" onContactClick={handleContactClick} />

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
