import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock3, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { images } from '../assets/images';

interface ContactProps {
  onNavigate?: (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms') => void;
}

const faqs = [
  {
    question: 'Why is a strong brand identity or website important?',
    answer: 'A robust brand identity and website serve as the face of your business, shaping how it is perceived by potential customers. They not only convey professionalism but also establish trust and credibility.',
  },
  {
    question: 'What service do you offer?',
    answer: 'We design intelligent AI automation systems, workflow integrations, custom agents, and digital experiences that help teams work more efficiently.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. Our engagements are structured around your needs, and we will always discuss timelines and cancellation terms clearly before work begins.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes. Axonix works with teams globally and can collaborate across time zones using remote-first workflows.',
  },
  {
    question: 'How long before I see results?',
    answer: 'Most projects show measurable improvements during the first delivery phase. The exact timeline depends on the scope and the systems we are integrating.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We support businesses across e-commerce, professional services, operations, healthcare, and technology with adaptable automation solutions.',
  },
];

const inputClassName =
  'mt-1.5 h-8 w-full rounded-md border border-neutral-200/80 bg-[#fbfbfb] px-2.5 text-[10px] text-neutral-900 outline-none transition placeholder:text-[9px] placeholder:text-neutral-300 focus:border-neutral-500 focus:bg-white focus:ring-2 focus:ring-neutral-900/10';

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white font-sans text-[#111113] selection:bg-neutral-900 selection:text-white">
      <Navbar
        currentPage="contact"
        onNavigate={onNavigate}
        onBookDemo={() => setIsDemoModalOpen(true)}
      />

      <main>
        <section className="relative isolate overflow-hidden bg-[#fafafa] pb-10 pt-28 sm:pb-14 sm:pt-32">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-top opacity-40"
            style={{ backgroundImage: `url(${images.abstractWaves})` }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-neutral-800 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#111113] text-white">
                  <Sparkles className="h-3 w-3" />
                </span>
                Contact us
              </div>
              <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.055em] text-[#515155] sm:text-5xl lg:text-[52px]">
                Let&apos;s Build Something Intelligent, Together
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-[12px] leading-relaxed text-neutral-500 sm:text-[13px]">
                Have a project in mind? Curious about how AI can solve your business challenges?
                <br className="hidden sm:block" /> We&apos;re here to help. Reach out to our team—we&apos;d love to hear from you.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-white bg-[#f8f8f8] p-3 shadow-[0_8px_22px_rgba(0,0,0,0.09)] sm:p-3.5">
                {submitted ? (
                  <div className="flex min-h-[330px] flex-col items-center justify-center px-6 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-xl text-white">✓</div>
                    <h2 className="mt-4 text-xl font-medium">Thanks for reaching out!</h2>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-500">
                      Your message has been received. Our team will get back to you within 24 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-lg bg-neutral-900 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-neutral-700"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-1.5">
                    <label className="block text-[12px] font-medium leading-4">
                      Name
                      <input required value={formData.name} onChange={(event) => updateField('name', event.target.value)} className={inputClassName} placeholder="Enter your Name" />
                    </label>
                    <label className="block text-[12px] font-medium leading-4">
                      Email
                      <input required type="email" value={formData.email} onChange={(event) => updateField('email', event.target.value)} className={inputClassName} placeholder="Enter your email" />
                    </label>
                    <label className="block text-[12px] font-medium leading-4">
                      Phone
                      <input value={formData.phone} onChange={(event) => updateField('phone', event.target.value)} className={inputClassName} placeholder="(+123)" />
                    </label>
                    <label className="block text-[12px] font-medium leading-4">
                      Company Name
                      <input value={formData.company} onChange={(event) => updateField('company', event.target.value)} className={inputClassName} placeholder="Enter your company name" />
                    </label>
                    <label className="block text-[12px] font-medium leading-4">
                      Is there any other information you&apos;d like to share with us?
                      <textarea required rows={3} value={formData.message} onChange={(event) => updateField('message', event.target.value)} className={`${inputClassName} h-[68px] resize-none py-2`} placeholder="Message here" />
                    </label>
                    <button type="submit" className="mt-1 h-8 min-w-[106px] rounded-md bg-gradient-to-b from-[#303030] to-[#080808] px-8 text-[10px] font-medium text-white shadow-[0_5px_10px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5">
                      Submit
                    </button>
                  </form>
                )}
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-2.5 shadow-[0_8px_22px_rgba(0,0,0,0.08)]">
                <div className="relative h-full min-h-[350px] overflow-hidden rounded-xl bg-[#c9c9c9]">
                  <img
                    src={images.contactRobotHandAi}
                    alt="AI robot hand holding an artificial intelligence chip"
                    className="h-full w-full object-cover object-center grayscale"
                  />
                </div>
              </div>
            </div>

            <div className="mx-auto mt-7 grid max-w-[1000px] divide-y divide-neutral-200/90 rounded-[20px] border border-white bg-gradient-to-b from-white to-[#fafafa] px-5 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.1)] sm:grid-cols-2 sm:px-6 sm:py-5 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:px-2 lg:py-6">
              {[
                { label: 'Our Email', value: 'hello@Axonix.com', icon: Mail, href: 'mailto:hello@Axonix.com' },
                { label: 'Location', value: 'San Francisco, CA', icon: MapPin },
                { label: 'Our Phone', value: '+117 2345 6948', icon: Phone, href: 'tel:+11723456948' },
                { label: 'Working Hours', value: '9:00 AM – 6:00 PM', icon: Clock3 },
              ].map(({ label, value, icon: Icon, href }) => (
                <div key={label} className="flex items-center gap-3 px-3 py-3 first:pl-0 last:pr-0 sm:py-2 lg:min-h-[50px] lg:px-5 lg:py-0">
                  <Icon className="h-4 w-4 shrink-0 text-neutral-400 sm:hidden" />
                  <div>
                    <p className="text-[13px] leading-tight text-neutral-400 sm:text-[14px]">{label}</p>
                    {href ? (
                      <a href={href} className="mt-1 block text-[17px] font-semibold leading-tight tracking-[-0.025em] text-[#171719] hover:underline sm:text-[18px]">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[17px] font-semibold leading-tight tracking-[-0.025em] text-[#171719] sm:text-[18px]">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2 lg:pt-1">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                <Sparkles className="h-3 w-3" /> Frequently asked questions
              </div>
              <h2 className="mt-5 max-w-[390px] text-[38px] font-medium leading-[1.06] tracking-[-0.065em] text-[#66666a] sm:text-[42px]">
                Questions? We&apos;re
                <br />
                here to assist!
              </h2>
              <p className="mt-5 max-w-[380px] text-[12px] leading-[1.45] text-neutral-500">
                Position your brand at the forefront, leading trends, captivating audiences, and creating lasting market impressions.
              </p>
              <button onClick={() => setIsDemoModalOpen(true)} className="mt-8 min-w-[128px] rounded-lg bg-gradient-to-b from-[#303030] to-[#080808] px-7 py-3 text-[11px] font-medium text-white shadow-[0_5px_10px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5">
                Contact Us
              </button>
            </div>

            <div className="space-y-4 lg:col-span-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.question} className={`overflow-hidden rounded-xl border border-neutral-200 transition ${isOpen ? 'bg-gradient-to-b from-[#4a4a4a] to-[#252525] text-white shadow-[0_8px_16px_rgba(0,0,0,0.24)]' : 'bg-gradient-to-b from-white to-[#fafafa] shadow-[0_5px_12px_rgba(0,0,0,0.08)]'}`}>
                    <button onClick={() => setOpenFaq(isOpen ? -1 : index)} className="flex min-h-[50px] w-full items-center justify-between gap-4 px-4 py-4 text-left text-[13px] font-medium sm:min-h-[51px] sm:px-5">
                      {faq.question}
                      {isOpen ? <ChevronUp className="h-4 w-4 shrink-0 text-neutral-300" /> : <ChevronDown className="h-4 w-4 shrink-0 text-neutral-500" />}
                    </button>
                    {isOpen && <p className="border-t border-white/10 px-4 pb-4 pt-2 text-[11px] leading-relaxed text-neutral-300 sm:px-5">{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-neutral-200 bg-gradient-to-b from-[#fafafa] to-[#f0f0f0] px-7 py-7 shadow-[0_8px_20px_rgba(0,0,0,0.07)] sm:flex-row sm:items-center sm:px-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] shadow-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-white"><Sparkles className="h-2.5 w-2.5" /></span>
                AI automation for businesses
              </div>
              <h2 className="mt-4 text-2xl font-medium tracking-[-0.05em] text-[#4f4f54] sm:text-3xl">Let&apos;s Build the Future, Together</h2>
              <p className="mt-2 text-[11px] text-neutral-500">Whether you&apos;re exploring AI for the first time or scaling an existing system, we&apos;re ready to help.</p>
            </div>
            <button onClick={() => setIsDemoModalOpen(true)} className="shrink-0 rounded-lg bg-gradient-to-b from-[#303030] to-[#080808] px-5 py-3 text-[11px] font-medium text-white shadow-[0_5px_10px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5">
              Book a Free Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
};
