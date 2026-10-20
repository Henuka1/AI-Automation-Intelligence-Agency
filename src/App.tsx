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
import { CaseStudy } from './pages/CaseStudy';
import { CaseStudyDetails } from './pages/CaseStudyDetails';
import { BlogDetails } from './pages/BlogDetails';
import { Privacy } from './pages/Privacy';
import { NotFound } from './pages/NotFound';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'features' | 'pricing' | 'blog' | 'blog-details' | 'contact' | 'terms' | 'case-study' | 'case-study-details' | 'privacy' | '404'>(() => {
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
      if (path.includes('blog-details') || hash === '#blog-details') {
        return 'blog-details';
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
      if (path.includes('case-study-details') || hash === '#case-study-details') {
        return 'case-study-details';
      }
      if (path.includes('case-study') || hash === '#case-study-page' || hash === '#case-studies') {
        return 'case-study';
      }
      if (path.includes('privacy') || hash === '#privacy' || hash === '#privacy-policy') {
        return 'privacy';
      }
      if (path.includes('404') || hash === '#404' || hash === '#not-found') {
        return '404';
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
      } else if (path.includes('blog-details') || hash === '#blog-details') {
        setCurrentPage('blog-details');
      } else if (path.includes('blog') || hash === '#blog-page') {
        setCurrentPage('blog');
      } else if (path.includes('contact') || hash === '#contact-page') {
        setCurrentPage('contact');
      } else if (path.includes('terms') || hash === '#terms' || hash === '#terms-page') {
        setCurrentPage('terms');
      } else if (path.includes('case-study-details') || hash === '#case-study-details') {
        setCurrentPage('case-study-details');
      } else if (path.includes('case-study') || hash === '#case-study-page' || hash === '#case-studies') {
        setCurrentPage('case-study');
      } else if (path.includes('privacy') || hash === '#privacy' || hash === '#privacy-policy') {
        setCurrentPage('privacy');
      } else if (path.includes('404') || hash === '#404' || hash === '#not-found') {
        setCurrentPage('404');
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

  const navigate = (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'blog-details' | 'contact' | 'terms' | 'case-study' | 'case-study-details' | 'privacy' | '404') => {
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
    } else if (page === 'blog-details') {
      window.history.pushState({}, '', '/blog-details');
    } else if (page === 'contact') {
      window.history.pushState({}, '', '/contact');
    } else if (page === 'terms') {
      window.history.pushState({}, '', '/terms');
    } else if (page === 'case-study-details') {
      window.history.pushState({}, '', '/case-study-details');
    } else if (page === 'case-study') {
      window.history.pushState({}, '', '/case-study');
    } else if (page === 'privacy') {
      window.history.pushState({}, '', '/privacy');
    } else if (page === '404') {
      window.history.pushState({}, '', '/404');
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
  if (currentPage === 'blog-details') {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id') || '1';
    return <BlogDetails onNavigate={navigate} id={id} />;
  }
  if (currentPage === 'contact') {
    return <Contact onNavigate={navigate} />;
  }
  if (currentPage === 'terms') {
    return <Terms onNavigate={navigate} />;
  }
  if (currentPage === 'case-study-details') {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id') || 'fresh-care';
    return <CaseStudyDetails onNavigate={navigate} initialCaseId={id} />;
  }
  if (currentPage === 'case-study') {
    return <CaseStudy onNavigate={navigate} />;
  }
  if (currentPage === 'privacy') {
    return <Privacy onNavigate={navigate} />;
  }
  if (currentPage === '404') {
    return <NotFound onNavigate={navigate} />;
  }
  return <Home onNavigate={navigate} />;
}
