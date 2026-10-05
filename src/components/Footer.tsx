import React from 'react';
import { images } from '../assets/images';
import { AxonixLogo } from './BrandLogos';

export const Footer: React.FC = () => {
  return (
    <footer className="relative pt-16 sm:pt-24 pb-12 overflow-hidden bg-white border-t border-neutral-100">
      {/* Background 3D geometric cube matrix centerpiece */}
      <div className="flex justify-center -mb-10 sm:-mb-14 opacity-90 pointer-events-none">
        <div className="w-56 sm:w-72 max-w-full aspect-square relative">
          <img
            src={images.cubeMatrix}
            alt="Axonix 3D geometric structure"
            className="w-full h-full object-contain filter grayscale contrast-105"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-8 border-t border-neutral-100">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-3">
            <AxonixLogo textClassName="text-xl font-bold tracking-tight text-[#111113]" />
            <p className="text-xs sm:text-[13px] text-neutral-500 leading-relaxed max-w-xs font-normal">
              Your AI-Powered
              <br />
              Workflow, Reinvented.
            </p>
            <div className="pt-4">
              <a
                href="mailto:hello@Axonix.com"
                className="text-xs sm:text-[13px] font-medium text-neutral-800 hover:text-black transition-colors"
              >
                hello@Axonix.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
              QUICK LINK
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] font-medium text-neutral-800">
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
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
              SOCIAL MEDIA
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] font-medium text-neutral-800">
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
          <div className="lg:col-span-4 space-y-5">
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500 mb-2">
                OUR OFFICE
              </h4>
              <p className="text-xs sm:text-[13px] font-medium text-neutral-800 leading-relaxed max-w-xs">
                88 Market Street, San
                <br />
                Francisco, CA 94103
                <br />
                United States
              </p>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500 mb-1.5">
                OUR PHONE
              </h4>
              <a
                href="tel:+11723456948"
                className="text-xs sm:text-[13px] font-semibold text-neutral-900 hover:text-black transition-colors"
              >
                +117 2345 6948
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
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
