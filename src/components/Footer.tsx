import React from 'react';
import { images } from '../assets/images';
import { AxonixLogo } from './BrandLogos';

export const Footer: React.FC = () => {
  return (
    <footer
      className="footer-surface relative isolate overflow-hidden pt-[18rem] sm:pt-[28rem] pb-8"
      style={{ backgroundImage: `url(${images.cube})` }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-white/35" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <AxonixLogo textClassName="text-[27px] font-bold tracking-tight text-[#111113]" />
            <p className="text-base text-neutral-600 leading-[1.2] max-w-xs font-normal">
              Your AI-Powered
              <br />
              Workflow, Reinvented.
            </p>
            <div className="pt-4">
              <a
                href="mailto:hello@Axonix.com"
                className="text-base font-medium text-neutral-800 hover:text-black transition-colors"
              >
                hello@Axonix.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-normal uppercase tracking-wide text-neutral-500">
              QUICK LINK
            </h4>
            <ul className="space-y-3 text-lg leading-[1.05] font-medium text-neutral-800">
              <li>
                <a href="#about" className="hover:text-black transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-black transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-black transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#case-study" className="hover:text-black transition-colors">
                  Case Study
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-black transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-normal uppercase tracking-wide text-neutral-500">
              SOCIAL MEDIA
            </h4>
            <ul className="space-y-3 text-lg leading-[1.05] font-medium text-neutral-800">
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Office & Phone */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-sm font-normal uppercase tracking-wide text-neutral-500 mb-4">
                OUR OFFICE
              </h4>
              <p className="text-lg font-medium text-neutral-800 leading-[1.05] max-w-xs">
                88 Market Street, San
                <br />
                Francisco, CA 94103
                <br />
                United States
              </p>
            </div>

            <div>
              <h4 className="text-sm font-normal uppercase tracking-wide text-neutral-500 mb-4">
                OUR PHONE
              </h4>
              <a
                href="tel:+11723456948"
                className="text-lg font-semibold text-neutral-900 hover:text-black transition-colors"
              >
                +117 2345 6948
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-10 pt-5 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 font-medium">
          <p>© 2025 Axonix. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-neutral-800 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-neutral-800 transition-colors">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
