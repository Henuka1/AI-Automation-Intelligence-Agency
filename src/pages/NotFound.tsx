import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import blogBackground from '../assets/images/blog_bg.png';

interface NotFoundProps {
  onNavigate?: (
    page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' |  'privacy' | '404'
  ) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<string | undefined>(undefined);

  const handleOpenModal = (interest?: string) => {
    setSelectedInterest(interest);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleBackToHome = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. NAVBAR */}
      <Navbar
        currentPage="404"
        onNavigate={onNavigate}
        onBookDemo={() => handleOpenModal('Book a Demo')}
      />

      <main className="flex-1">
        {/* 2. HERO / 404 SECTION */}
        <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#fbfbfb] via-[#f8f8f9] to-white overflow-hidden">
          {/* Subtle wavy background overlay matching reference image */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-60" aria-hidden="true">
            <img
              src={blogBackground}
              alt=""
              className="absolute -top-12 h-[calc(100%+48px)] w-full object-cover object-center"
            />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            {/* Giant 404 Numbers with Gradient Shading */}
            <div className="text-[130px] sm:text-[185px] md:text-[230px] lg:text-[260px] font-bold tracking-tight leading-[0.88] select-none bg-gradient-to-b from-[#2e2e34] via-[#5c5c67] to-[#b0b0ba]/55 bg-clip-text text-transparent">
              404
            </div>

            {/* Headline */}
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-[46px] font-semibold tracking-tight text-[#111113] leading-[1.15]">
              Page Not Found !!
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-[14.5px] sm:text-[15.5px] text-[#55555c] max-w-md mx-auto leading-relaxed font-normal">
              Helping bold brands grow through strategy and creativity
            </p>

            {/* Back to Home Button */}
            <div className="mt-8 sm:mt-9">
              <button
                type="button"
                onClick={handleBackToHome}
                className="inline-flex items-center justify-center rounded-[12px] bg-gradient-to-b from-[#2b2b2d] to-[#111113] px-7 py-3 text-[14px] font-medium text-white shadow-[0_10px_22px_-5px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.16)] transition-all hover:-translate-y-0.5 hover:from-[#323236] hover:to-[#151518] hover:shadow-[0_14px_28px_-6px_rgba(0,0,0,0.48)] active:scale-[0.98] cursor-pointer"
              >
                Back To Home
              </button>
            </div>
          </div>
        </section>

        {/* 3. FINAL CTA BANNER */}
        <FinalCTA onConsultationClick={() => handleOpenModal('Free Consultation')} />
      </main>

      {/* 4. FOOTER */}
      <Footer onNavigate={onNavigate} />

      {/* 5. DEMO MODAL */}
      <DemoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialInterest={selectedInterest}
      />
    </div>
  );
};
