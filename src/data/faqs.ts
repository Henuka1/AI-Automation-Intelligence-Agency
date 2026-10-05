export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: '1',
    question: 'Why is a strong brand identity or website important?',
    answer:
      "A robust brand identity and website serve as the face of your business, shaping how it is perceived by potential customers. They not only convey professionalism but also establish trust and credibility, vital factors in today's competitive market.",
  },
  {
    id: '2',
    question: 'What service do you offer?',
    answer:
      'We provide end-to-end artificial intelligence services including custom machine learning model development, workflow automation, predictive analytics, natural language processing, and turnkey enterprise AI integration.',
  },
  {
    id: '3',
    question: 'Can I cancel anytime?',
    answer:
      'Yes, all our plans operate on a flexible month-to-month basis. You can modify, pause, or cancel your subscription at any time with zero hidden cancellation penalties.',
  },
  {
    id: '4',
    question: 'Do you work with international clients?',
    answer:
      'Absolutely. We collaborate with forward-thinking enterprises and fast-growing startups across North America, Europe, Asia-Pacific, and the Middle East with async workflows and dedicated regional communication channels.',
  },
  {
    id: '5',
    question: 'How long before I see results?',
    answer:
      'Initial automation workflows and performance tracking dashboards typically go live within the first 2 to 3 weeks, with measurable ROI and efficiency gains observable within the first 60 days.',
  },
  {
    id: '6',
    question: 'What industries do you specialize in?',
    answer:
      'We specialize in financial technology, healthcare & life sciences, e-commerce & retail logistics, legal tech, and high-growth B2B SaaS platforms.',
  },
];
