import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import {
  FileText,
  Shield,
  Cookie,
  Award,
  AlertTriangle,
  HelpCircle,
  CheckCircle2,
  Lock,
  Scale,
  Calendar,
  ExternalLink,
} from 'lucide-react';

interface TermsProps {
  onNavigate?: (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms') => void;
}

export const Terms: React.FC<TermsProps> = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState<string>('intro');

  const handleOpenModal = (interest?: string) => {
    setSelectedInterest(interest);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // Account for fixed floating navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'cookies', 'license', 'obligations', 'liability', 'disclaimer', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tableOfContents = [
    { id: 'intro', label: '1. Introduction' },
    { id: 'cookies', label: '2. Cookies & Tracking' },
    { id: 'license', label: '3. Intellectual Property' },
    { id: 'obligations', label: '4. User Obligations' },
    { id: 'liability', label: '5. Content Liability' },
    { id: 'disclaimer', label: '6. Disclaimer & Limits' },
    { id: 'contact', label: '7. Inquiries & Contact' },
  ];

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
        <section className="pt-36 sm:pt-44 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#fbfbfb] via-[#f8f8f9] to-white border-b border-neutral-100/80">
          <div className="max-w-4xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-7 select-none">
              <div className="w-5 h-5 rounded-full bg-[#111113] flex items-center justify-center text-white">
                <FileText className="w-3 h-3" />
              </div>
              <span className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-neutral-800">
                TERMS OF CONDITIONS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#111113] leading-[1.12]">
              Terms of Conditions
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-sm sm:text-[15.5px] text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before utilizing our enterprise AI platform, automated workflows, and digital services.
            </p>

            {/* Version & Date tag */}
            <div className="mt-6 inline-flex items-center gap-4 text-xs font-medium text-neutral-500 bg-neutral-100/70 border border-neutral-200/60 rounded-full px-4 py-1.5">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-neutral-600" />
                Effective: January 15, 2025
              </span>
              <span className="text-neutral-300">•</span>
              <span>Version 2.4</span>
            </div>
          </div>
        </section>

        {/* 3. TABLE OF CONTENTS QUICK JUMP PILLS */}
        <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/70 py-3 shadow-xs">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mr-2 shrink-0">
                Jump to:
              </span>
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs sm:text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                    activeSection === item.id
                      ? 'bg-[#111113] text-white shadow-xs'
                      : 'bg-neutral-100/80 text-neutral-600 hover:bg-neutral-200/80 hover:text-neutral-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 4. MAIN LEGAL CONTENT */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-[15px] sm:text-[15.5px] text-neutral-600 leading-[1.75] space-y-16">
            
            {/* Section 1: Introduction */}
            <div id="intro" className="scroll-mt-36">
              <div className="flex items-center gap-2.5 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                <Shield className="w-3.5 h-3.5 text-neutral-900" />
                <span>Section 01</span>
              </div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-4">
                Introduction
              </h2>
              <p className="mb-4">
                Welcome to Axonix. These Terms of Conditions govern your access to and use of the Axonix website, artificial intelligence integrations, software development tools, client management portals, and related products and services (collectively, the &ldquo;Services&rdquo;).
              </p>
              <p className="mb-4">
                By accessing or using any part of the Services, you confirm your agreement to be legally bound by these terms. If you are entering into this agreement on behalf of a corporation, enterprise, or other legal entity, you represent that you possess the requisite authority to bind such entity to these provisions.
              </p>
              <div className="bg-neutral-50 rounded-2xl border border-neutral-200/80 p-5 mt-5 text-[14px] text-neutral-700 flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 block mb-0.5">Agreement to Terms</span>
                  By continuing to navigate this site or utilizing Axonix automated systems, you acknowledge having read, understood, and consented to these Terms of Conditions and our Privacy Policy.
                </div>
              </div>
            </div>

            {/* Section 2: Cookies */}
            <div id="cookies" className="scroll-mt-36">
              <div className="flex items-center gap-2.5 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                <Cookie className="w-3.5 h-3.5 text-neutral-900" />
                <span>Section 02</span>
              </div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-4">
                Cookies &amp; Tracking Technologies
              </h2>
              <p className="mb-4">
                We employ the use of cookies. By accessing the Axonix website, you agree to the use of cookies in accordance with our Privacy Policy.
              </p>
              <p className="mb-4">
                Most modern interactive websites utilize cookies to retrieve user session details and personalize user experiences across sessions. Cookies are deployed across our platform to ensure critical capabilities, including secure session authentications, stateful workspace persistence, and telemetry diagnostics.
              </p>
              <p>
                Certain third-party technology providers, analytics partners, and authorized advertising affiliates may also deploy session-based cookies when interacting with our embedded models and interfaces.
              </p>
            </div>

            {/* Section 3: License */}
            <div id="license" className="scroll-mt-36">
              <div className="flex items-center gap-2.5 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                <Award className="w-3.5 h-3.5 text-neutral-900" />
                <span>Section 03</span>
              </div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-4">
                License &amp; Intellectual Property
              </h2>
              <p className="mb-4">
                Unless otherwise stated in a dedicated Master Services Agreement (MSA), Axonix and/or its licensors own all intellectual property rights for the platform, interface architectures, software packages, brand assets, and proprietary AI workflows published across Axonix. All intellectual property rights are expressly reserved.
              </p>
              <p className="mb-4">
                You are granted a revocable, non-exclusive, non-transferable license to access and view the materials on Axonix for your business evaluation and authorized operational usage, subject to the strict restrictions enumerated below.
              </p>

