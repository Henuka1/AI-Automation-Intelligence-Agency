/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { Pricing } from './pages/Pricing';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Terms } from './pages/Terms';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('pricing') || hash === '#pricing') {
        return 'pricing';
      }
      if (path.includes('features') || hash === '#features-page') {
        return 'features';
      }
      if (path.includes('about') || hash === '#about-page') {
        return 'about';
      }
      if (path.includes('blog') || hash === '#blog-page') {
        return 'blog';
      }
      if (path.includes('contact') || hash === '#contact-page') {
        return 'contact';
      }
      if (path.includes('terms') || hash === '#terms' || hash === '#terms-page') {
        return 'terms';
      }
    }
    return 'home';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('pricing') || hash === '#pricing') {
        setCurrentPage('pricing');
      } else if (path.includes('features') || hash === '#features-page') {
        setCurrentPage('features');
      } else if (path.includes('about') || hash === '#about-page') {
        setCurrentPage('about');
      } else if (path.includes('blog') || hash === '#blog-page') {
        setCurrentPage('blog');
      } else if (path.includes('contact') || hash === '#contact-page') {
        setCurrentPage('contact');
      } else if (path.includes('terms') || hash === '#terms' || hash === '#terms-page') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'contact' | 'terms') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page === 'pricing') {
      window.history.pushState({}, '', '/pricing');
    } else if (page === 'features') {
      window.history.pushState({}, '', '/features');
    } else if (page === 'about') {
      window.history.pushState({}, '', '/about');
    } else if (page === 'blog') {
      window.history.pushState({}, '', '/blog');
    } else if (page === 'contact') {
      window.history.pushState({}, '', '/contact');
    } else if (page === 'terms') {
      window.history.pushState({}, '', '/terms');
    } else {
      window.history.pushState({}, '', '/');
    }
  };

  if (currentPage === 'pricing') {
    return <Pricing onNavigate={navigate} />;
  }
  if (currentPage === 'features') {
    return <Features onNavigate={navigate} />;
  }
  if (currentPage === 'about') {
    return <About onNavigate={navigate} />;
  }
  if (currentPage === 'blog') {
    return <Blog onNavigate={navigate} />;
  }
  if (currentPage === 'contact') {
    return <Contact onNavigate={navigate} />;
  }
  if (currentPage === 'terms') {
    return <Terms onNavigate={navigate} />;
  }
  return <Home onNavigate={navigate} />;
}
