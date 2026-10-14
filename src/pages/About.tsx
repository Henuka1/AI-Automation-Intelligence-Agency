import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { LogoStrip } from '../components/LogoStrip';
import { CaseStudySection } from '../components/CaseStudySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { images } from '../assets/images';
import { Users, Zap, Globe, Sparkles, Navigation } from 'lucide-react';

interface AboutProps {
  onNavigate?: (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms') => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<string | undefined>(undefined);

  const handleOpenModal = (interest?: string) => {
    setSelectedInterest(interest);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // 6 team member portrait data matching reference screenshot
  const teamMembers = [
    {
      id: 1,
      image: images.teamPortraitOne,
      alt: 'Team member - Senior AI Engineer',
    },
    {
      id: 2,
      image: images.teamPortraitTwo,
      alt: 'Team member - Product Designer',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      alt: 'Team member - Technical Architect',
      fallback: images.teamPortraitOne,
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      alt: 'Team member - Machine Learning Lead',
      fallback: images.teamPortraitTwo,
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      alt: 'Team member - Strategy Director',
      fallback: images.teamPortraitOne,
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
      alt: 'Team member - Engineering Director',
      fallback: images.teamPortraitTwo,
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

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. TOP NAVBAR */}
      <Navbar
        currentPage="about"
        onNavigate={onNavigate}
        onBookDemo={() => handleOpenModal('About Demo')}
      />

      <main className="flex-1 pt-24 sm:pt-28">
        {/* 2. HERO SECTION */}
        <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            {/* Pill Eyebrow Badge matching screenshot */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.06)] mb-8 transition-transform hover:scale-105">
              <span className="w-2 h-2 rounded-full bg-neutral-900" />
              <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
                ABOUT US
              </span>
            </div>

            {/* Title with vertical fade matching screenshot */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] tracking-[-0.035em] leading-[1.12] font-semibold max-w-4xl mx-auto">
              <span className="block text-[#5B5E68] font-medium">
                Building the Future with
              </span>
              <span className="block text-[#0D0E11] font-bold mt-1">
                Human-Centered AI
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-[17px] text-neutral-500 font-normal leading-relaxed max-w-2xl mx-auto">
              We build intelligent tools, systems, and strategies that help businesses scale,
              automate, and innovate—faster.
            </p>
          </div>
        </section>

        {/* 3. TRUSTED BY 2.200 COMPANIES */}
        <LogoStrip />

        {/* 4. STATEMENT & 4 STAT METRICS SECTION */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            {/* Main Statement */}
            <div className="max-w-4xl mx-auto text-center text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] leading-[1.3] font-medium tracking-tight">
              <p className="text-[#0D0E11]">
                Since our founding, we&apos;ve helped startups, enterprises, and global brands unlock
                the power of intelligent automation and machine learning.
              </p>
              <p className="mt-6 text-[#0D0E11]">
                Whether it&apos;s building custom AI tools, automating operations, or enhancing
                customer experiences, we partner closely with clients{' '}
                <span className="text-neutral-400 font-normal">
                  to turn ambitious ideas into real-world impact.
                </span>
              </p>
            </div>

            {/* 4 Metric Cards matching screenshot */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto mt-14 sm:mt-20">
              {/* Metric 1 */}
              <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-7 text-left shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-0.5">
                <div className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0D0E11] tracking-tight leading-none">
                  20%
                </div>
                <p className="text-xs sm:text-[13px] text-neutral-500 mt-3 font-normal">
                  Average selling product
                </p>
              </div>

              {/* Metric 2 */}
              <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-7 text-left shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-0.5">
                <div className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0D0E11] tracking-tight leading-none">
                  9%
                </div>
                <p className="text-xs sm:text-[13px] text-neutral-500 mt-3 font-normal">
                  Improved team output
                </p>
              </div>

              {/* Metric 3 */}
              <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-7 text-left shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-0.5">
                <div className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0D0E11] tracking-tight leading-none">
                  22%
                </div>
                <p className="text-xs sm:text-[13px] text-neutral-500 mt-3 font-normal">
                  Client trust with Us
                </p>
              </div>

              {/* Metric 4 */}
              <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-7 text-left shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-0.5">
                <div className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0D0E11] tracking-tight leading-none">
                  $1M+
                </div>
                <p className="text-xs sm:text-[13px] text-neutral-500 mt-3 font-normal">
                  Snapshot in every month
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OUR JOURNEY SECTION */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Eyebrow badge */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <Navigation className="w-3.5 h-3.5 text-neutral-800 rotate-45" />
                <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
                  OUR JOURNEY
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-medium text-[#111113] tracking-tight leading-[1.28] max-w-4xl mx-auto text-center mb-12 sm:mb-16">
              We&apos;re a team of builders, designers, and strategists who believe software
              shouldn&apos;t slow you down — it should accelerate your business.
            </h2>

            {/* Large Centerpiece Photo matching screenshot */}
            <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-neutral-200/80 shadow-[0_4px_28px_rgba(0,0,0,0.04)]">
              <img
                src={images.aboutJourneyVR}
                alt="Axonix Team Journey and Innovation"
                className="w-full aspect-[16/9] md:aspect-[2.1/1] object-cover filter grayscale contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Scrolling Pill Tags Marquee matching screenshot */}
            <div className="mt-8 overflow-hidden mask-marquee-edges">
              <div className="animate-marquee-left flex items-center gap-4 py-2">
                {marqueeTags.concat(marqueeTags).map((tag, idx) => (
                  <div
                    key={`${tag}-${idx}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200/80 shadow-xs text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-800 uppercase shrink-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. OUR VALUES SECTION (Our Core Commitments) */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-neutral-800" />
              <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
                OUR VALUES
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#111113] tracking-tight">
              Our Core Commitments
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Our values are the foundation of everything we do. They guide how we think, create,
              and collaborate—shaping the way we approach challenges and deliver solutions.
            </p>

            {/* 3 Values Cards matching screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mt-12 sm:mt-16 text-left">
              {/* Card 1 */}
              <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-9 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-1">
                <div className="w-11 h-11 rounded-full bg-[#111113] flex items-center justify-center text-white mb-6">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#111113] tracking-tight">
                  Customer Obsession
                </h3>
                <p className="mt-3 text-xs sm:text-[13.5px] text-neutral-500 leading-relaxed">
                  With just five dedicated employees, we took the plunge into the emerging digital
                  world, to help companies maximise their online presence and realise their full
                  potential in e-commerce.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-9 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-1">
                <div className="w-11 h-11 rounded-full bg-[#111113] flex items-center justify-center text-white mb-6">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#111113] tracking-tight">
                  Operational Mastery
                </h3>
                <p className="mt-3 text-xs sm:text-[13.5px] text-neutral-500 leading-relaxed">
                  With just five dedicated employees, we took the plunge into the emerging digital
                  world, to help companies maximise their online presence and realise their full
                  potential in e-commerce.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-9 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:-translate-y-1">
                <div className="w-11 h-11 rounded-full bg-[#111113] flex items-center justify-center text-white mb-6">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#111113] tracking-tight">
                  Global Belonging
                </h3>
                <p className="mt-3 text-xs sm:text-[13.5px] text-neutral-500 leading-relaxed">
                  With just five dedicated employees, we took the plunge into the emerging digital
                  world, to help companies maximise their online presence and realise their full
                  potential in e-commerce.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. MEET OUR TEAM SECTION */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
              <Users className="w-3.5 h-3.5 text-neutral-800" />
              <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
                MEET OUR TEAM
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#111113] tracking-tight">
              Real humans. Real experience. Real results.
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Live dashboards and custom reports that surface the insights you need—instantly.
            </p>

            {/* 6 Monochrome Portrait Cards Grid matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 mt-12 sm:mt-16">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="rounded-3xl border border-neutral-200/80 bg-neutral-100 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-transform duration-300 hover:scale-[1.02]"
                >
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="w-full aspect-square object-cover filter grayscale contrast-105"
                    onError={(e) => {
                      if (member.fallback) {
                        (e.target as HTMLImageElement).src = member.fallback;
                      }
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CASE STUDY SECTION */}
        <CaseStudySection onSeeCaseStudy={() => handleOpenModal('Case Study Exploration')} />

        {/* 9. TESTIMONIALS SECTION (With exact bold badge & bottom shadow) */}
        <TestimonialsSection />

        {/* 10. PRE-FOOTER CTA SECTION */}
        <FinalCTA onConsultationClick={() => handleOpenModal('Strategy Consultation')} />
      </main>

      {/* 11. FOOTER */}
      <Footer onNavigate={onNavigate} />

      {/* 12. DEMO MODAL */}
      <DemoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialInterest={selectedInterest}
      />
    </div>
  );
};
