export interface InsightArticle {
  id: string;
  imageKey: 'insightWaves' | 'insightParticles' | 'insightSpiral';
  title: string;
  category: string;
  readTime: string;
}

export const insightsData: InsightArticle[] = [
  {
    id: '1',
    imageKey: 'insightWaves',
    category: 'Machine Learning',
    readTime: '4 min read',
    title: 'Explore trends, case studies, and insights from our AI experts.',
  },
  {
    id: '2',
    imageKey: 'insightParticles',
    category: 'Automation',
    readTime: '6 min read',
    title: 'Discover trends, case studies, and insights from our AI specialists.',
  },
  {
    id: '3',
    imageKey: 'insightSpiral',
    category: 'Innovation',
    readTime: '5 min read',
    title: 'Explore the latest trends, success stories,from our AI experts.',
  },
];
