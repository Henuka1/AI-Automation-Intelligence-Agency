import { images } from '../assets/images';

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  authorTitle: string;
  date: string;
  category: string;
  image: string;
  content: { type: 'text' | 'image' | 'heading' | 'blockquote' | 'list'; value: string | string[] }[];
}

export const blogsData: BlogPost[] = [
  {
    id: 'understanding-kpis',
    title: 'Understanding KPIs in Marketing',
    author: 'Jamie Rundals',
    authorTitle: 'CMO at GreenTech',
    date: 'Oct 16, 2026',
    category: 'News',
    image: images.abstractWaves,
    content: [
      {
        type: 'text',
        value: 'Dive into the pivotal role of data analytics in crafting marketing campaigns that resonate with target audiences. Explore how data-driven insights fuel strategic decision-making, allowing marketers to identify consumer preferences, behaviors, and trends.',
      },
      {
        type: 'list',
        value: [
          'By harnessing the power of data analytics, marketers gain valuable insights into campaign performance',
          'Enabling them to optimize strategies for maximum ROI',
          'Discover how data analytics enables personalized marketing approaches, delivering tailored messages to the right audience segments at the right time.',
        ],
      },
      {
        type: 'heading',
        value: 'Understanding Consumer Behavior',
      },
      {
        type: 'text',
        value: 'Data analytics is revolutionizing the way marketers understand consumer behavior in today\'s digital age. By harnessing the power of data collected from diverse sources such as social media, website interactions, and purchasing patterns, marketers can unlock valuable insights into their target audience.',
      },
      {
        type: 'image',
        value: images.contactRobotHandAi,
      },
      {
        type: 'text',
        value: 'Personalization is a key benefit of data analytics in marketing. By understanding the unique preferences and behaviors of different consumer segments, marketers can create highly targeted and personalized campaigns. For example, they can send customized email newsletters to specific segments of their audience based on their past interactions with the brand or showcase products related to their recent searches or purchases.',
      },
      {
        type: 'heading',
        value: 'Optimizing Campaign Performance',
      },
      {
        type: 'text',
        value: 'Data analytics empowers marketers to make informed, real-time decisions. With insights from data analysis, they pivot strategies, allocate resources effectively, and optimize campaigns for maximum ROI. This agility enables marketers to drive tangible results, efficiently achieving business objectives in the ever-evolving digital landscape.',
      },
      {
        type: 'heading',
        value: 'Predictive Analytics',
      },
      {
        type: 'text',
        value: 'Predictive analytics stands as a potent tool in marketing, leveraging historical data and behaviors to forecast future trends and behaviors. This capability enables marketers to anticipate customer needs and preferences before they manifest, fostering proactive adjustments to strategies.',
      },
      {
        type: 'blockquote',
        value: '“Smooth integration, minimal downtime, and exceptional performance—this SaaS solution checks all the boxes.”',
      },
      {
        type: 'text',
        value: 'This proactive approach not only enhances agility but also boosts competitiveness in dynamic market landscapes.',
      },
    ],
  },
  {
    id: 'ai-in-healthcare',
    title: 'AI in Healthcare: Transforming Patient Care',
    author: 'Dr. Sarah Smith',
    authorTitle: 'Chief Scientist',
    date: 'Oct 14, 2026',
    category: 'AI Trends',
    image: images.aboutJourneyVR,
    content: [
        { type: 'text', value: 'Healthcare is undergoing a paradigm shift...' }
    ]
  },
  {
    id: 'future-of-automation',
    title: 'The Future of Enterprise Automation',
    author: 'Alex Rivera',
    authorTitle: 'CTO',
    date: 'Oct 12, 2026',
    category: 'Automation',
    image: images.caseStudyFabric,
    content: [
        { type: 'text', value: 'Enterprise automation is no longer just about efficiency...' }
    ]
  }
];