              {/* Restrictions List */}
              <div className="bg-neutral-50/80 rounded-2xl border border-neutral-200/90 p-6 my-6 space-y-3">
                <p className="font-semibold text-neutral-900 text-[14.5px]">
                  You must not:
                </p>
                <ul className="space-y-2.5 text-neutral-700 text-[14px]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Republish material, codebases, or proprietary model wrappers from Axonix.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Sell, rent, sub-license, or commercialize proprietary Axonix interface assets without prior written consent.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Reproduce, duplicate, mirror, or reverse engineer any foundational algorithms or components originating from Axonix.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Redistribute content, documentation, or benchmarking data from Axonix unless explicitly intended for distribution.</span>
                  </li>
                </ul>
              </div>

              <p>
                This Agreement shall commence on the date on which you first access or interact with any Axonix asset.
              </p>
            </div>

            {/* Section 4: User Obligations */}
            <div id="obligations" className="scroll-mt-36">
              <div className="flex items-center gap-2.5 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                <Lock className="w-3.5 h-3.5 text-neutral-900" />
                <span>Section 04</span>
              </div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-4">
                User Obligations &amp; Acceptable Use
              </h2>
              <p className="mb-4">
                When using Axonix automation tools and computing resources, you warrant that you will not submit, inject, or process malicious scripts, illegal data, or content that infringes upon third-party copyrights or personal privacy rights.
              </p>
              <p className="mb-4">
                You agree not to bypass security mechanisms, conduct unauthorized vulnerability scans, or overload our hosting cluster via distributed denial of service or automated extraction scripts (screen-scraping or bot spiders).
              </p>
              <p>
                We reserve the unilateral right to suspend or terminate service credentials for any enterprise account found in violation of these security guidelines.
              </p>
            </div>

            {/* Section 5: Content Liability */}
            <div id="liability" className="scroll-mt-36">
              <div className="flex items-center gap-2.5 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                <Scale className="w-3.5 h-3.5 text-neutral-900" />
                <span>Section 05</span>
              </div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-4">
                Content Liability &amp; Hyperlinks
              </h2>
              <p className="mb-4">
                We shall not be held liable or responsible for any content or external materials that appear on client websites or connected third-party endpoints. You agree to protect, indemnify, and defend Axonix against all claims, losses, or legal liabilities arising from content hosted on your platforms.
              </p>
              <p>
                No link(s) should appear on any website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third-party intellectual property or human rights.
              </p>
            </div>

            {/* Section 6: Disclaimer */}
            <div id="disclaimer" className="scroll-mt-36">
              <div className="flex items-center gap-2.5 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                <AlertTriangle className="w-3.5 h-3.5 text-neutral-900" />
                <span>Section 06</span>
              </div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-4">
                Disclaimer &amp; Limitation of Liability
              </h2>
              <p className="mb-4">
                To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
              </p>

              <div className="space-y-2.5 my-4 pl-4 border-l-2 border-neutral-300 text-neutral-700">
                <p>• Limit or exclude our or your liability for death or personal injury resulting from negligence;</p>
                <p>• Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</p>
                <p>• Limit any of our or your liabilities in any way that is not permitted under applicable statutory law; or</p>
                <p>• Exclude any of our or your liabilities that may not be excluded under applicable law.</p>
              </div>

              <p className="mb-4">
                The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
              </p>
              <p>
                As long as the website, trial environments, and introductory evaluation information are provided free of charge, Axonix will not be liable for any loss or damage of any nature.
              </p>
            </div>

            {/* Section 7: Inquiries */}
            <div id="contact" className="scroll-mt-36">
              <div className="flex items-center gap-2.5 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-neutral-900" />
                <span>Section 07</span>
              </div>
              <h2 className="text-2xl sm:text-[28px] font-semibold text-[#111113] tracking-tight mb-4">
                Inquiries &amp; Legal Notices
              </h2>
              <p className="mb-4">
                If you have questions, regulatory compliance notices, or enterprise master contract requests concerning these Terms of Conditions, please contact our legal counsel:
              </p>
              <div className="bg-neutral-50 rounded-2xl border border-neutral-200/90 p-6 space-y-2">
                <div className="font-semibold text-neutral-900">Axonix Legal &amp; Compliance Team</div>
                <div className="text-sm text-neutral-600">88 Market Street, San Francisco, CA 94103, United States</div>
                <div className="text-sm text-neutral-600">
                  Direct Inquiries:{' '}
                  <a href="mailto:legal@axonix.ai" className="text-neutral-900 font-medium underline underline-offset-2">
                    legal@axonix.ai
                  </a>
                </div>
                <div className="text-sm text-neutral-600">
                  Phone:{' '}
                  <a href="tel:+11723456948" className="text-neutral-900 font-medium">
                    +117 2345 6948
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 5. PRE-FOOTER FINAL CTA */}
        <FinalCTA onConsultationClick={() => handleOpenModal('Free AI Consultation')} />
      </main>

      {/* 6. FOOTER */}
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
