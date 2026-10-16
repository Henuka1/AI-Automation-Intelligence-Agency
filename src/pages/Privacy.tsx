import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import blogBackground from '../assets/images/blog_bg.png';

interface PrivacyProps {
  onNavigate?: (
    page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' | 'privacy' | '404'
  ) => void;
}

export const Privacy: React.FC<PrivacyProps> = ({ onNavigate }) => {
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
        currentPage="privacy"
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

          <div className="max-w-4xl mx-auto relative z-10">
            {/* Eyebrow Pill Badge: Lock/Shield Icon + PRIVACY POLICY */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-7 select-none">
              <div className="w-5 h-5 rounded-full bg-[#111113] flex items-center justify-center text-white">
                <svg
                  className="w-3 h-3 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <span className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-neutral-800">
                PRIVACY POLICY
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#111113] leading-[1.12]">
              Privacy Policy
            </h1>
          </div>
        </section>

        {/* 3. LEGAL CONTENT (Exact text and layout from reference screenshot) */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-12 sm:space-y-14">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-4">
                Introduction
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                Welcome to Vergo. At Vergo, we respect your privacy and are committed to protecting any personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
              </p>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal mt-4">
                By accessing or using our services, you consent to the terms outlined in this Privacy Policy.
              </p>
            </div>

            {/* 1.1 Personal Information */}
            <div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-4">
                1.1 Personal Information
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                Data analytics is revolutionizing the way marketers understand consumer behavior in today&apos;s digital age. By harnessing the power of data collected from diverse sources such as social media, website interactions, and purchasing patterns, marketers can unlock valuable insights into their target audience.
              </p>
            </div>

            {/* 1.2 Non-Personal Information */}
            <div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-4">
                1.2 Non-Personal Information
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                We may also collect non-personal information, such as your IP address, browser type, the pages you visit, and other statistical data. This information helps us analyze trends, enhance user experience, and administer our website.
              </p>
            </div>

            {/* 1.3 Content Liability */}
            <div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-4">
                1.3 Content Liability
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                We use the information we collect for various purposes, including:
              </p>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal mt-4">
                Providing and maintaining our services.
              </p>

              <div className="my-5 space-y-1.5 text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                <p>• &nbsp;Personalizing your experience on our website.</p>
                <p>• &nbsp;Sending you relevant communications, such as newsletters and updates.</p>
                <p>• &nbsp;Improving our website and services.</p>
                <p>• &nbsp;Responding to your inquiries and providing customer support.</p>
                <p>• &nbsp;Complying with legal obligations.</p>
              </div>
            </div>

            {/* 1.4 Cookies and Tracking Technologies */}
            <div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-4">
                1.4 Cookies and Tracking Technologies
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small files stored on your device that collect data about your browsing behavior. You can configure your browser to block cookies, but this may impact certain functionalities of our website.
              </p>
            </div>

            {/* 1.5 Third-Party Links */}
            <div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-4">
                1.5 Third-Party Links
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small files stored on your device that collect data about your browsing behavior. You can configure your browser to block cookies, but this may impact certain functionalities of our website.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-4">
                Contact Us
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                If you have any questions or concerns about our Privacy Policy, please contact us at{' '}
                <a
                  href="mailto:hello@Axonix.com"
                  className="font-medium text-[#111113] hover:underline"
                >
                  hello@Axonix.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* 4. FINAL CTA BANNER */}
        <FinalCTA onConsultationClick={() => handleOpenModal('Free Consultation')} />
      </main>

      {/* 5. FOOTER */}
      <Footer onNavigate={onNavigate} />

      {/* 6. DEMO MODAL */}
      <DemoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialInterest={selectedInterest}
      />
    </div>
  );
};
