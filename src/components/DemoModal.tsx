import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { AxonixLogo } from './BrandLogos';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, initialInterest }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: 'E-commerce',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-neutral-900 text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-[#111113]">
              Demo Request Received
            </h3>
            <p className="text-xs sm:text-[13px] text-neutral-500 max-w-xs mx-auto leading-relaxed">
              Thank you, {formData.name || 'there'}. An Axonix solutions architect will reach out to {formData.email} within 24 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-[#111113] text-white rounded-full px-6 py-2.5 text-xs font-medium hover:bg-neutral-800 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <AxonixLogo textClassName="text-lg font-bold text-neutral-950" />
              <h3 className="text-xl sm:text-2xl font-medium text-[#111113] tracking-tight mt-3">
                Book an AI Architecture Demo
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                {initialInterest
                  ? `Inquiry for ${initialInterest}. Explore tailored automation models for your company.`
                  : 'Discover how intelligent workflows can transform your business.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-250 text-xs focus:outline-hidden focus:border-neutral-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-250 text-xs focus:outline-hidden focus:border-neutral-900 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-neutral-250 text-xs focus:outline-hidden focus:border-neutral-900 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Primary Domain
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-neutral-250 text-xs bg-white focus:outline-hidden focus:border-neutral-900 transition-colors"
                  >
                    <option value="E-commerce">E-commerce</option>
                    <option value="Fintech">Fintech & Banking</option>
                    <option value="Healthcare">Healthcare & Biotech</option>
                    <option value="SaaS">B2B SaaS</option>
                    <option value="Logistics">Supply Chain</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Specific Objectives (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Predictive forecasting, chatbot ticket deflection..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-250 text-xs focus:outline-hidden focus:border-neutral-900 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#111113] hover:bg-neutral-800 text-white font-medium text-xs rounded-full transition-all shadow-xs"
                >
                  Schedule Demo
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
