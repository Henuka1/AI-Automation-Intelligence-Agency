import { images } from '../assets/images';

export interface CaseStudyItem {
  id: string;
  client: string;
  industry: string;
  service: string;
  tools: string;
  image: string;
  summary: string;
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
  challenge: string;
  solution: string[];
  deliverables: string[];
  results: string[];
  chairImages?: string[];
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'fresh-care',
    client: 'Fresh Care',
    industry: 'Furniture',
    service: 'Branding',
    tools: 'Figma',
    image: images.caseStudyFabric,
    summary: 'Integrated AI-driven product recommendations based on real-time user behavior and historical data.',
    metric1: { value: '90%', label: 'Average selling product' },
    metric2: { value: '43%', label: 'Improved team output' },
    challenge: 'Our branding design services are tailored to capture the essence of your business, creating a cohesive and memorable identity. Our team capture the essence of your business.',
    solution: [
      'Research and Audience Understanding',
      'Define Goals and Objectives',
      'Content Planning and Strategy',
      'Creation and Production',
      'Analyze and Optimize',
    ],
    deliverables: [
      'Vector Search Recommendation Engine',
      'Omnichannel Storefront API',
      'Automated Real-Time Visual Merchandiser',
      'Executive Conversion & Revenue Dashboard',
    ],
    results: [
      '90% average selling product conversion velocity',
      '43% improvement in team merchandising output',
      '3x increase in repeat customer engagement within 6 months',
    ],
    chairImages: [images.freshCareChair1, images.freshCareChair2],
  },
  {
    id: 'kondam-loius',
    client: 'Kondam Loius',
    industry: 'Enterprise SaaS',
    service: 'Autonomous Workflow RPA',
    tools: 'React & Python',
    image: images.kondamSwirlFabric,
    summary: 'Autonomous multi-agent support triage and automated CRM reconciliation for cloud software teams.',
    metric1: { value: '80%', label: 'Tier-1 automated tickets' },
    metric2: { value: '70%', label: 'Workflow automation' },
    challenge: 'Manual user onboarding and fragmented technical support queues created long triage times and reduced productivity across core engineering teams.',
    solution: [
      'Multi-Agent Triage Pipeline Setup',
      'Zero-Latency CRM Data Harmonization',
      'Customer Sentiment Tracking Radar',
      'Executive ROI & Velocity Analytics',
      'Continuous Feedback Loop Optimization',
    ],
    deliverables: [
      'Autonomous Multi-Agent Triage Pipeline',
      'Zero-Latency CRM Data Harmonizer',
      'Customer Sentiment Tracking Radar',
      'Executive ROI & Workflow Velocity Dashboard',
    ],
    results: [
      'Over 80% of tier-1 support tickets solved with zero human intervention',
      '70% of manual repetitive workflows automated in under 90 days',
      'Mean time to resolution dropped from 4 hours to under 45 seconds',
    ],
    chairImages: [images.abstractWaves, images.abstractSpiral],
  },
  {
    id: 'lokos-estate',
    client: 'Lokos Estate',
    industry: 'Real Estate & PropTech',
    service: 'Deep Neural Valuation',
    tools: 'TensorFlow & Node.js',
    image: images.lokosArchitecture,
    summary: 'Deep neural property valuation models and automated escrow document auditing for luxury real estate portfolios.',
    metric1: { value: '3x', label: 'Transaction velocity' },
    metric2: { value: '99.4%', label: 'Valuation accuracy' },
    challenge: 'Property matching and document review backlogs prolonged commercial transaction cycles by over 80 days with frequent pricing misalignments.',
    solution: [
      'Spatial Valuation Neural Engine Deployment',
      'Autonomous Contract Disclosure Audit Agent',
      'Interactive Investor Deal Room & Calculator',
      'Municipal Land Registry Ingestion Connector',
      'Real-time Cap Rate Analytics',
    ],
    deliverables: [
      'Spatial Valuation Neural Engine',
      'Autonomous Contract Disclosure Audit Agent',
      'Interactive Investor Deal Room & Calculator',
      'Municipal Land Registry Ingestion Connector',
    ],
    results: [
      '$12M+ in commercial property transactions verified and facilitated in Year 1',
      'Closing cycle reduced from 84 days down to 29 days',
      '99.4% valuation consistency validated against post-sale appraisals',
    ],
    chairImages: [images.insightWaves, images.insightParticles],
  },
];
