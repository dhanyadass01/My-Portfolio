
export interface Project {
  title: string;
  duration: string;
  url: string;
  description: string[];
  tags: string[];
  image: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  date: string;
  extra?: string;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Experienced' | 'Skillful' | 'Expert';
  percentage: number;
}

export interface Language {
  name: string;
  proficiency: string;
}
