import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { LogoStrip } from '../components/LogoStrip';
import { IntroSection } from '../components/IntroSection';
import { StatsSection } from '../components/StatsSection';
import { AgencySection } from '../components/AgencySection';
import { CollaborationSection } from '../components/CollaborationSection';
import { ServicesSection } from '../components/ServicesSection';
import { CaseStudySection } from '../components/CaseStudySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PricingSection } from '../components/PricingSection';
import { InsightsSection } from '../components/InsightsSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';

interface HomeProps {
  onNavigate?: (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' |  'privacy' | '404') => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<string | undefined>(undefined);

  const handleOpenModal = (interest?: string) => {
    setSelectedInterest(interest);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* SECTION 1 — NAVIGATION */}
      <Navbar
        currentPage="home"
        onNavigate={onNavigate}
        onBookDemo={() => handleOpenModal('Strategy Consultation')}
      />

      <main className="flex-1">
        {/* SECTION 2 — HERO */}
        <Hero
          onBookDemo={() => handleOpenModal('Product Demo')}
          onExploreWork={() => {
            const el = document.getElementById('case-study');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* SECTION 3 — TRUST / CLIENT LOGOS */}
        <LogoStrip />

        {/* SECTION 4 — INTRODUCTION */}
        <IntroSection />

        {/* SECTION 5 — EMPOWERING THE FUTURE / STATS */}
        <StatsSection />

        {/* SECTION 6 — PARTNER WITH AN AI AGENCY */}
        <AgencySection />

        {/* SECTION 7 — TRANSPARENT COLLABORATION */}
        <CollaborationSection onBookDemo={() => handleOpenModal('Workflow Consultation')} />

        {/* SECTION 8 — AI SOLUTIONS / WHY CHOOSE US */}
        <ServicesSection onGetStarted={() => handleOpenModal('Custom AI Partnership')} />

        {/* SECTION 9 — PROVEN RESULTS, REAL IMPACT */}
        <CaseStudySection
          onSeeCaseStudy={() => {
            if (onNavigate) {
              onNavigate('case-study');
            } else {
              handleOpenModal('Fresh Care Case Study');
            }
          }}
        />

        {/* SECTION 10 — TESTIMONIALS */}
        <TestimonialsSection />

        {/* SECTION 11 — PRICING */}
        <PricingSection onSelectPlan={(planId) => handleOpenModal(`Pricing Plan: ${planId}`)} />

        {/* SECTION 12 — AI INSIGHTS / BLOG */}
        <InsightsSection onReadArticle={(id) => handleOpenModal(`Article #${id} Deep Dive`)} />

        {/* SECTION 13 — FAQ */}
        <FAQSection onContactClick={() => handleOpenModal('Inquiry')} />

        {/* SECTION 14 — FINAL CTA */}
        <FinalCTA onConsultationClick={() => handleOpenModal('Free AI Consultation')} />
      </main>

      {/* SECTION 15 — FOOTER */}
      <Footer onNavigate={onNavigate} />

      {/* Interactive Modal */}
      <DemoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialInterest={selectedInterest}
      />
    </div>
  );
};
