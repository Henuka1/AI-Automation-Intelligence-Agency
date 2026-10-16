import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { images } from '../assets/images';

interface ContactProps {
  onNavigate?: (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' | 'privacy') => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const faqs = [
    {
      question: 'How quickly can we expect a response after reaching out?',
      answer:
        'We typically respond within 24 business hours. If you submit a project inquiry, one of our technical partners will review your requirements and reach out with tailored next steps and available discovery call slots.',
    },
    {
      question: 'What information should I have ready before our consultation?',
      answer:
        'A high-level understanding of your current bottlenecks, target workflows, tech stack (ERP, CRM, custom APIs), and approximate timeline or budget is very helpful. However, if you are just exploring what is possible with AI automation, our team will guide you through the assessment.',
    },
    {
      question: 'Do you offer non-disclosure agreements (NDAs) prior to discussing IP?',
      answer:
        'Yes, absolutely. We respect enterprise confidentiality and intellectual property. We are happy to execute standard mutual NDAs before reviewing proprietary data or technical architectures.',
    },
    {
      question: 'Can Axonix integrate with legacy databases and on-premise infrastructure?',
      answer:
        'Yes. We build custom API connectors, hybrid cloud adapters, and on-premise containerized microservices compliant with strict SOC2 and ISO27001 data residency protocols.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111111] antialiased selection:bg-neutral-900 selection:text-white font-sans">
      {/* Top Navbar */}
      <Navbar
        currentPage="contact"
        onNavigate={onNavigate}
        onBookDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Main Hero & Form Section */}
      <main className="pt-28 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-300 bg-white/80 backdrop-blur-sm text-xs font-medium text-neutral-800 shadow-[0_1px_2px_rgba(0,0,0,0.04)] tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-pulse"></span>
            CONTACT US
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-950 leading-[1.12]">
            Get In Touch With Our Team
          </h1>
          <p className="mt-5 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about integrating AI into your enterprise or ready to kickstart your next automation initiative? We're here to assist.
          </p>
        </div>

        {/* Split Grid: Left Form Card & Right Info/Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-neutral-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h2 className="text-2xl sm:text-3xl font-medium text-neutral-950 tracking-tight mb-2">
              Send us a message
            </h2>
            <p className="text-sm text-neutral-500 mb-8">
              Fill in your details below and our team will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 text-center my-6 animate-fadeIn">
                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Thank you for reaching out!</h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6">
                  Your message has been safely received. An Axonix solutions architect will review your project and contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', service: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-medium bg-neutral-950 text-white hover:bg-neutral-800 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      Full Name <span className="text-neutral-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-50/80 rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950/20 focus:border-neutral-950 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      Work Email <span className="text-neutral-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-50/80 rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950/20 focus:border-neutral-950 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-50/80 rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950/20 focus:border-neutral-950 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      Area of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-50/80 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-950/20 focus:border-neutral-950 transition-all cursor-pointer"
                    >
                      <option value="">Select a topic</option>
                      <option value="enterprise-ai">Enterprise AI Automation</option>
                      <option value="custom-llm">Custom LLM Fine-tuning & RAG</option>
                      <option value="agent-architecture">Autonomous Agent Architecture</option>
                      <option value="data-integration">Legacy System & API Integration</option>
                      <option value="consultation">General Strategy Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                    How can we help? <span className="text-neutral-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project goals, challenges, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-neutral-50/80 rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-950/20 focus:border-neutral-950 transition-all resize-y"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 pt-1 text-xs text-neutral-500">
                  <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>We treat your enterprise data with absolute privacy under standard NDA.</span>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-8 rounded-full bg-neutral-950 text-white font-medium text-sm hover:bg-neutral-800 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Visual Showcase + Direct Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Robot Hand / AI Visual Feature Box */}
            <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-100">
                <img
                  src={images.contactRobotHandAi || images.heroHands}
                  alt="Axonix AI Technology"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold tracking-wider uppercase mb-1">
                    Direct Channel
                  </div>
                  <h4 className="text-lg font-medium text-white leading-snug">
                    Autonomous Intelligence for Scalable Teams
                  </h4>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-900 shrink-0 border border-neutral-200">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Email Us</p>
                    <a
                      href="mailto:contact@axonix.ai"
                      className="text-sm font-medium text-neutral-900 hover:text-black hover:underline"
                    >
                      contact@axonix.ai
                    </a>
                    <p className="text-xs text-neutral-500 mt-0.5">Direct response within 24 hours</p>
                  </div>
                </div>

                {/* Office Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-900 shrink-0 border border-neutral-200">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Headquarters</p>
                    <p className="text-sm font-medium text-neutral-900">
                      548 Market St, Suite 48201
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">San Francisco, CA 94104</p>
                  </div>
                </div>

                {/* Direct Demo Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-900 shrink-0 border border-neutral-200">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Fast Track</p>
                    <button
                      onClick={() => setIsDemoModalOpen(true)}
                      className="text-sm font-medium text-neutral-950 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      Book 30-min discovery call &rarr;
                    </button>
                    <p className="text-xs text-neutral-500 mt-0.5">Instant calendar scheduling</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Status / SLA Card */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Service Level</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  99.9% Uptime SLA
                </span>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Dedicated Enterprise Support</h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                All custom enterprise installations include 24/7 incident response, private Slack/Teams channels, and quarterly executive reviews.
              </p>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full py-3 rounded-full bg-white text-neutral-950 font-medium text-xs hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Schedule Architecture Review
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 bg-white text-xs font-medium text-neutral-800 mb-3">
              COMMON QUESTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-neutral-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Everything you need to know about starting an engagement with Axonix.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-neutral-200/80 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/50 transition-colors"
                  >
                    <span className="text-base font-medium text-neutral-950">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-neutral-900 text-white' : ''
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Pre-Footer Final CTA with floating cube visual */}
      <FinalCTA onConsultationClick={() => setIsDemoModalOpen(true)} />

      {/* Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Book Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
};
