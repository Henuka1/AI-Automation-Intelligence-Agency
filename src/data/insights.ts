export interface InsightArticle {
  id: string;
  imageKey: 'insightWaves' | 'insightParticles' | 'insightSpiral' | 'caseStudyFabric' | 'collabHands' | 'aboutJourneyVR';
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  featured?: boolean;
  content?: string[];
}

export const insightsData: InsightArticle[] = [
  {
    id: '1',
    imageKey: 'insightWaves',
    category: 'Machine Learning',
    readTime: '5 min read',
    date: 'Oct 8, 2025',
    author: {
      name: 'Dr. Marcus Vance',
      role: 'Principal Research Scientist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    featured: true,
    title: 'The Architecture of Autonomous Agents: Moving from Prompts to Production',
    excerpt:
      'Why prompt engineering was only the beginning. Discover how multi-agent consensus algorithms and deterministic verification layers are enabling mission-critical enterprise autonomy.',
    content: [
      'In early 2023, the industry was captivated by prompt engineering—crafting precise instructions for single LLM completions. Today, enterprise architectures have matured dramatically.',
      'Autonomous agent systems do not rely on single prompts. Instead, they leverage modular graph architectures with specialized sub-agents: a planning engine, execution units, memory retrieval systems, and deterministic evaluation gatekeepers.',
      'By decoupling reasoning from raw execution and introducing sandboxed verification environments, companies achieve 99.7% operational accuracy in automated supply chain reconciliation, real-time fraud mitigation, and continuous code deployment.',
    ],
  },
  {
    id: '2',
    imageKey: 'insightParticles',
    category: 'Automation',
    readTime: '6 min read',
    date: 'Sep 29, 2025',
    author: {
      name: 'Sofia Chen',
      role: 'Head of Solutions Engineering',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    title: 'Zero-Latency Knowledge Retrieval: Building High-Scale Hybrid RAG Pipelines',
    excerpt:
      'How we achieved sub-40ms semantic retrieval across 10 million technical documentation entries using hybrid dense-sparse vector indexing.',
    content: [
      'Standard vector databases often fail at nuanced enterprise keyword searches, while classical Elasticsearch lacks contextual semantic comprehension.',
      'Our hybrid approach combines reciprocal rank fusion (RRF) with speculative re-ranking. By performing vector search in parallel with BM25 BM25-augmented token indices, we surface exact entity identifiers while preserving abstract conceptual relevance.',
      'The result is a lightning-fast enterprise assistant that engineers trust with proprietary API specifications and regulatory audit logs.',
    ],
  },
  {
    id: '3',
    imageKey: 'insightSpiral',
    category: 'Innovation',
    readTime: '4 min read',
    date: 'Sep 18, 2025',
    author: {
      name: 'Arjun Mehta',
      role: 'Director of AI Strategy',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    title: 'The True ROI of Generative AI: Analyzing 120 Enterprise Deployments',
    excerpt:
      'A candid empirical review of where enterprise AI created transformative value, where it merely generated vanity metrics, and how to measure true bottom-line impact.',
    content: [
      'Measuring AI success through token volume or chat query frequency is an anti-pattern. Sustainable enterprise value manifests in cycle time compression, defect eradication, and staff capacity multipliers.',
      'In our audit of 120 enterprise implementations, organizations that embedded AI directly into transactional backend loops achieved a 3.8x ROI within 180 days, whereas standalone assistant widgets averaged less than 1.1x.',
    ],
  },
  {
    id: '4',
    imageKey: 'caseStudyFabric',
    category: 'Case Studies',
    readTime: '7 min read',
    date: 'Aug 30, 2025',
    author: {
      name: 'Elena Rostova',
      role: 'VP of Product Innovation',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    title: 'How Global Logistics Saved 4,200 Engineering Hours with Predictive Routing',
    excerpt:
      'A deep dive into deploying neural combinatorial optimization models in real-world shipping hubs with messy, legacy telemetry feeds.',
    content: [
      'Real-world logistics data is inherently noisy. GPS dropouts, sudden weather fluctuations, and port congestion confound traditional linear programming algorithms.',
      'By applying continuous neural ODEs (Ordinary Differential Equations) that interpolate between sparse GPS pings, we generated dynamic routing plans that adapted in real time, slicing maritime detention charges by 34%.',
    ],
  },
  {
    id: '5',
    imageKey: 'collabHands',
    category: 'Engineering',
    readTime: '5 min read',
    date: 'Aug 14, 2025',
    author: {
      name: 'Liam Gallagher',
      role: 'Lead Infrastructure Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    title: 'Self-Healing Workflows: Mitigating API Drift in Distributed Pipelines',
    excerpt:
      'Using localized semantic guardrails to prevent schema breakage when third-party microservices mutate upstream endpoints without warning.',
    content: [
      'Every engineering team dreads silent upstream schema changes that take down critical downstream extract-transform-load (ETL) pipelines.',
      'We demonstrate how generative fallback transformers can infer schema deviations on-the-fly, reconstruct damaged payloads, and notify maintainers with automatic pull requests before incidents breach SLA thresholds.',
    ],
  },
  {
    id: '6',
    imageKey: 'aboutJourneyVR',
    category: 'Strategy & Leadership',
    readTime: '6 min read',
    date: 'Jul 28, 2025',
    author: {
      name: 'Sarah Jenkins',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    title: 'The Human-in-the-Loop Imperative: Designing Responsible AI Workflows',
    excerpt:
      'Why the highest-performing enterprise automation systems keep humans at high-leverage inflection points rather than eliminating oversight entirely.',
    content: [
      'Complete operational detachment is neither safe nor desirable in high-stakes domains like healthcare billing, legal compliance, or algorithmic credit authorization.',
      'Our progressive delegation model lets automated pipelines handle repetitive 90% baselines while presenting high-entropy edge cases to human specialists in pre-digested, confidence-scored review dashboards.',
    ],
  },
];
