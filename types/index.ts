// types/index.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  category: 'web' | 'mobile' | 'ecommerce' | 'landing';
  image: string;
  images: string[];
  technologies: string[];
  features: string[];
  client?: string;
  year: number;
  duration: string;
  teamSize: number;
  url?: string;
  github?: string;
  stats: {
    users?: string;
    performance?: string;
    rating?: string;
  };
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  nameUz: string;
  role: string;
  roleUz: string;
  department: 'developers' | 'designers' | 'management';
  image: string;
  bio: string;
  bioUz: string;
  skills: string[];
  experience: string;
  experienceUz: string;
  education?: string;
  social: {
    github?: string;
    linkedin?: string;
    telegram?: string;
    portfolio?: string;
  };
  achievements: string[];
  specialization: string[];
  projectsCount: number;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  titleUz: string;
  shortDescription: string;
  shortDescriptionUz: string;
  fullDescription: string;
  fullDescriptionUz: string;
  icon: string;
  image: string;
  features: string[];
  featuresUz: string[];
  technologies: string[];
  process: {
    step: number;
    title: string;
    titleUz: string;
    description: string;
    descriptionUz: string;
  }[];
  pricing: {
    starting: string;
    duration: string;
  };
  benefits: string[];
  benefitsUz: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleUz: string;
  excerpt: string;
  excerptUz: string;
  content: string;
  contentUz: string;
  category: 'tutorials' | 'news' | 'tips' | 'case-study';
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  nameUz: string;
  position: string;
  positionUz: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  textUz: string;
  project?: string;
  date: string;
}

export interface Technology {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'tools' | 'devops';
  icon: string;
  level: 'expert' | 'advanced' | 'intermediate';
  yearsOfExperience: number;
  description: string;
  descriptionUz: string;
}

export interface PricingTier {
  id: string;
  name: string;
  nameUz: string;
  price: string;
  duration: string;
  description: string;
  descriptionUz: string;
  features: string[];
  featuresUz: string[];
  popular?: boolean;
  cta: string;
  ctaUz: string;
}

export interface FAQ {
  id: string;
  question: string;
  questionUz: string;
  answer: string;
  answerUz: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  timeline?: string;
}

export interface QuoteFormData extends ContactFormData {
  projectType: string;
  features: string[];
  hasDesign: boolean;
  hasContent: boolean;
  urgency: 'normal' | 'urgent' | 'flexible';
}

export interface JobOpening {
  id: string;
  title: string;
  titleUz: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  level: 'junior' | 'mid' | 'senior';
  description: string;
  descriptionUz: string;
  requirements: string[];
  requirementsUz: string[];
  responsibilities: string[];
  responsibilitiesUz: string[];
  benefits: string[];
  benefitsUz: string[];
  salary?: string;
  posted: string;
}

export interface Stats {
  projects: number;
  clients: number;
  years: number;
  teamMembers: number;
  satisfaction: number;
  users: string;
}

export type Language = 'uz' | 'en' | 'ru';