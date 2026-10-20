import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DemoModal } from '../components/DemoModal';
import { images } from '../assets/images';
import blogBackground from '../assets/images/blog_bg.png';
import { X, ArrowRight, Clock, Calendar, Cpu } from 'lucide-react';

interface BlogProps {
  onNavigate?: (page: 'home' | 'about' | 'features' | 'pricing' | 'blog' | 'blog-details' | 'contact' | 'terms' | 'case-study' |  'privacy' | '404') => void;
}

interface BlogPost {
  id: string;
  image: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
}

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Exactly the 9 cards from the user's screenshot
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      image: images.insightSpiral,
      title: 'Explore trends, case studies, and insights from our AI experts.',
      category: 'Insights & Research',
      readTime: '5 min read',
      date: 'May 18, 2025',
      author: {
        name: 'Dr. Aris Thorne',
        role: 'Chief AI Architect',
      },
      content: [
        'Artificial intelligence is progressing from disconnected narrow tools into deeply unified autonomous enterprise nervous systems.',
        'In this briefing, our research team analyzes the key structural shifts organizations must undertake when embedding multi-agent reasoning into high-stakes operational workflows.',
        'From dynamic prompt graphs to continuous parameter optimization, discover the patterns proven to yield defensible business advantage.'
      ],
    },
    {
      id: '2',
      image: images.insightParticles,
      title: 'Discover trends, case studies, and insights from our AI specialists.',
      category: 'Case Studies',
      readTime: '6 min read',
      date: 'May 14, 2025',
      author: {
        name: 'Elena Rostova',
        role: 'VP of Applied Intelligence',
      },
      content: [
        'Deploying generative intelligence inside mission-critical pipelines requires bulletproof reliability, zero data leakage, and sub-second deterministic latency.',
        'We unpack three practical client case studies across supply chain forecasting, automated reconciliation, and executive scenario simulation.',
        'Learn how each architecture achieved over 40% reduction in cycle time while retaining human-in-the-loop governance.'
      ],
    },
    {
      id: '3',
      image: images.caseStudyFabric,
      title: 'Explore the latest trends, success stories,from our AI experts.',
      category: 'Innovation',
      readTime: '4 min read',
      date: 'May 10, 2025',
      author: {
        name: 'Marcus Vance',
        role: 'Principal Systems Engineer',
      },
      content: [
        'Success in machine learning initiatives is rarely determined by raw model parameter scale alone, but by data orchestration and pipeline ergonomics.',
        'Here, we review the foundational building blocks required to elevate conversational prototypes into resilient production systems.',
        'See how top-tier teams establish guardrails, automated regression evals, and audit-ready observability.'
      ],
    },
    {
      id: '4',
      image: images.insightWaves,
      title: 'Get inspired by emerging trends, real-world case studies, and AI insights.',
      category: 'Industry Trends',
      readTime: '5 min read',
      date: 'May 05, 2025',
      author: {
        name: 'Sophia Sterling',
        role: 'Head of Product Strategy',
      },
      content: [
        'The transition from rule-based robotic process automation (RPA) to cognitive agent orchestration represents the biggest productivity inflection of this decade.',
        'We examine real-world deployments where cognitive agents autonomously negotiate contracts, reconcile discrepancies, and route decisions.',
        'Discover how leaders are architecting these workflows to maximize leverage while maintaining absolute control.'
      ],
    },
    {
      id: '5',
      image: images.abstractWaves || images.insightWaves,
      title: 'Dive into AI trends, practical case studies, and expert perspectives.',
      category: 'Deep Tech',
      readTime: '7 min read',
      date: 'Apr 28, 2025',
      author: {
        name: 'Dr. Vikram Patel',
        role: 'Lead ML Scientist',
      },
      content: [
        'Modern multimodal models present both immense promise and unique operational hurdles in enterprise production.',
        'This deep dive explores retrieval augmented generation (RAG) at scale, hybrid vector-lexical indexing, and deterministic structured outputs.',
        'Get practical recipes for minimizing hallucinations and maintaining rock-solid SLA compliance.'
      ],
    },
    {
      id: '6',
      image: images.abstractSpiral || images.insightSpiral,
      title: 'Stay ahead with the latest AI trends, case studies, and expert insights.',
      category: 'Executive Strategy',
      readTime: '4 min read',
      date: 'Apr 22, 2025',
      author: {
        name: 'Claire Chen',
        role: 'Director of Technology Solutions',
      },
      content: [
        'Technology leaders are under unprecedented pressure to show tangible ROI from artificial intelligence initiatives within 90 days.',
        'We outline a battle-tested decision framework for prioritizing high-impact AI opportunities versus low-yield vanity demos.',
        'Learn how to calculate true cost of ownership, risk mitigation vectors, and user adoption velocity.'
      ],
    },
    {
      id: '7',
      image: images.abstractWaves || images.insightWaves,
      title: 'Learn from industry trends, proven case studies, and our AI specialists.',
      category: 'Best Practices',
      readTime: '5 min read',
      date: 'Apr 16, 2025',
      author: {
        name: 'Julian Hayes',
        role: 'Enterprise Architect',
      },
      content: [
        'Enterprise data rarely exists in clean, pre-indexed vector formats. It is scattered across legacy SQL tables, PDFs, spreadsheets, and APIs.',
        'In this edition, our engineering team shares the ingestion and normalization pipelines that turn messy corporate repositories into high-precision knowledge engines.',
        'Read about privacy preserving techniques and role-based access control inside intelligent retrieval.'
      ],
    },
    {
      id: '8',
      image: images.caseStudyFabric || images.insightParticles,
      title: 'Explore AI innovations, real-world results, and insights from our experts.',
      category: 'Engineering',
      readTime: '6 min read',
      date: 'Apr 09, 2025',
      author: {
        name: 'Nadia Benali',
        role: 'Senior AI Engineer',
      },
      content: [
        'Autonomous agents must coordinate seamlessly across asynchronous task trees without falling into cyclic loops or degraded reasoning states.',
        'We showcase real-world benchmarking results across multi-agent consensus protocols, state rollbacks, and recovery mechanisms.',
        'Explore how these architectures are currently operating in production fintech and manufacturing environments.'
      ],
    },
    {
      id: '9',
      image: images.insightSpiral,
      title: 'Keep up with AI trends, success stories, and insights from experienced experts.',
      category: 'Future of Work',
      readTime: '4 min read',
      date: 'Apr 02, 2025',
      author: {
        name: 'Liam Gallagher',
        role: 'Head of Automation Research',
      },
      content: [
        'As intelligent systems take on heavier cognitive workloads, organizational roles must evolve from execution to curation and governance.',
        'We share empirical observations from deploying enterprise automation across 50,000+ knowledge workers over the past 18 months.',
        'Discover how leading firms are restructuring teams, training talent, and measuring human-machine collaborative efficiency.'
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar
        currentPage="blog"
        onNavigate={onNavigate}
        onBookDemo={() => setModalOpen(true)}
      />

      {/* Main Content Container */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-36 sm:pt-44 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#fbfbfb] via-[#f8f8f9] to-white overflow-hidden">
          {/* Fully responsive background topographic wavy texture */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-full z-0 overflow-hidden select-none [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] flex justify-center"
            aria-hidden="true"
          >
            <img
              src={blogBackground}
              alt=""
              className="w-full h-full object-cover object-top opacity-85 min-w-[750px] sm:min-w-full"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Eyebrow Pill Badge: "BLOG & INSIGHT" with icon */}
            <div className="mb-6 sm:mb-7 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-4 py-2 font-['Inter'] text-[13px] font-semibold tracking-[-0.02em] text-[#1a1a1a] shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-transform hover:scale-105">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#111113] text-white shadow-[0_2px_5px_rgba(0,0,0,0.22)]">
                  <Cpu className="h-3.5 w-3.5" strokeWidth={2.1} />
                </span>
                <span>BLOG &amp; INSIGHT</span>
              </div>
            </div>

            {/* Hero Title & Subtitle */}
            <h1 className="blog-hero-title font-['Inter'] text-[40px] font-semibold leading-[1.12] tracking-[-0.055em] sm:text-[52px] lg:text-[64px]">
              <span className="hero-gradient-headline">Insights on AI,</span>
              <br />
              <span className="hero-gradient-headline">Automation &amp; Innovation</span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-5 max-w-2xl font-['Inter'] text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-neutral-600 sm:text-[17px] lg:max-w-none lg:whitespace-nowrap">
              We provide powerful, flexible, and secure AI solutions—built for real business outcomes.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {blogPosts.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="blog-card-hover group flex flex-col"
            >
              <div className="relative aspect-[1.38/1] overflow-hidden rounded-[24px] border border-white bg-neutral-100 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:rounded-[28px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover object-center grayscale contrast-105 transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="-mt-px flex min-h-[214px] flex-1 flex-col rounded-[24px] border border-white bg-[#f7f7f7] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:rounded-[28px] sm:p-7">
                <h3 className="text-[21px] font-medium leading-[1.28] tracking-[-0.045em] text-[#111113] sm:text-[24px]">
                  {post.title}
                </h3>

                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('blog-details');
                      window.history.pushState({}, '', `/blog-details?id=${post.id}`);
                    } else {
                      window.location.href = `/blog-details?id=${post.id}`;
                    }
                  }}
                  className="mt-auto w-full rounded-[14px] border border-neutral-200/90 bg-white px-4 py-4 text-center text-[16px] font-medium text-[#111113] shadow-[0_8px_18px_rgba(0,0,0,0.08)] transition-all hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.99]"
                >
                  Read Blog
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Featured cards - second row */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-3">
          {blogPosts.slice(3, 6).map((post) => (
            <article
              key={post.id}
              className="blog-card-hover group flex flex-col"
            >
              <div className="relative aspect-[1.38/1] overflow-hidden rounded-[24px] border border-white bg-neutral-100 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:rounded-[28px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover object-center grayscale contrast-105 transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="-mt-px flex min-h-[214px] flex-1 flex-col rounded-[24px] border border-white bg-[#f7f7f7] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:rounded-[28px] sm:p-7">
                <h3 className="text-[21px] font-medium leading-[1.28] tracking-[-0.045em] text-[#111113] sm:text-[24px]">
                  {post.title}
                </h3>

                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('blog-details');
                      window.history.pushState({}, '', `/blog-details?id=${post.id}`);
                    } else {
                      window.location.href = `/blog-details?id=${post.id}`;
                    }
                  }}
                  className="mt-auto w-full rounded-[14px] border border-neutral-200/90 bg-white px-4 py-4 text-center text-[16px] font-medium text-[#111113] shadow-[0_8px_18px_rgba(0,0,0,0.08)] transition-all hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.99]"
                >
                  Read Blog
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* More articles */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-3">
          {blogPosts.slice(6).map((post) => (
            <article
              key={post.id}
              className="blog-card-hover group flex flex-col"
            >
              <div className="relative aspect-[1.38/1] overflow-hidden rounded-[24px] border border-white bg-neutral-100 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:rounded-[28px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover object-center grayscale contrast-105 transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="-mt-px flex min-h-[214px] flex-1 flex-col rounded-[24px] border border-white bg-[#f7f7f7] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:rounded-[28px] sm:p-7">
                <h3 className="text-[21px] font-medium leading-[1.28] tracking-[-0.045em] text-[#111113] sm:text-[24px]">
                  {post.title}
                </h3>

                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('blog-details');
                      window.history.pushState({}, '', `/blog-details?id=${post.id}`);
                    } else {
                      window.location.href = `/blog-details?id=${post.id}`;
                    }
                  }}
                  className="mt-auto w-full rounded-[14px] border border-neutral-200/90 bg-white px-4 py-4 text-center text-[16px] font-medium text-[#111113] shadow-[0_8px_18px_rgba(0,0,0,0.08)] transition-all hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.99]"
                >
                  Read Blog
                </button>
              </div>
            </article>
          ))}
        </div>
          </div>
        </section>
      </main>

      {/* Pre-Footer Final CTA Card: "Let's Build the Future, Together" */}
      <div className="relative z-10">
        <FinalCTA onConsultationClick={() => setModalOpen(true)} />
      </div>

      {/* Footer with Isometric Cube background */}
      <Footer onNavigate={onNavigate} />

      {/* Article Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-neutral-200 shadow-2xl p-6 sm:p-8 animate-scaleUp relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 mb-6">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badges / Metadata */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mb-3">
              <span className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 font-semibold">
                {activePost.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {activePost.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {activePost.date}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-medium text-neutral-950 tracking-tight mb-4 leading-tight">
              {activePost.title}
            </h2>

            {/* Author */}
            <div className="flex items-center gap-3 pb-6 mb-6 border-b border-neutral-100">
              <div className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-semibold">
                {activePost.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">{activePost.author.name}</p>
                <p className="text-xs text-neutral-500">{activePost.author.role}</p>
              </div>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              {activePost.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Footer Modal CTA */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  setActivePost(null);
                  setModalOpen(true);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-neutral-950 text-white text-xs font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discuss with Axonix Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActivePost(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-neutral-300 text-neutral-700 text-xs font-medium hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Book Demo Modal */}
      <DemoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};
