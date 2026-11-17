export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  availability: string;
  tagline: string;
  summary: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
  projects: Project[];
  stack: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
}

export interface PortfolioData {
  profile: Profile;
  domains: string[];
  focus: string[];
  skills: SkillGroup[];
  experiences: Experience[];
  personalProjects: Project[];
  education: Education[];
}
