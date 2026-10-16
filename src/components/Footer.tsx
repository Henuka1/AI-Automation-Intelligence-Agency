import React from 'react';
import { images } from '../assets/images';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' | 'privacy', anchorId?: string) => {
    if (onNavigate) {
      onNavigate(page);
      if (anchorId) {
        setTimeout(() => {
          document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      if (page === 'features') {
        window.location.href = '/features';
      } else if (page === 'about') {
        window.location.href = '/about';
      } else if (page === 'pricing') {
        window.location.href = '/pricing';
      } else if (page === 'blog') {
        window.location.href = '/blog';
      } else if (page === 'contact') {
        window.location.href = '/contact';
      } else if (page === 'terms') {
        window.location.href = '/terms';
      } else if (page === 'case-study') {
        window.location.href = '/case-study';
      } else if (page === 'privacy') {
        window.location.href = '/privacy';
      } else if (anchorId) {
        document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      className="footer-surface relative isolate overflow-hidden pt-[18rem] pb-8 font-['Inter'] sm:pt-[28rem]"
      style={{ backgroundImage: `url(${images.cube})` }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-white/35" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="flex flex-col lg:col-span-4 lg:h-full">
            <span className="inline-block font-['Inter'] text-[34px] font-semibold leading-none tracking-[-0.055em] text-[#111113]">
              Axonix.
            </span>
            <p className="mt-6 max-w-xs text-[15px] font-normal leading-[1.35] tracking-[-0.01em] text-neutral-600">
              Your AI-Powered
              <br />
              Workflow, Reinvented.
            </p>
            <div className="mt-auto pt-10">
              <a
                href="mailto:hello@Axonix.com"
                className="text-[15px] font-medium tracking-[-0.01em] text-neutral-800 transition-colors hover:text-black"
              >
                hello@Axonix.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[13px] font-normal uppercase tracking-[-0.02em] text-neutral-500">
              QUICK LINK
            </h4>
            <ul className="space-y-3 text-[20px] font-medium leading-[1.1] tracking-[-0.035em] text-neutral-800">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('features')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pricing')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('blog')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('case-study')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Case Study
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-black transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[13px] font-normal uppercase tracking-[-0.02em] text-neutral-500">
              SOCIAL MEDIA
            </h4>
            <ul className="space-y-3 text-[20px] font-medium leading-[1.1] tracking-[-0.035em] text-neutral-800">
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
              <h4 className="mb-4 text-[13px] font-normal uppercase tracking-[-0.02em] text-neutral-500">
                OUR OFFICE
              </h4>
              <p className="max-w-xs text-[20px] font-medium leading-[1.1] tracking-[-0.035em] text-neutral-800">
                88 Market Street, San
                <br />
                Francisco, CA 94103
                <br />
                United States
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-[13px] font-normal uppercase tracking-[-0.02em] text-neutral-500">
                OUR PHONE
              </h4>
              <a
                href="tel:+11723456948"
                className="text-[20px] font-semibold tracking-[-0.035em] text-neutral-900 transition-colors hover:text-black"
              >
                +117 2345 6948
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-5 text-[13px] font-medium tracking-[-0.01em] text-neutral-600 sm:flex-row">
          <p>© 2025 Axonix. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-neutral-800 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-neutral-800 transition-colors cursor-pointer"
            >
              Terms & Condition
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
