import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { AxonixLogo } from './BrandLogos';

interface NavbarProps {
  currentPage?: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' | 'privacy' | '404';
  onNavigate?: (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' | 'privacy' | '404') => void;
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
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target?.closest('.navbar-dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  const toggleDropdown = (dropdown: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const handleBookDemo = () => {
    if (onBookDemo) {
      onBookDemo();
    } else {
      const el = document.getElementById('pricing');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms' | 'case-study' | 'privacy' | '404', anchorId?: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (onNavigate) {
      onNavigate(page);
      if (anchorId) {
        setTimeout(() => {
          const el = document.getElementById(anchorId);
          el?.scrollIntoView({ behavior: 'smooth' });
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
      } else if (page === '404') {
        window.location.href = '/404';
      } else if (anchorId) {
        const el = document.getElementById(anchorId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
            className="relative navbar-dropdown-container"
            onMouseEnter={() => handleMouseEnter('home')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown('home');
              }}
              className={`flex items-center gap-1 transition-colors py-2 cursor-pointer ${
                currentPage === 'home'
                  ? 'text-neutral-950 font-semibold'
                  : 'hover:text-neutral-950 text-neutral-600'
              }`}
            >
              <span>Home</span>
              <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${activeDropdown === 'home' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'home' && (
              <div
                className="absolute top-full left-0 pt-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                onMouseEnter={() => handleMouseEnter('home')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-44 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-neutral-100 py-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavClick('home', 'about');
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 cursor-pointer transition-colors block"
                  >
                    Overview
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavClick('home', 'features');
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 cursor-pointer transition-colors block"
                  >
                    Core Features
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavClick('home', 'stats');
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 cursor-pointer transition-colors block"
                  >
                    Metrics & Impact
                  </button>
                </div>
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
            className="relative navbar-dropdown-container"
            onMouseEnter={() => handleMouseEnter('pages')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown('pages');
              }}
              className={`flex items-center gap-1 transition-colors py-2 cursor-pointer ${
                currentPage === 'features' || currentPage === 'terms' || currentPage === 'case-study' || currentPage === 'privacy' || currentPage === '404' ? 'text-neutral-950 font-semibold' : 'hover:text-neutral-950'
              }`}
            >
              <span>Pages</span>
              <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${activeDropdown === 'pages' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'pages' && (
              <div
                className="absolute top-full right-0 pt-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                onMouseEnter={() => handleMouseEnter('pages')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-neutral-200/90 py-6 px-7">
                  <div className="flex items-stretch gap-10 min-w-[360px]">
                    {/* Left Column */}
                    <div className="flex-1 flex flex-col space-y-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick('about');
                        }}
                        className="text-left text-[14.5px] font-normal text-neutral-900 hover:text-black py-1 transition-colors cursor-pointer w-full block"
                      >
                        About
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick('features');
                        }}
                        className={`text-left text-[14.5px] font-normal py-1 transition-colors cursor-pointer w-full block ${
                          currentPage === 'features' ? 'text-black font-semibold' : 'text-neutral-900 hover:text-black'
                        }`}
                      >
                        Features
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick('pricing');
                        }}
                        className="text-left text-[14.5px] font-normal text-neutral-900 hover:text-black py-1 transition-colors cursor-pointer w-full block"
                      >
                        Pricing
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick('blog');
                        }}
                        className="text-left text-[14.5px] font-normal text-neutral-900 hover:text-black py-1 transition-colors cursor-pointer w-full block"
                      >
                        Blog
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick('blog');
                        }}
                        className="text-left text-[14.5px] font-normal text-neutral-900 hover:text-black py-1 transition-colors cursor-pointer whitespace-nowrap w-full block"
                      >
                        Blog Details
                      </button>
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-[1px] bg-neutral-200 self-stretch" />

                    {/* Right Column */}
                    <div className="flex-1 flex flex-col space-y-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick('case-study');
                        }}
                        className={`text-left text-[14.5px] font-normal py-1 transition-colors cursor-pointer whitespace-nowrap w-full block ${
                          currentPage === 'case-study' ? 'text-black font-semibold' : 'text-neutral-900 hover:text-black'
                        }`}
                      >
                        Case Study
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick('case-study');
                        }}
                        className="text-left text-[14.5px] font-normal text-neutral-900 hover:text-black py-1 transition-colors cursor-pointer whitespace-nowrap w-full block"
                      >
                        Case Study Details
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick('terms');
                        }}
                        className={`text-left text-[14.5px] font-normal py-1 transition-colors cursor-pointer whitespace-nowrap w-full block ${
                          currentPage === 'terms' ? 'text-black font-semibold' : 'text-neutral-900 hover:text-black'
                        }`}
                      >
                        Terms & Conditions
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick('privacy');
                        }}
                        className={`text-left text-[14.5px] font-normal py-1 transition-colors cursor-pointer whitespace-nowrap w-full block ${
                          currentPage === 'privacy' ? 'text-black font-semibold' : 'text-neutral-900 hover:text-black'
                        }`}
                      >
                        Privacy Policy
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick('404');
                        }}
                        className={`text-left text-[14.5px] font-normal py-1 transition-colors cursor-pointer w-full block ${
                          currentPage === '404' ? 'text-black font-semibold' : 'text-neutral-900 hover:text-black'
                        }`}
                      >
                        404
                      </button>
                    </div>
                  </div>
                </div>
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
            onClick={() => handleNavClick('features')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'features' ? 'text-black font-semibold' : 'text-neutral-800 hover:text-black'
            }`}
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
          <button
            onClick={() => handleNavClick('case-study')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'case-study' ? 'text-black font-semibold' : 'text-neutral-800 hover:text-black'
            }`}
          >
            Case Study
          </button>
          <button
            onClick={() => handleNavClick('terms')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'terms' ? 'text-black font-semibold' : 'text-neutral-800 hover:text-black'
            }`}
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => handleNavClick('privacy')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'privacy' ? 'text-black font-semibold' : 'text-neutral-800 hover:text-black'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => handleNavClick('404')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === '404' ? 'text-black font-semibold' : 'text-neutral-800 hover:text-black'
            }`}
          >
            404
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
