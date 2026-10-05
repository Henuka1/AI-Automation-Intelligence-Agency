export interface ServiceItem {
  id: string;
  iconName: 'zap' | 'monitor' | 'activity' | 'award' | 'shieldCheck';
  title: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: '1',
    iconName: 'zap',
    title: 'Fast, scalable, and tailored solutions',
    description: 'Send, receive, and manage payments—all in one place, fully encrypted and compliant.',
  },
  {
    id: '2',
    iconName: 'monitor',
    title: 'Hands-on AI expertise, not just theory',
    description: 'Connect with your favorite tools: QuickBooks, Stripe, Xero, Plaid, and more.',
  },
  {
    id: '3',
    iconName: 'activity',
    title: 'Results-driven with measurable ROI',
    description: 'Stay ahead of regulations with automated KYC/AML checks and audit trails.',
  },
  {
    id: '4',
    iconName: 'award',
    title: 'Cross-industry experience',
    description: 'Send, receive, and manage payments—all in one place, fully encrypted and compliant.',
  },
  {
    id: '5',
    iconName: 'shieldCheck',
    title: 'Security and privacy at every step',
    description: 'Connect with your favorite tools: QuickBooks, Stripe, Xero, Plaid, and more.',
  },
];
