export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  isCurrent?: boolean;
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    location: 'Tunis, Tunisia',
    period: '2023 - Present',
    description: 'Leading development of enterprise web applications using React and Node.js. Mentoring junior developers and implementing best practices.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    isCurrent: true,
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Digital Agency Pro',
    location: 'Tunis, Tunisia',
    period: '2021 - 2023',
    description: 'Built responsive web applications for various clients. Collaborated with design teams to implement pixel-perfect interfaces.',
    technologies: ['Vue.js', 'Nuxt', 'Firebase', 'TailwindCSS'],
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'StartUp Hub',
    location: 'Remote',
    period: '2019 - 2021',
    description: 'Developed interactive user interfaces and optimized application performance. Implemented responsive designs for mobile-first experiences.',
    technologies: ['React', 'JavaScript', 'CSS', 'Redux'],
  },
  {
    id: '4',
    title: 'Junior Developer',
    company: 'WebCraft Studios',
    location: 'Tunis, Tunisia',
    period: '2018 - 2019',
    description: 'Assisted in building web applications and learned modern development practices. Participated in code reviews and team meetings.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
];