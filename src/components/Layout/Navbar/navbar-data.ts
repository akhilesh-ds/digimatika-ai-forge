
import { NavLink } from './types';

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { 
    name: 'Services', 
    path: '/services',
    dropdown: [
      { name: 'AI Chatbots', path: '/services/chatbots' },
      { name: 'Voice Agents', path: '/services/voice-agents' },
      { name: 'Workflow Automation', path: '/services/workflow-automation' },
      { name: 'Business Automation', path: '/services/business-automation' },
    ]
  },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];
