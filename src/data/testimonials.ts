export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: '"Their predictive analytics helped us forecast trends more accurately than our previous tools. It\'s like having a crystal ball for our business."',
    author: 'Samson Betawi',
    role: 'CMO at GreenTech',
    rating: '4.9',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: '2',
    quote: '"Routine tasks are now fully automated, and we can focus on strategic work that really moves the needle. It\'s like having an extra set of hands—only smarter."',
    author: 'Gile Mandra',
    role: 'CMO at GreenTech',
    rating: '4.9',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: '3',
    quote: '"The AI chatbot handles over 80% of our support tickets—and customers love the 24/7 response time."',
    author: 'Jamie Rundals',
    role: 'CMO at GreenTech',
    rating: '4.9',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: '4',
    quote: '"Their helped us automate 70% of our manual work in under 3 months and helped triple our online engagement just in six months. Real game-changer!"',
    author: 'Bills Terra',
    role: 'CMO at GreenTech',
    rating: '4.9',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: '5',
    quote: '"Before this, we were juggling spreadsheets and manual updates. Now everything\'s automated."',
    author: 'Kallo Huosen',
    role: 'CMO at GreenTech',
    rating: '4.9',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
  },
];
