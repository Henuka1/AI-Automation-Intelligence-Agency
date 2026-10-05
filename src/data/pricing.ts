export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$999',
    period: '/mo',
    description: 'Integrated AI-driven product recommendations based on real-time user behavior.',
    features: [
      '1 Campaign',
      'Monthly Reports',
      'Email Support',
      'Priority Support',
      '4x Revisions',
    ],
    isPopular: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$2.999',
    period: '/mo',
    description: 'Integrated AI-driven product recommendations based on real-time user behavior.',
    features: [
      '1 Campaign',
      'Monthly Reports',
      'Email Support',
      'Priority Support',
      '4x Revisions',
    ],
    isPopular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$3.200',
    period: '/mo',
    description: 'Integrated AI-driven product recommendations based on real-time user behavior.',
    features: [
      '1 Campaign',
      'Monthly Reports',
      'Email Support',
      'Priority Support',
      '4x Revisions',
    ],
    isPopular: false,
  },
];
