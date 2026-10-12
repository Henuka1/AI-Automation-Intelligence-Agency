import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { AxonixLogo } from './BrandLogos';

interface NavbarProps {
  currentPage?: 'home' | 'about' | 'pricing' | 'blog' | 'contact';
  onNavigate?: (page: 'home' | 'about' | 'pricing' | 'blog' | 'contact') => void;
  onBookDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigate,
  onBookDemo,
}) => {
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

  const handleNavClick = (page: 'home' | 'about' | 'pricing' | 'blog' | 'contact', anchorId?: string) => {
    if (onNavigate) {
      onNavigate(page);
      if (anchorId) {
        setTimeout(() => {
          const el = document.getElementById(anchorId);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      if (page === 'about') {
        window.location.href = '/about';
      } else if (page === 'pricing') {
        window.location.href = '/pricing';
      } else if (page === 'blog') {
        window.location.href = '/blog';
      } else if (page === 'contact') {
        window.location.href = '/contact';
      } else if (anchorId) {
        const el = document.getElementById(anchorId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
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
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center group cursor-pointer text-left"
        >
          <AxonixLogo />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] text-neutral-600 font-medium">
          {/* Home with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('home')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center gap-1 transition-colors py-2 cursor-pointer ${
                currentPage === 'home'
                  ? 'text-neutral-950 font-semibold'
                  : 'hover:text-neutral-950 text-neutral-600'
              }`}
            >
              <span>Home</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            {activeDropdown === 'home' && (
              <div className="absolute top-full left-0 w-44 bg-white rounded-xl shadow-lg border border-neutral-100 py-2 animate-in fade-in zoom-in-95 duration-150">
                <button
                  onClick={() => handleNavClick('home', 'about')}
                  className="w-full text-left px-4 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 cursor-pointer"
                >
                  Overview
                </button>
                <button
                  onClick={() => handleNavClick('home', 'features')}
                  className="w-full text-left px-4 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 cursor-pointer"
                >
                  Core Features
                </button>
                <button
                  onClick={() => handleNavClick('home', 'stats')}
                  className="w-full text-left px-4 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 cursor-pointer"
                >
                  Metrics & Impact
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors cursor-pointer ${
              currentPage === 'about'
                ? 'text-neutral-950 font-semibold'
                : 'hover:text-neutral-950 text-neutral-600'
            }`}
          >
            About us
          </button>
          <button
            onClick={() => handleNavClick('pricing')}
            className={`transition-colors cursor-pointer ${
              currentPage === 'pricing'
                ? 'text-neutral-950 font-semibold'
                : 'hover:text-neutral-950 text-neutral-600'
            }`}
          >
            Pricing
          </button>
          <button
            onClick={() => handleNavClick('blog')}
            className={`transition-colors cursor-pointer ${
              currentPage === 'blog'
                ? 'text-neutral-950 font-semibold'
                : 'hover:text-neutral-950 text-neutral-600'
            }`}
          >
            Blog
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-colors cursor-pointer ${
              currentPage === 'contact'
                ? 'text-neutral-950 font-semibold'
                : 'hover:text-neutral-950 text-neutral-600'
            }`}
          >
            Contact
          </button>

          {/* Pages with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('pages')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-neutral-950 transition-colors py-2 cursor-pointer">
              <span>Pages</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            {activeDropdown === 'pages' && (
              <div className="absolute top-full right-0 w-44 bg-white rounded-xl shadow-lg border border-neutral-100 py-2 animate-in fade-in zoom-in-95 duration-150">
                <button
                  onClick={() => handleNavClick('home', 'case-study')}
                  className="w-full text-left px-4 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 cursor-pointer"
                >
                  Case Studies
                </button>
                <button
                  onClick={() => handleNavClick('home', 'testimonials')}
                  className="w-full text-left px-4 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 cursor-pointer"
                >
                  Client Reviews
                </button>
                <button
                  onClick={() => handleNavClick('home', 'services')}
                  className="w-full text-left px-4 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 cursor-pointer"
                >
                  Capabilities
                </button>
                <button
                  onClick={() => handleNavClick('home', 'faq')}
                  className="w-full text-left px-4 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 cursor-pointer"
                >
                  FAQ
                </button>
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
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'home' ? 'text-black font-semibold' : 'text-neutral-800 hover:text-black'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'about' ? 'text-black font-semibold' : 'text-neutral-800 hover:text-black'
            }`}
          >
            About us
          </button>
          <button
            onClick={() => handleNavClick('home', 'features')}
            className="block w-full text-left py-2 text-sm font-medium text-neutral-800 hover:text-black"
          >
            Features
          </button>
          <button
            onClick={() => handleNavClick('pricing')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'pricing' ? 'text-black font-semibold' : 'text-neutral-800 hover:text-black'
            }`}
          >
            Pricing
          </button>
          <button
            onClick={() => handleNavClick('blog')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'blog' ? 'text-black font-semibold' : 'text-neutral-800 hover:text-black'
            }`}
          >
            Blog
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'contact' ? 'text-black font-semibold' : 'text-neutral-800 hover:text-black'
            }`}
          >
            Contact
          </button>
          <div className="pt-2">
            <button
              onClick={handleBookDemo}
              className="w-full bg-[#111113] text-white rounded-full py-2.5 text-sm font-medium cursor-pointer"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
