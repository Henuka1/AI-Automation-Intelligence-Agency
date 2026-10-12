import React from 'react';
import { images } from '../assets/images';
import { AxonixLogo } from './BrandLogos';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms', anchorId?: string) => {
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
      } else if (anchorId) {
        document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
                  onClick={() => handleNav('home', 'case-study')}
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
