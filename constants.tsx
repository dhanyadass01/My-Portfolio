
import { Project, Education, Skill, Language } from './types';

export const PERSONAL_INFO = {
  name: 'Dhanya D',
  title: 'AI Web Developer & UI/UX Enthusiast',
  location: 'Coimbatore, India',
  phone: '9150960105',
  email: 'dhanyadass025@gmail.com',
  linkedin: 'linkedin.com/in/dhanya-d',
  github: 'github.com/dhanyadass01',
  summary: 'Aspiring college student with a keen interest in AI web development and foundational UI/UX design principles. Demonstrates creativity in graphic design, including poster and logo creation. Possesses strong listening and writing skills, eager to apply and expand knowledge in a dynamic academic environment.',
};

export const EDUCATION: Education[] = [
  {
    institution: 'Sankara College of Science and Commerce',
    location: 'Coimbatore',
    degree: 'Bachelor of Computer Science and Data Analytics',
    date: '07/2024',
  },
  {
    institution: 'John Bosco Matric Hr.Sec School',
    location: 'Coimbatore',
    degree: 'HSC',
    date: '06/2023 - 04/2024',
    extra: 'Percentage: 75',
  },
  {
    institution: 'John Bosco Matric Hr.Sec School',
    location: 'Coimbatore',
    degree: 'SSLC',
    date: '06/2021 - 04/2022',
    extra: 'Percentage: 66',
  },
];

export const SKILLS: Skill[] = [
  { name: 'AI tools optimization', level: 'Skillful', percentage: 85 },
  { name: 'Creativity', level: 'Skillful', percentage: 90 },
  { name: 'Communication', level: 'Skillful', percentage: 80 },
  { name: 'Teamwork', level: 'Experienced', percentage: 75 },
  { name: 'Time Management', level: 'Beginner', percentage: 40 },
  { name: 'UI/UX Design', level: 'Experienced', percentage: 70 },
  { name: 'Graphic Design', level: 'Skillful', percentage: 85 },
];

export const PROJECTS: Project[] = [
  {
    title: 'Smart Leave - For Staffs',
    duration: 'Nov 2025 - Dec 2025',
    url: 'https://smartleave.vercel.app/',
    image: 'https://images.unsplash.com/photo-1506784919141-93501233a59b?q=80&w=1200&auto=format&fit=crop',
    tags: ['AI Automation', 'React', 'HR Tech'],
    description: [
      'Developed an AI-powered Smart Leave application for college staff, automating the entire leave management lifecycle.',
      'Integrated advanced AI algorithms to intelligently process leave requests, significantly reducing manual review time.',
    ],
  },
  {
    title: 'AI Multi-lingual Chatbot',
    duration: 'Nov 2025',
    url: 'https://sankara-connect-950441171205.us-west1.run.app/',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    tags: ['NLP', 'Voice AI', 'Cloud Run'],
    description: [
      'Developed for college to enhance students and parents access to details.',
      'User-friendly with voice assistance and automations, supporting both Tamil and English conversational flows.',
    ],
  },
];

export const LANGUAGES: Language[] = [
  { name: 'Malayalam', proficiency: 'Native Speaker' },
  { name: 'Tamil', proficiency: 'Highly Proficient' },
  { name: 'English', proficiency: 'Fluent' },
];
