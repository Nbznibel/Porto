export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team workspaces.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma'],
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Responsive portfolio website with animations and dark mode support.',
    tags: ['React', 'TailwindCSS', 'Framer Motion'],
  },
  {
    id: '4',
    title: 'Chat Application',
    description: 'Real-time messaging app with group chats and file sharing capabilities.',
    tags: ['React', 'Socket.io', 'Express', 'Redis'],
  },
  {
    id: '5',
    title: 'Weather Dashboard',
    description: 'Weather forecasting app with interactive maps and detailed forecasts.',
    tags: ['React', 'OpenWeather API', 'Leaflet'],
  },
  {
    id: '6',
    title: 'CRM System',
    description: 'Customer relationship management system with analytics and reporting.',
    tags: ['Vue.js', 'Python', 'Django', 'MySQL'],
  },
];