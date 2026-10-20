import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { LogoStrip } from '../components/LogoStrip';
import { CaseStudySection } from '../components/CaseStudySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { images } from '../assets/images';
import blogBackground from '../assets/images/blog_bg.png';
import { Users, Zap, Globe, Sparkles, Cpu } from 'lucide-react';
import { FeatureBadgeIcon, ChipPillIcon } from '../components/BrandLogos';

interface AboutProps {
  onNavigate?: (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' | 'privacy' | '404') => void;
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

  // Scroll-triggered fade-in for statement paragraphs
  const para1Ref = useRef<HTMLParagraphElement>(null);
  const para2Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-story-para--visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    if (para1Ref.current) observer.observe(para1Ref.current);
    if (para2Ref.current) observer.observe(para2Ref.current);
    return () => observer.disconnect();
  }, []);

  // 6 team member portrait data matching reference screenshot
  const teamMembers = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      alt: 'Team member - Senior AI Engineer',
      fallback: images.teamPortraitOne,
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      alt: 'Team member - Product Designer',
      fallback: images.teamPortraitTwo,
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

  const marqueeIcons = [ChipPillIcon, ChipPillIcon, Zap, Globe, Sparkles, ChipPillIcon, ChipPillIcon, Zap];

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. TOP NAVBAR */}
      <Navbar
        currentPage="about"
        onNavigate={onNavigate}
        onBookDemo={() => handleOpenModal('About Demo')}
      />

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <section
          className="about-hero-feature relative pt-36 sm:pt-44 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#fbfbfb] via-[#f8f8f9] to-white overflow-hidden"
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Pill Eyebrow Badge matching screenshot */}
            <div className="about-hero-feature__badge inline-flex h-11 items-center gap-2 rounded-full bg-white px-2 pr-4 border border-white shadow-[0_10px_24px_rgba(0,0,0,0.14)] mb-5 transition-transform hover:scale-105">
              <span className="about-hero-feature__badge-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#151515] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25),0_3px_8px_rgba(0,0,0,0.25)]">
                <Cpu className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#171717]">
                ABOUT US
              </span>
            </div>

            {/* Title with vertical fade matching screenshot */}
            <h1 className="about-hero-feature__title tracking-[-0.04em] leading-[1.08] font-semibold max-w-6xl mx-auto">
              <span className="hero-gradient-headline about-hero-feature__first-line block font-medium">
                Building the Future with
              </span>
              <span className="hero-gradient-headline about-hero-feature__second-line block font-bold mt-1 whitespace-nowrap">
                Human-Centered AI
              </span>
            </h1>

            {/* Subtitle */}
            <p className="about-hero-feature__copy about-hero-feature__description mt-7 text-[15px] sm:text-base md:text-[17px] font-normal leading-relaxed max-w-none mx-auto whitespace-nowrap">
              We build intelligent tools, systems, and strategies that help businesses scale,
              automate, and innovate—faster.
            </p>
          </div>
        </section>

        {/* 3. TRUSTED BY 2.200 COMPANIES */}
        <LogoStrip />

        {/* 4. STATEMENT & 4 STAT METRICS SECTION */}
        <section className="about-story-feature bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1500px] px-4 sm:px-8">
            {/* Main Statement */}
            <div className="about-story-feature__text mx-auto text-center font-medium">
              <p ref={para1Ref} className="about-story-para about-story-para--1 about-story-feature__lead text-[#0D0E11]">
                <span className="about-story-feature__line block">
                  Since our founding, we&apos;ve helped startups, enterprises, and global brands
                </span>
                <span className="about-story-feature__line block">
                  unlock the power of intelligent automation and machine learning.
                </span>
              </p>
              <p ref={para2Ref} className="about-story-para about-story-para--2 mt-8 text-[#0D0E11] sm:mt-10">
                <span className="about-story-feature__line block">
                  Whether it&apos;s building custom AI tools, automating operations, or
                </span>
                <span className="about-story-feature__line block">
                  enhancing customer experiences, we partner closely with clients to turn
                </span>
                <span className="about-story-feature__line block">
                  ambitious ideas into real-world impact.
                </span>
              </p>
            </div>

            {/* 4 Metric Cards matching screenshot */}
            <div className="about-story-feature__metrics grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mx-auto mt-14 sm:mt-20">
              {/* Metric 1 */}
              <div className="about-metric-card bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-7 text-left shadow-[0_2px_10px_rgba(0,0,0,0.02)]" tabIndex={0}>
                <div className="about-metric-value text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight leading-none">
                  20%
                </div>
                <p className="about-metric-label text-xs sm:text-[13px] mt-3 font-normal">
                  Average selling product
                </p>
              </div>

              {/* Metric 2 */}
              <div className="about-metric-card bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-7 text-left shadow-[0_2px_10px_rgba(0,0,0,0.02)]" tabIndex={0}>
                <div className="about-metric-value text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight leading-none">
                  9%
                </div>
                <p className="about-metric-label text-xs sm:text-[13px] mt-3 font-normal">
                  Improved team output
                </p>
              </div>

              {/* Metric 3 */}
              <div className="about-metric-card bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-7 text-left shadow-[0_2px_10px_rgba(0,0,0,0.02)]" tabIndex={0}>
                <div className="about-metric-value text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight leading-none">
                  22%
                </div>
                <p className="about-metric-label text-xs sm:text-[13px] mt-3 font-normal">
                  Client trust with Us
                </p>
              </div>

              {/* Metric 4 */}
              <div className="about-metric-card bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-7 text-left shadow-[0_2px_10px_rgba(0,0,0,0.02)]" tabIndex={0}>
                <div className="about-metric-value text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight leading-none">
                  $1M+
                </div>
                <p className="about-metric-label text-xs sm:text-[13px] mt-3 font-normal">
                  Snapshot in every month
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OUR JOURNEY SECTION */}
        <section className="about-journey-feature relative overflow-hidden bg-white py-16 sm:py-20">
          <div className="about-journey-feature__surface" aria-hidden="true" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
            {/* Eyebrow badge */}
            <div className="text-center mb-6">
              <div className="about-journey-feature__badge inline-flex h-12 items-center gap-2 rounded-full bg-white px-4 pr-5 border border-white shadow-[0_9px_20px_rgba(0,0,0,0.14)]">
                <FeatureBadgeIcon className="h-[26px] w-[26px] text-[#111111]" />
                <span className="text-[15px] font-medium tracking-[0.06em] uppercase text-[#111111]">
                  OUR JOURNEY
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="about-journey-feature__title text-2xl sm:text-3xl md:text-[42px] font-medium text-[#111113] tracking-[-0.045em] leading-[1.2] max-w-5xl mx-auto text-center mb-12 sm:mb-16">
              <span className="block">We&apos;re a team of builders, designers, and strategists</span>
              <span className="block">who believe software shouldn&apos;t slow you down — it</span>
              <span className="block">should accelerate your business.</span>
            </h2>

            {/* Large Centerpiece Photo matching screenshot */}
            <div className="about-journey-image-feature relative rounded-[28px] sm:rounded-[38px] overflow-hidden border border-white bg-white p-2.5 sm:p-3">
              <img
                src={images.aboutJourneyVR}
                alt="Axonix Team Journey and Innovation"
                className="about-journey-image-feature__image w-full aspect-[16/9] md:aspect-[2.1/1] object-cover filter grayscale contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Scrolling Pill Tags Marquee matching screenshot */}
            <div className="mt-8 overflow-hidden mask-marquee-edges">
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

        {/* 6. OUR VALUES SECTION (Our Core Commitments) */}
        <section className="about-values-feature bg-white py-16 sm:py-24">
          <div className="w-full px-4 sm:px-8 lg:px-12 text-center">
            {/* Eyebrow badge */}
            <div className="about-values-feature__badge inline-flex h-12 items-center gap-2 rounded-full bg-white px-4 pr-5 border border-white shadow-[0_9px_20px_rgba(0,0,0,0.14)] mb-6">
              <FeatureBadgeIcon className="h-[26px] w-[26px] text-[#111111]" />
              <span className="text-[15px] font-medium tracking-[0.06em] uppercase text-[#111111]">
                OUR VALUES
              </span>
            </div>

            {/* Heading */}
            <h2 className="about-values-feature__title text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#111113] tracking-tight">
              Our Core Commitments
            </h2>

            {/* Subtitle */}
            <p className="about-values-feature__description mt-4 text-sm sm:text-base text-neutral-500 max-w-3xl mx-auto leading-relaxed">
              <span className="block">
                Our values are the foundation of everything we do. They guide how we think, create, and
              </span>
              <span className="block">
                collaborate—shaping the way we approach challenges and deliver solutions.
              </span>
            </p>

            {/* 3 Values Cards matching screenshot */}
            <div className="about-values-feature__cards grid w-full grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-16 text-left">
              {/* Card 1 */}
              <div className="feature-hover-card rounded-[22px]">
                <div className="feature-hover-card-inner about-value-card bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-9">
                <div className="about-value-card__icon w-16 h-16 rounded-2xl bg-[#111113] flex items-center justify-center text-white mb-20">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="about-value-card__title text-lg sm:text-xl font-semibold text-[#111113] tracking-tight">
                  Customer Obsession
                </h3>
                <p className="about-value-card__copy mt-3 text-xs sm:text-[13.5px] text-neutral-500 leading-relaxed">
                  With just five dedicated employees, we took the plunge into the emerging digital
                  world, to help companies maximise their online presence and realise their full
                  potential in e-commerce.
                </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="feature-hover-card rounded-[22px]">
                <div className="feature-hover-card-inner about-value-card bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-9">
                <div className="about-value-card__icon w-16 h-16 rounded-2xl bg-[#111113] flex items-center justify-center text-white mb-20">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="about-value-card__title text-lg sm:text-xl font-semibold text-[#111113] tracking-tight">
                  Operational Mastery
                </h3>
                <p className="about-value-card__copy mt-3 text-xs sm:text-[13.5px] text-neutral-500 leading-relaxed">
                  With just five dedicated employees, we took the plunge into the emerging digital
                  world, to help companies maximise their online presence and realise their full
                  potential in e-commerce.
                </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="feature-hover-card rounded-[22px]">
                <div className="feature-hover-card-inner about-value-card bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-9">
                <div className="about-value-card__icon w-16 h-16 rounded-2xl bg-[#111113] flex items-center justify-center text-white mb-20">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="about-value-card__title text-lg sm:text-xl font-semibold text-[#111113] tracking-tight">
                  Global Belonging
                </h3>
                <p className="about-value-card__copy mt-3 text-xs sm:text-[13.5px] text-neutral-500 leading-relaxed">
                  With just five dedicated employees, we took the plunge into the emerging digital
                  world, to help companies maximise their online presence and realise their full
                  potential in e-commerce.
                </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. MEET OUR TEAM SECTION */}
        <section className="about-team-feature bg-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            {/* Eyebrow badge */}
            <div className="about-team-feature__badge inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 mb-6">
              <FeatureBadgeIcon className="h-4 w-4 text-neutral-800" />
              <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-neutral-800">
                MEET OUR TEAM
              </span>
            </div>

            {/* Heading */}
            <h2 className="about-team-feature__title font-semibold text-[#111113]">
              Real humans. Real experience. Real results.
            </h2>

            {/* Subtitle */}
            <p className="about-team-feature__description mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Live dashboards and custom reports that surface the insights you need—instantly.
            </p>

            {/* 6 Monochrome Portrait Cards Grid matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 mt-12 sm:mt-16">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="about-team-card relative aspect-square overflow-hidden rounded-[34px] border-2 border-white bg-white p-3 sm:p-4"
                >
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="about-team-card__image w-full aspect-square rounded-[22px] object-cover filter grayscale contrast-105"
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
        <TestimonialsSection withHoverEffect />

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
