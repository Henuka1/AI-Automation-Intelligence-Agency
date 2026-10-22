import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { ChipPillIcon } from '../components/BrandLogos';
import blogBackground from '../assets/images/blog_bg.png';

interface PrivacyProps {
  onNavigate?: (
    page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' |  'privacy' | '404'
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
        <section className="relative isolate overflow-hidden bg-white px-4 pb-12 pt-36 text-center sm:px-6 sm:pb-16 sm:pt-44 lg:px-8">
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
            {/* Eyebrow Pill Badge: Lock/Shield Icon + PRIVACY POLICY */}
            <div className="mb-7 flex w-fit shrink-0 items-center gap-3 rounded-full border border-white bg-gradient-to-b from-white to-[#f1f1f1] px-3 py-2 shadow-[inset_0_1px_0_#fff,0_2px_5px_rgba(0,0,0,0.12),0_8px_18px_rgba(0,0,0,0.08)] select-none">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_28%,#454545_0%,#171717_48%,#050505_100%)] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.18),0_2px_5px_rgba(0,0,0,0.24)]">
                <ChipPillIcon className="h-5 w-5" />
              </div>
              <span className="pr-2 text-[16px] font-medium tracking-[-0.04em] text-[#171719]">
                PRIVACY POLICY
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-gradient-headline block text-[42px] font-medium leading-[1.05] tracking-[-0.065em] sm:text-[50px] lg:text-[56px]">
              Privacy Policy
            </h1>
          </div>
        </section>

        {/* 3. LEGAL CONTENT (Exact text and layout from reference screenshot) */}
        <section className="relative isolate overflow-hidden bg-white px-6 py-12 sm:px-8 sm:py-20">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-35" aria-hidden="true">
            <img
              src={blogBackground}
              alt=""
              className="absolute inset-y-0 left-0 h-full w-full object-cover object-left"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl space-y-12 sm:space-y-14">
            {/* Introduction */}
            <div>
              <h2 className="mb-4 text-[25px] font-medium leading-[1.15] tracking-[-0.045em] text-[#111113] sm:text-[27px]">
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
              <h2 className="mb-4 text-[25px] font-medium leading-[1.15] tracking-[-0.045em] text-[#111113] sm:text-[27px]">
                1.1 Personal Information
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                Data analytics is revolutionizing the way marketers understand consumer behavior in today&apos;s digital age. By harnessing the power of data collected from diverse sources such as social media, website interactions, and purchasing patterns, marketers can unlock valuable insights into their target audience.
              </p>
            </div>

            {/* 1.2 Non-Personal Information */}
            <div>
              <h2 className="mb-4 text-[25px] font-medium leading-[1.15] tracking-[-0.045em] text-[#111113] sm:text-[27px]">
                1.2 Non-Personal Information
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                We may also collect non-personal information, such as your IP address, browser type, the pages you visit, and other statistical data. This information helps us analyze trends, enhance user experience, and administer our website.
              </p>
            </div>

            {/* 1.3 Content Liability */}
            <div>
              <h2 className="mb-4 text-[25px] font-medium leading-[1.15] tracking-[-0.045em] text-[#111113] sm:text-[27px]">
                1.3 Content Liability
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                We use the information we collect for various purposes, including:
              </p>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal mt-4">
                Providing and maintaining our services.
              </p>

              <ul className="my-5 list-disc space-y-1.5 pl-5 text-[14.5px] font-normal leading-[1.7] text-neutral-600 sm:text-[15.5px]">
                <li>Personalizing your experience on our website.</li>
                <li>Sending you relevant communications, such as newsletters and updates.</li>
                <li>Improving our website and services.</li>
                <li>Responding to your inquiries and providing customer support.</li>
                <li>Complying with legal obligations.</li>
              </ul>
            </div>

            {/* 1.4 Cookies and Tracking Technologies */}
            <div>
              <h2 className="mb-4 text-[25px] font-medium leading-[1.15] tracking-[-0.045em] text-[#111113] sm:text-[27px]">
                1.4 Cookies and Tracking Technologies
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small files stored on your device that collect data about your browsing behavior. You can configure your browser to block cookies, but this may impact certain functionalities of our website.
              </p>
            </div>

            {/* 1.5 Third-Party Links */}
            <div>
              <h2 className="mb-4 text-[19px] font-medium leading-[1.25] tracking-[-0.04em] text-[#111113] sm:text-[21px]">
                1.5 Third-Party Links
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-[1.7] font-normal">
                Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small files stored on your device that collect data about your browsing behavior. You can configure your browser to block cookies, but this may impact certain functionalities of our website.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="mb-4 text-[25px] font-medium leading-[1.15] tracking-[-0.045em] text-[#111113] sm:text-[27px]">
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
