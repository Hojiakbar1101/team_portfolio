// lib/data/projects.ts

import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'e-commerce-platform',
    title: 'Enterprise E-Commerce Platform',
    description: 'Zamonaviy texnologiyalar bilan qurilgan katta hajmli elektron savdo platformasi',
    fullDescription: 'To\'liq moslashuvchan va yuqori yuklamaga bardoshli elektron savdo platformasi. Mikroservis arxitekturasi, real-time inventarizatsiya, AI tavsiyalar tizimi va murakkab analitika dashboard.',
    category: 'ecommerce',
    image: '/images/projects/ecommerce-1.jpg',
    images: [
      '/images/projects/ecommerce-1.jpg',
      '/images/projects/ecommerce-2.jpg',
      '/images/projects/ecommerce-3.jpg'
    ],
    technologies: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
    features: [
      'Real-time inventarizatsiya boshqaruvi',
      'AI-powered mahsulot tavsiyalari',
      'Multi-vendor marketplace',
      'Murakkab analitika dashboard',
      'Mobile-responsive dizayn',
      'SEO optimizatsiya'
    ],
    client: 'TechMart UZ',
    year: 2024,
    duration: '8 oy',
    teamSize: 6,
    url: 'https://techmart.uz',
    stats: {
      users: '50,000+',
      performance: '98/100',
      rating: '4.9/5'
    },
    challenges: [
      'Yuqori trafik bilan ishlash (100K+ kunlik foydalanuvchilar)',
      'Real-time inventarizatsiya sinxronizatsiyasi',
      'Murakkab to\'lov tizimlari integratsiyasi'
    ],
    solutions: [
      'Redis caching va CDN optimizatsiyasi',
      'WebSocket orqali real-time yangilanishlar',
      'Mikroservis arxitekturasi bilan miqyoslanish'
    ],
    results: [
      '300% savdo hajmi o\'sishi',
      '45% foydalanuvchi konversiyasi oshishi',
      '2 soniyadan kam sahifa yuklash vaqti'
    ]
  },
  {
    id: '2',
    slug: 'fintech-mobile-app',
    title: 'FinTech Mobile Banking',
    description: 'Xavfsiz va zamonaviy mobil banking ilovasi',
    fullDescription: 'Bank xizmatlari uchun to\'liq funksional mobil ilova. Biometrik autentifikatsiya, real-time tranzaksiyalar, investitsiya portfeli boshqaruvi va sun\'iy intellekt bilan moliyaviy maslahat.',
    category: 'mobile',
    image: '/images/projects/fintech-1.jpg',
    images: [
      '/images/projects/fintech-1.jpg',
      '/images/projects/fintech-2.jpg',
      '/images/projects/fintech-3.jpg'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Plaid API'],
    features: [
      'Biometrik autentifikatsiya (Face ID, Touch ID)',
      'P2P to\'lovlar va transfers',
      'QR kod orqali to\'lovlar',
      'Investitsiya portfeli tracking',
      'AI moliyaviy maslahatchi',
      'Offline rejim qo\'llab-quvvatlashi'
    ],
    client: 'UzFinance',
    year: 2023,
    duration: '10 oy',
    teamSize: 8,
    stats: {
      users: '100,000+',
      performance: '4.8/5',
      rating: '4.7/5'
    },
    challenges: [
      'Bank darajasidagi xavfsizlik talablari',
      'Offline funksionallik',
      'Turli to\'lov tizimlari integratsiyasi'
    ],
    solutions: [
      'End-to-end enkriptsiya',
      'Local database sync strategiyasi',
      'Unified payment gateway abstraction'
    ],
    results: [
      '100K+ faol foydalanuvchi',
      '99.9% uptime',
      'Google Play/App Store 4.8 reyting'
    ]
  },
  {
    id: '3',
    slug: 'education-platform',
    title: 'Interactive Learning Platform',
    description: 'Zamonaviy online ta\'lim platformasi',
    fullDescription: 'Comprehensive online ta\'lim platformasi video darslar, interaktiv topshiriqlar, real-time muhokamalar va AI progress tracking bilan.',
    category: 'web',
    image: '/images/projects/education-1.jpg',
    images: [
      '/images/projects/education-1.jpg',
      '/images/projects/education-2.jpg',
      '/images/projects/education-3.jpg'
    ],
    technologies: ['Next.js', 'Django', 'PostgreSQL', 'WebRTC', 'AWS S3', 'TensorFlow'],
    features: [
      'Live video darslar (WebRTC)',
      'Interaktiv kod muharriri',
      'AI progress tracking',
      'Gamification tizimi',
      'Sertifikatlar va badges',
      'Multi-language qo\'llab-quvvatlash'
    ],
    client: 'EduTech Academy',
    year: 2024,
    duration: '12 oy',
    teamSize: 10,
    url: 'https://edutech.uz',
    stats: {
      users: '75,000+',
      performance: '95/100',
      rating: '4.9/5'
    },
    challenges: [
      'Real-time video streaming optimizatsiyasi',
      'Interaktiv kod execution xavfsizligi',
      'Katta hajmli media saqlash'
    ],
    solutions: [
      'WebRTC peer-to-peer optimizatsiya',
      'Docker containerization',
      'AWS S3 va CloudFront CDN'
    ],
    results: [
      '75K+ talaba',
      '500+ kurslar',
      '90% kurs tugallanish ko\'rsatkichi'
    ]
  },
  {
    id: '4',
    slug: 'restaurant-booking',
    title: 'Restaurant Reservation System',
    description: 'Real-time restoran bronlash tizimi',
    fullDescription: 'To\'liq funksional restoran bronlash va boshqarish tizimi. Real-time stol mavjudligi, menyu boshqaruvi, buyurtma tracking va mijozlar uchun loyalty dasturi.',
    category: 'web',
    image: '/images/projects/restaurant-1.jpg',
    images: [
      '/images/projects/restaurant-1.jpg',
      '/images/projects/restaurant-2.jpg'
    ],
    technologies: ['React', 'Node.js', 'MySQL', 'Socket.io', 'Stripe'],
    features: [
      'Real-time stol bronlash',
      'Digital menyu boshqaruvi',
      'QR kod menyu',
      'Online buyurtma va to\'lov',
      'Mijozlar loyalty dasturi',
      'Staff management dashboard'
    ],
    client: 'Premium Restaurants Chain',
    year: 2023,
    duration: '6 oy',
    teamSize: 5,
    url: 'https://premiumrest.uz',
    stats: {
      users: '25,000+',
      performance: '96/100',
      rating: '4.8/5'
    },
    results: [
      '40% bronlash samaradorligi oshishi',
      '25K+ faol foydalanuvchi',
      '4.8/5 mijozlar reytingi'
    ]
  },
  {
    id: '5',
    slug: 'healthcare-management',
    title: 'Healthcare Management System',
    description: 'Tibbiy muassasalar uchun boshqaruv tizimi',
    fullDescription: 'Hospital va klinikalar uchun kompleks boshqaruv tizimi. Bemor ma\'lumotlari, uchrashuvlar, tibbiy tarix, retseptlar va billing integratsiyasi.',
    category: 'web',
    image: '/images/projects/healthcare-1.jpg',
    images: [
      '/images/projects/healthcare-1.jpg',
      '/images/projects/healthcare-2.jpg'
    ],
    technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'Redis', 'HIPAA Compliance'],
    features: [
      'Bemor ma\'lumotlari boshqaruvi (EMR)',
      'Uchrashuvlar scheduling',
      'E-prescription tizimi',
      'Billing va insurance',
      'Lab results tracking',
      'HIPAA compliant xavfsizlik'
    ],
    client: 'MedCenter Network',
    year: 2024,
    duration: '14 oy',
    teamSize: 12,
    stats: {
      users: '15,000+',
      performance: '97/100',
      rating: '4.9/5'
    },
    results: [
      '60% ish jarayoni samaradorligi',
      '15K+ faol foydalanuvchi',
      'HIPAA sertifikatlangan'
    ]
  },
  {
    id: '6',
    slug: 'real-estate-platform',
    title: 'Real Estate Marketplace',
    description: 'Ko\'chmas mulk savdo platformasi',
    fullDescription: 'Uy-joy sotish va ijaraga berish uchun zamonaviy platforma. Virtual turlar, mortgage kalkulyator, AI narx tahlili va agent dashboard.',
    category: 'web',
    image: '/images/projects/realestate-1.jpg',
    images: [
      '/images/projects/realestate-1.jpg',
      '/images/projects/realestate-2.jpg'
    ],
    technologies: ['Next.js', 'Python', 'MongoDB', 'Three.js', 'Mapbox'],
    features: [
      '3D virtual turlar',
      'AI narx taxminlari',
      'Mortgage kalkulyator',
      'Interaktiv xaritalar',
      'Agent CRM dashboard',
      'Document management'
    ],
    client: 'ProRealty Group',
    year: 2023,
    duration: '9 oy',
    teamSize: 7,
    url: 'https://prorealty.uz',
    stats: {
      users: '40,000+',
      performance: '94/100',
      rating: '4.7/5'
    },
    results: [
      '40K+ faol foydalanuvchi',
      '5000+ listing',
      '35% konversiya o\'sishi'
    ]
  },
  {
    id: '7',
    slug: 'logistics-tracking',
    title: 'Logistics Tracking System',
    description: 'Real-time yuk tashish tracking tizimi',
    fullDescription: 'Transport kompaniyalari uchun kompleks tracking va boshqarish tizimi. GPS monitoring, marshrut optimizatsiyasi, delivery tracking.',
    category: 'web',
    image: '/images/projects/logistics-1.jpg',
    images: [
      '/images/projects/logistics-1.jpg',
      '/images/projects/logistics-2.jpg'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Google Maps API'],
    features: [
      'Real-time GPS tracking',
      'Marshrut optimizatsiyasi',
      'Delivery scheduling',
      'Fleet management',
      'Analytics dashboard',
      'Mobile driver app'
    ],
    client: 'FastLogistics',
    year: 2024,
    duration: '7 oy',
    teamSize: 6,
    stats: {
      users: '10,000+',
      performance: '96/100',
      rating: '4.8/5'
    },
    results: [
      '30% yonilg\'i xarajatlari kamaytirish',
      '50% delivery vaqt samaradorligi',
      '10K+ faol foydalanuvchi'
    ]
  },
  {
    id: '8',
    slug: 'social-media-app',
    title: 'Social Networking Platform',
    description: 'Zamonaviy ijtimoiy tarmoq platformasi',
    fullDescription: 'Full-featured ijtimoiy tarmoq real-time messaging, stories, video content va AI content moderation bilan.',
    category: 'mobile',
    image: '/images/projects/social-1.jpg',
    images: [
      '/images/projects/social-1.jpg',
      '/images/projects/social-2.jpg'
    ],
    technologies: ['React Native', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS'],
    features: [
      'Real-time messaging',
      'Stories funksiyasi',
      'Video streaming',
      'AI content moderation',
      'Advanced privacy controls',
      'Groups va communities'
    ],
    year: 2023,
    duration: '18 oy',
    teamSize: 15,
    stats: {
      users: '200,000+',
      performance: '4.9/5',
      rating: '4.6/5'
    },
    results: [
      '200K+ faol foydalanuvchi',
      '1M+ daily messages',
      '4.6/5 app store reyting'
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(p => p.category === category);
}

export function getFeaturedProjects(count: number = 6): Project[] {
  return projects.slice(0, count);
}

export function getProjectsByTechnology(tech: string): Project[] {
  return projects.filter(p => 
    p.technologies.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  );
}