import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { AxonixLogo } from './BrandLogos';

interface NavbarProps {
  onBookDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switch to transparent blur as soon as user scrolls down
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookDemo = () => {
    if (onBookDemo) {
      onBookDemo();
    } else {
      const el = document.getElementById('pricing');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'navbar-transparent-blur'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand wordmark */}
        <a href="#" className="flex items-center group">
          <AxonixLogo />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] text-neutral-600 font-medium">
          {/* Home with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('home')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-neutral-950 transition-colors py-2">
              <span>Home</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            {activeDropdown === 'home' && (
              <div className="absolute top-full left-0 w-44 bg-white rounded-xl shadow-lg border border-neutral-100 py-2 animate-in fade-in zoom-in-95 duration-150">
                <a href="#about" className="block px-4 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950">
                  Overview
                </a>
                <a href="#features" className="block px-4 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950">
                  Core Features
                </a>
                <a href="#stats" className="block px-4 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950">
                  Metrics & Impact
                </a>
              </div>
            )}
          </div>

          <a href="#about" className="hover:text-neutral-950 transition-colors">
            About us
          </a>
          <a href="#pricing" className="hover:text-neutral-950 transition-colors">
            Pricing
          </a>
          <a href="#blog" className="hover:text-neutral-950 transition-colors">
            Blog
          </a>
          <a href="#faq" className="hover:text-neutral-950 transition-colors">
            Contact
          </a>

          {/* Pages with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('pages')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-neutral-950 transition-colors py-2">
              <span>Pages</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            {activeDropdown === 'pages' && (
              <div className="absolute top-full right-0 w-44 bg-white rounded-xl shadow-lg border border-neutral-100 py-2 animate-in fade-in zoom-in-95 duration-150">
                <a href="#case-study" className="block px-4 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950">
                  Case Studies
                </a>
                <a href="#testimonials" className="block px-4 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950">
                  Client Reviews
                </a>
                <a href="#services" className="block px-4 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950">
                  Capabilities
                </a>
                <a href="#faq" className="block px-4 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950">
                  FAQ
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={handleBookDemo}
            className="bg-[#111113] hover:bg-neutral-800 text-white rounded-full px-5 py-2.5 text-[13.5px] font-medium transition-all shadow-xs hover:shadow active:scale-98 whitespace-nowrap"
          >
            Book a Demo
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={handleBookDemo}
            className="bg-[#111113] text-white rounded-full px-3.5 py-1.5 text-xs font-medium"
          >
            Demo
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-neutral-950 focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-6 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-800 hover:text-black"
          >
            About us
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-800 hover:text-black"
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-800 hover:text-black"
          >
            Pricing
          </a>
          <a
            href="#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-800 hover:text-black"
          >
            Blog & Insights
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-800 hover:text-black"
          >
            FAQ & Contact
          </a>
          <div className="pt-2">
            <button
              onClick={handleBookDemo}
              className="w-full bg-[#111113] text-white rounded-full py-2.5 text-sm font-medium"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
