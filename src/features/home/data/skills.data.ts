export interface Skill {
  name: string;
  years: number;
  proficiency: 'expert' | 'advanced' | 'intermediate';
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    skills: [
      { name: 'React', years: 5, proficiency: 'expert' },
      { name: 'TypeScript', years: 4, proficiency: 'expert' },
      { name: 'Next.js', years: 3, proficiency: 'advanced' },
      { name: 'TailwindCSS', years: 3, proficiency: 'expert' },
      { name: 'Vue.js', years: 2, proficiency: 'intermediate' },
    ],
  },
  {
    name: 'Backend',
    icon: 'M5 12h14M12 5l7 7-7 7',
    skills: [
      { name: 'Node.js', years: 5, proficiency: 'expert' },
      { name: 'Express', years: 4, proficiency: 'expert' },
      { name: 'Python', years: 3, proficiency: 'advanced' },
      { name: 'PostgreSQL', years: 3, proficiency: 'advanced' },
      { name: 'MongoDB', years: 3, proficiency: 'advanced' },
    ],
  },
  {
    name: 'Tools & DevOps',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    skills: [
      { name: 'Git', years: 5, proficiency: 'expert' },
      { name: 'Docker', years: 3, proficiency: 'advanced' },
      { name: 'AWS', years: 2, proficiency: 'intermediate' },
      { name: 'CI/CD', years: 3, proficiency: 'advanced' },
    ],
  },
];