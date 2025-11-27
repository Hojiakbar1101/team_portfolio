// lib/data/team.ts

import { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    slug: 'hojiakbar-saidrasulov',
    name: 'Hojiakbar Saidrasulov',
    nameUz: 'Xojiakbar Saidrasulov',
    role: 'Co-Founder & Lead Full-Stack Developer',
    roleUz: 'Asoschii va Bosh Full-Stack Dasturchi',
    department: 'developers',
    image: '/images/team/hojiakbar.jpg',
    bio: 'Passionate full-stack developer with expertise in modern web technologies. Specialized in building scalable, high-performance applications. Leading technical architecture and development strategies at DualForge Labs.',
    bioUz: 'Zamonaviy web texnologiyalarda tajribaga ega ishtiyoqli full-stack dasturchi. Miqyoslanadigan va yuqori samarali ilovalar yaratishda mutaxassis. DualForge Labs\'da texnik arxitektura va dasturlash strategiyalarini boshqaradi.',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Docker',
      'Kubernetes',
      'GraphQL',
      'REST API',
      'Microservices',
      'System Design'
    ],
    experience: '5+ years',
    experienceUz: '5+ yil',
    education: 'Computer Science, TUIT',
    social: {
      github: 'https://github.com/hojiakbar',
      linkedin: 'https://linkedin.com/in/hojiakbar-saidrasulov',
      telegram: 'https://t.me/hojiakbar_dev',
      portfolio: 'https://hojiakbar.dev'
    },
    achievements: [
      '20+ muvaffaqiyatli loyihalar',
      '100K+ foydalanuvchilarga xizmat ko\'rsatadigan tizimlar',
      'Enterprise-level arxitektura dizayni',
      'Team leadership va mentorship'
    ],
    specialization: [
      'Full-Stack Development',
      'System Architecture',
      'Cloud Infrastructure',
      'Performance Optimization',
      'Technical Leadership'
    ],
    projectsCount: 28
  },
  {
    id: '2',
    slug: 'anvar-haydarov',
    name: 'Anvar Haydarov',
    nameUz: 'Anvar Xaydarov',
    role: 'Co-Founder & Senior Full-Stack Developer',
    roleUz: 'Asoschii va Katta Full-Stack Dasturchi',
    department: 'developers',
    image: '/images/team/anvar.jpg',
    bio: 'Innovative full-stack developer with a keen eye for design and user experience. Expert in creating seamless, intuitive applications. Drives product development and client relationships at DualForge Labs.',
    bioUz: 'Dizayn va foydalanuvchi tajribasiga katta e\'tibor beradigan innovatsion full-stack dasturchi. Oson va tushunarli ilovalar yaratishda ekspert. DualForge Labs\'da mahsulot ishlab chiqish va mijozlar bilan munosabatlarni boshqaradi.',
    skills: [
      'React',
      'Vue.js',
      'TypeScript',
      'Node.js',
      'Express',
      'NestJS',
      'MySQL',
      'Redis',
      'Firebase',
      'TailwindCSS',
      'UI/UX Design',
      'REST API',
      'WebSocket',
      'DevOps'
    ],
    experience: '5+ years',
    experienceUz: '5+ yil',
    education: 'Software Engineering, TATU',
    social: {
      github: 'https://github.com/anvar',
      linkedin: 'https://linkedin.com/in/anvar-haydarov',
      telegram: 'https://t.me/anvar_dev',
      portfolio: 'https://anvar.dev'
    },
    achievements: [
      '25+ yuqori sifatli loyihalar',
      'Award-winning UI/UX implementations',
      'Client satisfaction rate: 98%',
      'Active open-source contributor'
    ],
    specialization: [
      'Full-Stack Development',
      'Frontend Architecture',
      'UI/UX Implementation',
      'API Design',
      'Client Communication'
    ],
    projectsCount: 32
  }
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find(m => m.slug === slug);
}

export function getTeamMembersByDepartment(department: TeamMember['department']): TeamMember[] {
  return teamMembers.filter(m => m.department === department);
}

export function getAllDevelopers(): TeamMember[] {
  return teamMembers.filter(m => m.department === 'developers');
}

export const companyStats = {
  founded: 2019,
  teamSize: 2,
  projectsCompleted: 60,
  activeClients: 35,
  technologies: 20,
  satisfaction: 98,
  countries: 5
};