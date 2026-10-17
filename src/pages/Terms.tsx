import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import blogBackground from '../assets/images/blog_bg.png';

interface TermsProps {
  onNavigate?: (
    page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' | 'privacy' | '404'
  ) => void;
}

export const Terms: React.FC<TermsProps> = ({ onNavigate }) => {
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
      {/* 1. NAVBAR */}
      <Navbar
        currentPage="terms"
        onNavigate={onNavigate}
        onBookDemo={() => handleOpenModal('Book a Demo')}
      />

      <main className="flex-1">
        {/* 2. HERO / HEADER SECTION */}
        <section className="relative pt-36 sm:pt-44 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#fbfbfb] via-[#f8f8f9] to-white overflow-hidden">
          {/* Subtle wavy background overlay matching screenshot */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-60" aria-hidden="true">
            <img
              src={blogBackground}
              alt=""
              className="absolute -top-12 h-[calc(100%+32px)] w-full object-cover object-center"
            />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Eyebrow Pill Badge */}
            <div className="mb-5 inline-flex h-6 items-center gap-1.5 rounded-full border border-white bg-white px-1.5 pr-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.12)] select-none">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_28%,#454545_0%,#171717_48%,#050505_100%)] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3),0_2px_5px_rgba(0,0,0,0.25)]">
                <svg
                  className="h-2.5 w-2.5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="5" width="14" height="14" rx="2" />
                  <path d="M9 9h6v6H9zM9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4" />
                </svg>
              </div>
              <span className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-neutral-800">
                TERMS OF CONDITIONS
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-['Inter'] text-[clamp(1.625rem,5.3vw,2.75rem)] font-medium tracking-[-0.055em] leading-[1.1] bg-gradient-to-b from-[#777777] to-[#343434] bg-clip-text text-transparent">
              Terms of Conditions
            </h1>
          </div>
        </section>

        {/* 3. LEGAL CONTENT (Exact text and layout from reference screenshot) */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-6 sm:space-y-8 font-['Inter']">
            {/* Section 1: Cookies */}
            <div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-2">
                Cookies
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                We employ the use of cookies. By accessing website, you agreed to use cookies in agreement with Privacy Policy.
              </p>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal mt-4">
                Most interactive websites use cookies to retrieve user details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
              </p>
            </div>

            {/* Section 2: License */}
            <div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-2">
                License
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                Unless otherwise stated, Axonix and/or its licensors own the intellectual property rights for all material on Axonix. All intellectual property rights are reserved. You may access this from Axonix for your own personal use subjected to restrictions set in these terms and conditions.
              </p>

              <div className="my-3 text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] space-y-1 font-normal">
                <p>You must not:</p>
                <p>Republish material from Axonix</p>
                <p>Sell, rent, or sub-license material from Axonix</p>
                <p>Reproduce, duplicate, or copy material from Axonix</p>
                <p>Redistribute content from Axonix</p>
              </div>

              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                This Agreement shall begin on the date hereof.
              </p>
            </div>

            {/* Section 3: Content Liability */}
            <div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-2">
                Content Liability
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                We shall not be hold responsible for any content that appears on your website. You agree to protect and defend us against all claims that are rising on your website. No link(s) should appear on any website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third-party rights.
              </p>
            </div>

            {/* Section 4: Disclaimer */}
            <div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-2">
                Disclaimer
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
              </p>

              <div className="my-3 text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] space-y-1 font-normal">
                <p>Limit or exclude our or your liability for death or personal injury;</p>
                <p>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</p>
                <p>Limit any of our or your liabilities in any way that is not permitted under applicable law; or</p>
                <p>Exclude any of our or your liabilities that may not be excluded under applicable law.</p>
              </div>

              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
              </p>

              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal mt-4">
                As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
              </p>
            </div>
          </div>
        </section>

        {/* 4. PRE-FOOTER CTA SECTION (Let's Build the Future, Together) */}
        <FinalCTA onConsultationClick={() => handleOpenModal('Terms of Conditions Consultation')} />
      </main>

      {/* 5. FOOTER */}
      <Footer onNavigate={onNavigate} />

      {/* 6. DEMO / CONSULTATION MODAL */}
      <DemoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialInterest={selectedInterest}
      />
    </div>
  );
};
