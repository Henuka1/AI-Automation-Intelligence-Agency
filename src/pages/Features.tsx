import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { images } from '../assets/images';
import {
  Sparkles,
  Zap,
  Monitor,
  PieChart,
  Award,
  ShieldCheck,
  TrendingUp,
  Bot,
  Cloud,
  ChevronDown,
  ChevronUp,
  Star,
  Layers,
  Code2,
  Calendar,
  FileText,
  User,
  BarChart3,
  Headphones,
  Database,
  Tag,
  RefreshCw,
} from 'lucide-react';
import { LogoipsumDisc } from '../components/BrandLogos';

interface FeaturesProps {
  onNavigate?: (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' | 'privacy' | '404') => void;
}

export const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<string | undefined>(undefined);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  // 6 FAQ Items matching screenshot
  const faqs = [
    {
      q: 'Why is a strong brand identity or website important?',
      a: 'A robust brand identity and website serve as the face of your business, shaping how it is perceived by potential customers. They not only convey professionalism but also establish trust and credibility, vital factors in today\'s competitive market.',
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

  // Testimonial cards data matching screenshot
  const testimonials = [
    {
      id: '1',
      quote:
        '“Their predictive analytics helped us forecast trends more accurately than our previous tools. It\'s like having a crystal ball for our business.”',
      author: 'Samson Betawi',
      role: 'CMO at GreenTech',
      rating: '4.9',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: '2',
      quote:
        '“Routine tasks are now fully automated, and we can focus on strategic work that really moves the needle. It\'s like having an extra set of hands—only smarter.',
      author: 'Gile Mandra',
      role: 'CMO at GreenTech',
      rating: '4.9',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: '3',
      quote:
        '“The AI chatbot handles over 80% of our support tickets—and customers love the 24/7 response time.”',
      author: 'Jamie Rundals',
      role: 'CMO at GreenTech',
      rating: '4.9',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: '4',
      quote:
        '“Their helped us automate 70% of our manual work in under 3 months and helped triple our online engagement just in six months. Real game-changer!”',
      author: 'Bills Terra',
      role: 'CMO at GreenTech',
      rating: '4.9',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: '5',
      quote:
        '“Before this, we were juggling spreadsheets and manual updates. Now everything\'s automated. “',
      author: 'Kalio Huosen',
      role: 'CMO at GreenTech',
      rating: '4.9',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. NAVBAR */}
      <Navbar
        currentPage="features"
        onNavigate={onNavigate}
        onBookDemo={() => handleOpenModal('Book a Demo')}
      />

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <section className="pt-36 sm:pt-44 pb-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#fbfbfb] via-[#f8f8f9] to-white">
          <div className="max-w-4xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-7 select-none">
              <div className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <span className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-neutral-800">
                FEATURES
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-medium tracking-tight text-[#111113] leading-[1.12]">
              Everything You Need to Build,
              <br />
              Scale & Succeed with AI
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-sm sm:text-[15.5px] text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              We provide powerful, flexible, and secure AI solutions—built for real business outcomes.
            </p>
          </div>
        </section>

        {/* 3. CAPABILITIES HORIZONTAL STRIP */}
        <section className="border-y border-neutral-100/90 bg-neutral-50/50 py-3.5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-8 text-[11.5px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-neutral-600 whitespace-nowrap overflow-x-auto scrollbar-none">
            <span className="flex items-center gap-2 shrink-0">
              MACHINE LEARNING MODELS
            </span>
            <span className="text-neutral-300">✦</span>
            <span className="flex items-center gap-2 shrink-0">
              <span>⚡</span> AUTOMATION & RPA
            </span>
            <span className="text-neutral-300">✦</span>
            <span className="flex items-center gap-2 shrink-0">
              <span>🌐</span> NATURAL LANGUAGE PROCESSING (NLP)
            </span>
            <span className="text-neutral-300">✦</span>
            <span className="flex items-center gap-2 shrink-0">
              <span>📁</span> AI STRATEGY & CONSULTING
            </span>
            <span className="text-neutral-300">✦</span>
            <span className="flex items-center gap-2 shrink-0">
              <span>🎧</span> CUSTOM AI DEVELOPMENT
            </span>
            <span className="text-neutral-300">✦</span>
            <span className="flex items-center gap-2 shrink-0">
              <span>⚙️</span> MACHINE LEARNING
            </span>
          </div>
        </section>

        {/* 4. BENTO FEATURE GRID (5 CARDS) */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
            {/* ROW 1: 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Real-Time Analytics */}
              <div className="bg-[#FAFAFA] rounded-3xl border border-neutral-200/80 p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition-all">
                {/* Visual: Dial Gauge */}
                <div className="h-56 flex items-center justify-center">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    {/* Dial SVG */}
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {/* Dial tick marks */}
                      {Array.from({ length: 25 }).map((_, i) => {
                        const angle = -120 + i * 10;
                        const isMajor = i % 4 === 0;
                        return (
                          <line
                            key={i}
                            x1="100"
                            y1={isMajor ? "16" : "22"}
                            x2="100"
                            y2="30"
                            stroke={i < 18 ? "#111" : "#d1d5db"}
                            strokeWidth={isMajor ? "3" : "1.5"}
                            strokeLinecap="round"
                            transform={`rotate(${angle} 100 100)`}
                          />
                        );
                      })}
                      {/* Inner white circle */}
                      <circle cx="100" cy="100" r="54" fill="#ffffff" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.06))" />
                      {/* Bar chart & trend line in center */}
                      <g transform="translate(78, 80)">
                        <rect x="6" y="22" width="4.5" height="12" rx="1" fill="#111" />
                        <rect x="15" y="14" width="4.5" height="20" rx="1" fill="#111" />
                        <rect x="24" y="18" width="4.5" height="16" rx="1" fill="#111" />
                        <rect x="33" y="10" width="4.5" height="24" rx="1" fill="#111" />
                        <polyline
                          points="8,15 17,9 26,12 35,6"
                          fill="none"
                          stroke="#111"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <circle cx="8" cy="15" r="2" fill="#111" />
                        <circle cx="17" cy="9" r="2" fill="#111" />
                        <circle cx="26" cy="12" r="2" fill="#111" />
                        <circle cx="35" cy="6" r="2" fill="#111" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-neutral-900">Real-Time Analytics</h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] text-neutral-500 leading-relaxed">
                    Stay ahead with accurate, real-time performance tracking.
                  </p>
                </div>
              </div>

              {/* Card 2: AI-Driven Growth */}
              <div className="bg-[#FAFAFA] rounded-3xl border border-neutral-200/80 p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition-all">
                {/* Visual: Metric & Bars */}
                <div className="h-56 relative flex flex-col justify-center px-3">
                  <div className="absolute top-2 left-2 bg-white border border-neutral-200/90 rounded-full px-2.5 py-0.5 text-[10px] font-medium text-neutral-700 shadow-2xs">
                    20% Automation
                  </div>
                  <div className="absolute top-2 right-2 bg-white border border-neutral-200/90 rounded-full px-2.5 py-0.5 text-[10px] font-medium text-neutral-700 shadow-2xs">
                    99% Autorized
                  </div>
                  <div className="absolute top-14 left-1 bg-white border border-neutral-200/90 rounded-full px-2 py-0.5 text-[10px] font-bold text-neutral-800 shadow-2xs">
                    +12.8%
                  </div>

                  <div className="mt-12 text-3xl font-bold tracking-tight text-neutral-950">
                    3.18K
                  </div>

                  {/* 6 Multi-segmented vertical bars */}
                  <div className="flex items-end justify-between gap-2.5 mt-3 h-20">
                    {[
                      { top: 'h-4 bg-neutral-200', mid: 'h-6 bg-neutral-400', bot: 'h-10 bg-neutral-900' },
                      { top: 'h-3 bg-neutral-200', mid: 'h-5 bg-neutral-400', bot: 'h-12 bg-neutral-900' },
                      { top: 'h-5 bg-neutral-200', mid: 'h-7 bg-neutral-400', bot: 'h-8 bg-neutral-900' },
                      { top: 'h-4 bg-neutral-200', mid: 'h-8 bg-neutral-400', bot: 'h-14 bg-neutral-900' },
                      { top: 'h-3 bg-neutral-200', mid: 'h-6 bg-neutral-400', bot: 'h-11 bg-neutral-900' },
                      { top: 'h-6 bg-neutral-200', mid: 'h-7 bg-neutral-400', bot: 'h-16 bg-neutral-900' },
                    ].map((col, idx) => (
                      <div key={idx} className="flex-1 flex flex-col gap-1 items-center justify-end">
                        <div className={`w-full rounded-full ${col.top}`} />
                        <div className={`w-full rounded-full ${col.mid}`} />
                        <div className={`w-full rounded-full ${col.bot}`} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-neutral-900">AI-Driven Growth</h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] text-neutral-500 leading-relaxed">
                    Make smarter moves with accurate, real-time business insights.
                  </p>
                </div>
              </div>

              {/* Card 3: Superfast AI response */}
              <div className="bg-[#FAFAFA] rounded-3xl border border-neutral-200/80 p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition-all">
                {/* Visual: Chat Dialogue */}
                <div className="h-56 flex flex-col justify-center space-y-3.5">
                  {/* User message */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-neutral-300 overflow-hidden shrink-0 mt-0.5">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                        alt="Ash Gley"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-neutral-800 block">Ash Gley</span>
                      <div className="mt-0.5 bg-white border border-neutral-200/90 rounded-2xl rounded-tl-sm px-3.5 py-2 text-[11.5px] text-neutral-700 shadow-2xs">
                        Give me the total profit for this week
                      </div>
                    </div>
                  </div>

                  {/* Axonix response */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-3.5 h-3.5 rounded-full border border-white flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-neutral-900 block">Axonix</span>
                      <div className="mt-0.5 bg-white border border-neutral-200/90 rounded-2xl rounded-tl-sm px-3.5 py-2 text-[11px] text-neutral-600 leading-relaxed shadow-2xs">
                        Okay according to your request,
                        <br />
                        I will make a profit recap for this week.
                        <br />
                        Just a moment...
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-neutral-900">Superfast AI response</h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] text-neutral-500 leading-relaxed">
                    Discover how AI can enhance every aspect of your web design workflow.
                  </p>
                </div>
              </div>
            </div>

            {/* ROW 2: 2 Wide Cards (Automatics Repetitive Task & Secured Management) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 4: Automatics Repetitive Task */}
              <div className="bg-[#FAFAFA] rounded-3xl border border-neutral-200/80 p-8 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition-all">
                {/* Visual: Orbit / automation node network */}
                <div className="h-56 relative flex items-center justify-center">
                  {/* Outer subtle concentric dotted ring */}
                  <div className="absolute w-48 h-48 rounded-full border border-dashed border-neutral-200" />
                  <div className="absolute w-36 h-36 rounded-full border border-neutral-200/60" />

                  {/* Center black node with sync icon */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#111113] flex items-center justify-center shadow-md">
                    <RefreshCw className="w-6 h-6 text-white animate-spin-slow" />
                  </div>

                  {/* Floating icon chips around orbit matching screenshot */}
                  <div className="absolute -top-1 left-20 bg-white border border-neutral-200/90 w-8 h-8 rounded-full flex items-center justify-center shadow-xs">
                    <FileText className="w-3.5 h-3.5 text-neutral-700" />
                  </div>
                  <div className="absolute top-10 left-6 bg-white border border-neutral-200/90 w-8 h-8 rounded-full flex items-center justify-center shadow-xs">
                    <Calendar className="w-3.5 h-3.5 text-neutral-700" />
                  </div>
                  <div className="absolute bottom-6 left-12 bg-white border border-neutral-200/90 w-8 h-8 rounded-full flex items-center justify-center shadow-xs">
                    <User className="w-3.5 h-3.5 text-neutral-700" />
                  </div>
                  <div className="absolute -bottom-1 left-32 bg-white border border-neutral-200/90 w-8 h-8 rounded-full flex items-center justify-center shadow-xs">
                    <Headphones className="w-3.5 h-3.5 text-neutral-700" />
                  </div>
                  <div className="absolute -top-1 right-20 bg-white border border-neutral-200/90 w-8 h-8 rounded-full flex items-center justify-center shadow-xs">
                    <Code2 className="w-3.5 h-3.5 text-neutral-700" />
                  </div>
                  <div className="absolute top-10 right-6 bg-white border border-neutral-200/90 w-8 h-8 rounded-full flex items-center justify-center shadow-xs">
                    <BarChart3 className="w-3.5 h-3.5 text-neutral-700" />
                  </div>
                  <div className="absolute bottom-6 right-12 bg-white border border-neutral-200/90 w-8 h-8 rounded-full flex items-center justify-center shadow-xs">
                    <Tag className="w-3.5 h-3.5 text-neutral-700" />
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-neutral-900">Automatics Repetitive Task</h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] text-neutral-500 leading-relaxed max-w-md">
                    We&apos;re a team of builders, designers, and strategists who believe software shouldn&apos;t slow you down — it should accelerate your business.
                  </p>
                </div>
              </div>

              {/* Card 5: Secured Management */}
              <div className="bg-[#FAFAFA] rounded-3xl border border-neutral-200/80 p-8 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition-all">
                {/* Visual: Metallic Black 3D Shield */}
                <div className="h-56 flex items-center justify-center">
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    <img
                      src={images.securedShieldAi}
                      alt="Secured Management 3D Shield"
                      className="w-full h-full object-contain filter drop-shadow-md"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-neutral-900">Secured Management</h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] text-neutral-500 leading-relaxed max-w-md">
                    Stay ahead of regulations with automated KYC/AML checks and audit trails.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. "WHY CHOOSE US?" (6 CARDS + 1 BLACK BANNER CARD) */}
        <section className="py-16 sm:py-24 bg-white border-t border-neutral-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Eyebrow badge */}
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
              {/* Card 1 */}
              <div className="bg-[#FAFAFA] rounded-2xl border border-neutral-200/80 p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 mb-5 shadow-2xs">
                    <Zap className="w-4 h-4 text-neutral-900" />
                  </div>
                  <h3 className="text-base font-semibold text-[#111113] leading-snug">
                    Fast, scalable, and tailored solutions
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-neutral-500 leading-relaxed">
                    Send, receive, and manage payments—all in one place, fully encrypted and compliant.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FAFAFA] rounded-2xl border border-neutral-200/80 p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 mb-5 shadow-2xs">
                    <Monitor className="w-4 h-4 text-neutral-900" />
                  </div>
                  <h3 className="text-base font-semibold text-[#111113] leading-snug">
                    Hands-on AI expertise, not just theory
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-neutral-500 leading-relaxed">
                    Connect with your favorite tools: QuickBooks, Stripe, Xero, Plaid, and more.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#FAFAFA] rounded-2xl border border-neutral-200/80 p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 mb-5 shadow-2xs">
                    <PieChart className="w-4 h-4 text-neutral-900" />
                  </div>
                  <h3 className="text-base font-semibold text-[#111113] leading-snug">
                    Results-driven with measurable ROI
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-neutral-500 leading-relaxed">
                    Stay ahead of regulations with automated KYC/AML checks and audit trails.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#FAFAFA] rounded-2xl border border-neutral-200/80 p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 mb-5 shadow-2xs">
                    <Award className="w-4 h-4 text-neutral-900" />
                  </div>
                  <h3 className="text-base font-semibold text-[#111113] leading-snug">
                    Cross-industry experience
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-neutral-500 leading-relaxed">
                    Send, receive, and manage payments—all in one place, fully encrypted and compliant.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-[#FAFAFA] rounded-2xl border border-neutral-200/80 p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 mb-5 shadow-2xs">
                    <ShieldCheck className="w-4 h-4 text-neutral-900" />
                  </div>
                  <h3 className="text-base font-semibold text-[#111113] leading-snug">
                    Security and privacy at every step
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-neutral-500 leading-relaxed">
                    Connect with your favorite tools: QuickBooks, Stripe, Xero, Plaid, and more.
                  </p>
                </div>
              </div>

              {/* Card 6: THE BLACK CARD */}
              <div className="bg-[#111113] rounded-2xl border border-neutral-900 p-6 sm:p-7 flex flex-col justify-between text-white shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
                <div>
                  <p className="text-sm sm:text-[15px] font-normal leading-relaxed text-neutral-300">
                    We&apos;ve partnered with companies in{' '}
                    <strong className="text-white font-semibold">e-commerce</strong> and more to deliver transformative AI solutions.
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => handleOpenModal('Custom AI Partnership')}
                    className="bg-white text-neutral-950 hover:bg-neutral-100 rounded-full py-2.5 px-6 text-xs sm:text-[13px] font-semibold transition-all cursor-pointer shadow-xs active:scale-98"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. "CLASSIFICATION & RECOMMENDATION ENGINES" (SPLIT SECTION) */}
        <section className="py-16 sm:py-24 bg-white border-t border-neutral-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column: Headings & 3 Feature Points */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
                    <Sparkles className="w-3 h-3 text-neutral-700" />
                    <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
                      OUR FEATURES
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-medium text-[#111113] tracking-tight leading-[1.18]">
                  Classification &
                  <br />
                  recommendation engines
                </h2>

                <p className="text-xs sm:text-[13.5px] text-neutral-500 leading-relaxed">
                  Tailored machine learning models built for your specific business challenges—no one-size-fits-all. Tailored machine learning models built for your specific business challenges—no one-size-fits-all.
                </p>

                {/* 3 Step Features */}
                <div className="space-y-6 pt-2">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#111113] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#111113]">
                        Forecasting & demand planning
                      </h3>
                      <p className="text-xs sm:text-[13px] text-neutral-500 mt-1 leading-relaxed">
                        We begin by examining your existing workflows to identify where AI can deliver the greatest impact.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#111113] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#111113]">
                        Robotic Process Automation (RPA)
                      </h3>
                      <p className="text-xs sm:text-[13px] text-neutral-500 mt-1 leading-relaxed">
                        Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#111113] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Cloud className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#111113]">
                        Scalable cloud-based automation
                      </h3>
                      <p className="text-xs sm:text-[13px] text-neutral-500 mt-1 leading-relaxed">
                        After deployment, we provide support and refine your AI systems to keep them performing at their best.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: High Quality Laptop with AI Interface Photo */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-[0_16px_40px_rgba(0,0,0,0.06)] bg-neutral-900 group">
                  <img
                    src={images.featuresLaptopAi}
                    alt="AI Classification and recommendation interface on laptop"
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-102"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. "WHAT OUR CLIENTS SAY" (TESTIMONIALS) */}
        <section className="py-16 sm:py-24 bg-white border-t border-neutral-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Eyebrow badge */}
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
                <Sparkles className="w-3 h-3 text-neutral-700" />
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
                  TESTIMONIALS
                </span>
              </div>
            </div>

            {/* Title */}
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-medium text-[#111113] tracking-tight leading-tight">
                What Our Clients Say
              </h2>
              <p className="mt-3 text-sm sm:text-[14.5px] text-neutral-500 leading-relaxed">
                Live dashboards and custom reports that surface the insights you need—instantly.
              </p>
            </div>

            {/* Testimonials Grid: Top row 2 wide cards, Bottom row 3 cards */}
            <div className="mt-12 sm:mt-16 space-y-6">
              {/* Row 1: 2 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.slice(0, 2).map((t) => (
                  <div
                    key={t.id}
                    className="bg-[#FAFAFA] rounded-2xl border border-neutral-200/80 p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition-all"
                  >
                    <div>
                      {/* Logoipsum logo header */}
                      <div className="mb-5">
                        <LogoipsumDisc />
                      </div>
                      <p className="text-sm sm:text-[14.5px] text-neutral-800 font-normal leading-relaxed">
                        {t.quote}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={t.avatar}
                          alt={t.author}
                          className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                        />
                        <div>
                          <h4 className="text-sm font-semibold text-neutral-900">{t.author}</h4>
                          <p className="text-xs text-neutral-500">{t.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-neutral-900">
                        <Star className="w-3.5 h-3.5 fill-black text-black" />
                        <span>{t.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2: 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.slice(2, 5).map((t) => (
                  <div
                    key={t.id}
                    className="bg-[#FAFAFA] rounded-2xl border border-neutral-200/80 p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-neutral-300 transition-all"
                  >
                    <div>
                      <div className="mb-5">
                        <LogoipsumDisc />
                      </div>
                      <p className="text-xs sm:text-[13.5px] text-neutral-800 font-normal leading-relaxed">
                        {t.quote}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={t.avatar}
                          alt={t.author}
                          className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                        />
                        <div>
                          <h4 className="text-xs font-semibold text-neutral-900">{t.author}</h4>
                          <p className="text-[11px] text-neutral-500">{t.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-neutral-900">
                        <Star className="w-3.5 h-3.5 fill-black text-black" />
                        <span>{t.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. "QUESTIONS? WE'RE HERE TO ASSIST!" (FAQ) */}
        <section id="faq" className="py-16 sm:py-24 bg-white border-t border-neutral-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Title & Contact CTA */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
                    <Sparkles className="w-3 h-3 text-neutral-700" />
                    <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
                      FREQUENTLY ASKED QUESTIONS
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-medium text-[#111113] tracking-tight leading-[1.18]">
                  Questions? We&apos;re
                  <br />
                  here to assist!
                </h2>

                <p className="text-xs sm:text-[13.5px] text-neutral-500 leading-relaxed max-w-sm">
                  Position your brand at the forefront, leading trends, captivating audiences, and creating lasting market impressions.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleContactClick}
                    className="bg-[#111113] hover:bg-neutral-800 text-white rounded-full px-6 py-2.5 text-xs sm:text-sm font-medium transition-all shadow-xs cursor-pointer active:scale-98"
                  >
                    Contact Us
                  </button>
                </div>
              </div>

              {/* Right Column: Accordion list matching screenshot */}
              <div className="lg:col-span-7 space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                        isOpen && index === 0
                          ? 'bg-[#1C1C1F] text-white shadow-md'
                          : 'bg-[#FAFAFA] border border-neutral-200/90 text-neutral-900'
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className={`w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-medium transition-colors cursor-pointer text-sm sm:text-[14.5px] ${
                          isOpen && index === 0 ? 'text-white' : 'text-neutral-900 hover:text-black'
                        }`}
                      >
                        <span className="leading-snug">{faq.q}</span>
                        <span className="shrink-0 ml-2">
                          {isOpen ? (
                            <ChevronUp className={`w-4 h-4 ${isOpen && index === 0 ? 'text-white' : 'text-neutral-600'}`} />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-neutral-600" />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          className={`px-6 pb-5 text-xs sm:text-[13.5px] leading-relaxed animate-in fade-in duration-150 ${
                            index === 0 ? 'text-neutral-300' : 'text-neutral-600'
                          }`}
                        >
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA ("LET'S BUILD THE FUTURE, TOGETHER") */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-[#F8F8FA] rounded-3xl sm:rounded-[36px] border border-neutral-200/80 p-8 sm:p-12 md:p-14 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center justify-between gap-8">
              {/* Left Content */}
              <div className="space-y-4 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
                  <div className="w-4 h-4 rounded-full bg-neutral-900 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
                    AI AUTOMATION FOR BUSINESSES
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-[34px] font-medium text-[#111113] tracking-tight leading-snug">
                  Let&apos;s Build the Future, Together
                </h2>

                <p className="text-xs sm:text-[13.5px] text-neutral-500 leading-relaxed">
                  Whether you&apos;re exploring AI for the first time or scaling an existing system, we&apos;re ready to help.
                </p>
              </div>

              {/* Right CTA Button */}
              <div className="shrink-0">
                <button
                  onClick={() => handleOpenModal('Free AI Consultation')}
                  className="bg-[#111113] hover:bg-neutral-800 text-white rounded-full px-6 sm:px-7 py-3 text-xs sm:text-[13.5px] font-medium transition-all shadow-xs hover:shadow active:scale-98 whitespace-nowrap cursor-pointer"
                >
                  Book a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 10. FOOTER WITH FLOATING ISOMETRIC CUBE WATERMARK */}
      <Footer onNavigate={onNavigate} />

      {/* DEMO / CONSULTATION MODAL */}
      <DemoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialInterest={selectedInterest}
      />
    </div>
  );
};
