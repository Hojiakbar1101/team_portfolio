// lib/data/services.ts

import { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    slug: 'web-development',
    title: 'Web Development',
    titleUz: 'Web Dasturlash',
    shortDescription: 'Custom web applications built with cutting-edge technologies',
    shortDescriptionUz: 'Zamonaviy texnologiyalar bilan maxsus web ilovalar',
    fullDescription: 'We create powerful, scalable web applications using the latest technologies. From simple landing pages to complex enterprise systems, we deliver solutions that drive business growth.',
    fullDescriptionUz: 'Biz eng so\'ngi texnologiyalardan foydalangan holda kuchli va miqyoslanadigan web ilovalar yaratamiz. Oddiy landing sahifalardan tortib murakkab korporativ tizimlargacha, biznes o\'sishini ta\'minlaydigan yechimlarni taqdim etamiz.',
    icon: '💻',
    image: '/images/services/web-dev.jpg',
    features: [
      'Full-stack development (Frontend + Backend)',
      'Responsive & mobile-first design',
      'Progressive Web Apps (PWA)',
      'E-commerce platforms',
      'Content Management Systems',
      'API development & integration',
      'Database design & optimization',
      'Cloud deployment & DevOps'
    ],
    featuresUz: [
      'Full-stack dasturlash (Frontend + Backend)',
      'Responsive va mobile-first dizayn',
      'Progressive Web Apps (PWA)',
      'Elektron savdo platformalari',
      'Kontent boshqaruv tizimlari',
      'API ishlab chiqish va integratsiya',
      'Ma\'lumotlar bazasi dizayni va optimallashtirish',
      'Cloud deployment va DevOps'
    ],
    technologies: [
      'Next.js', 'React', 'Vue.js', 'TypeScript', 
      'Node.js', 'Python', 'Django', 'Laravel',
      'PostgreSQL', 'MongoDB', 'Redis', 'AWS'
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Planning',
        titleUz: 'Tahlil va Rejalashtirish',
        description: 'Understanding your business needs and defining project scope',
        descriptionUz: 'Biznes ehtiyojlarini tushunish va loyiha hajmini belgilash'
      },
      {
        step: 2,
        title: 'Design & Prototyping',
        titleUz: 'Dizayn va Prototiplashtirish',
        description: 'Creating wireframes, mockups, and interactive prototypes',
        descriptionUz: 'Wireframe, mockup va interaktiv prototiplar yaratish'
      },
      {
        step: 3,
        title: 'Development',
        titleUz: 'Dasturlash',
        description: 'Building your application with clean, maintainable code',
        descriptionUz: 'Toza va saqlanishi oson kod bilan ilova yaratish'
      },
      {
        step: 4,
        title: 'Testing & QA',
        titleUz: 'Test va Sifat Nazorati',
        description: 'Rigorous testing to ensure quality and performance',
        descriptionUz: 'Sifat va samaradorlikni ta\'minlash uchun qat\'iy test'
      },
      {
        step: 5,
        title: 'Deployment & Launch',
        titleUz: 'Joylashtirish va Ishga Tushirish',
        description: 'Deploying to production with zero downtime',
        descriptionUz: 'Uzilishsiz production muhitga joylashtirish'
      },
      {
        step: 6,
        title: 'Support & Maintenance',
        titleUz: 'Qo\'llab-quvvatlash va Xizmat',
        description: 'Ongoing support, updates, and optimization',
        descriptionUz: 'Doimiy qo\'llab-quvvatlash, yangilanishlar va optimallashtirish'
      }
    ],
    pricing: {
      starting: '$5,000',
      duration: '2-4 months'
    },
    benefits: [
      'Scalable architecture for future growth',
      'SEO-optimized for better visibility',
      'Fast loading times and performance',
      'Security best practices implemented',
      'Cross-browser compatibility',
      'Comprehensive documentation'
    ],
    benefitsUz: [
      'Kelajakdagi o\'sish uchun miqyoslanadigan arxitektura',
      'Yaxshi ko\'rinish uchun SEO-optimallashtirilgan',
      'Tez yuklash va yuqori samaradorlik',
      'Xavfsizlik eng yaxshi amaliyotlari',
      'Barcha brauzerlar bilan mos',
      'To\'liq hujjatlashtirish'
    ]
  },
  {
    id: '2',
    slug: 'mobile-apps',
    title: 'Mobile App Development',
    titleUz: 'Mobil Ilovalar Dasturlash',
    shortDescription: 'Native and cross-platform mobile applications',
    shortDescriptionUz: 'Native va cross-platform mobil ilovalar',
    fullDescription: 'We develop high-quality mobile applications for iOS and Android. Whether you need a native app or cross-platform solution, we deliver exceptional user experiences.',
    fullDescriptionUz: 'iOS va Android uchun yuqori sifatli mobil ilovalar ishlab chiqamiz. Native yoki cross-platform yechim kerakmi, biz ajoyib foydalanuvchi tajribasini taqdim etamiz.',
    icon: '📱',
    image: '/images/services/mobile-dev.jpg',
    features: [
      'iOS & Android development',
      'Cross-platform with React Native',
      'Native performance optimization',
      'Offline functionality',
      'Push notifications',
      'In-app purchases',
      'Social media integration',
      'Analytics & crash reporting'
    ],
    featuresUz: [
      'iOS va Android dasturlash',
      'React Native bilan cross-platform',
      'Native samaradorlik optimallashtirish',
      'Offline funksionallik',
      'Push bildirishnomalar',
      'Ilova ichida xaridlar',
      'Ijtimoiy tarmoqlar integratsiyasi',
      'Analitika va xato hisobotlari'
    ],
    technologies: [
      'React Native', 'Swift', 'Kotlin', 'Flutter',
      'Firebase', 'Redux', 'GraphQL', 'REST API'
    ],
    process: [
      {
        step: 1,
        title: 'Concept & Strategy',
        titleUz: 'Konsept va Strategiya',
        description: 'Defining app features and user flows',
        descriptionUz: 'Ilova funksiyalari va foydalanuvchi oqimini belgilash'
      },
      {
        step: 2,
        title: 'UI/UX Design',
        titleUz: 'UI/UX Dizayn',
        description: 'Creating intuitive and beautiful interfaces',
        descriptionUz: 'Intuitiv va chiroyli interfeys yaratish'
      },
      {
        step: 3,
        title: 'Development',
        titleUz: 'Dasturlash',
        description: 'Building robust mobile applications',
        descriptionUz: 'Mustahkam mobil ilovalar yaratish'
      },
      {
        step: 4,
        title: 'Testing',
        titleUz: 'Testlash',
        description: 'Device testing and quality assurance',
        descriptionUz: 'Qurilma testlari va sifat nazorati'
      },
      {
        step: 5,
        title: 'Store Submission',
        titleUz: 'Do\'konga Yuborish',
        description: 'Publishing to App Store and Google Play',
        descriptionUz: 'App Store va Google Play\'ga joylashtirish'
      },
      {
        step: 6,
        title: 'Updates & Support',
        titleUz: 'Yangilanishlar va Qo\'llab-quvvatlash',
        description: 'Regular updates and feature additions',
        descriptionUz: 'Muntazam yangilanishlar va yangi funksiyalar'
      }
    ],
    pricing: {
      starting: '$8,000',
      duration: '3-6 months'
    },
    benefits: [
      'Native performance and feel',
      'Offline functionality',
      'Push notifications',
      'App Store optimization',
      'Analytics integration',
      'Continuous updates'
    ],
    benefitsUz: [
      'Native samaradorlik va his',
      'Offline funksionallik',
      'Push bildirishnomalar',
      'App Store optimallashtirish',
      'Analitika integratsiyasi',
      'Doimiy yangilanishlar'
    ]
  },
  {
    id: '3',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    titleUz: 'UI/UX Dizayn',
    shortDescription: 'Beautiful, user-centered design experiences',
    shortDescriptionUz: 'Go\'zal, foydalanuvchi-markazli dizayn tajribalari',
    fullDescription: 'We create stunning, intuitive designs that users love. Our design process focuses on user research, prototyping, and testing to ensure the best possible experience.',
    fullDescriptionUz: 'Biz foydalanuvchilar yaxshi ko\'radigan ajoyib va intuitiv dizaynlar yaratamiz. Dizayn jarayonimiz eng yaxshi tajribani ta\'minlash uchun foydalanuvchi tadqiqoti, prototiplashtirish va testlashga qaratilgan.',
    icon: '🎨',
    image: '/images/services/design.jpg',
    features: [
      'User research & personas',
      'Information architecture',
      'Wireframing & prototyping',
      'Visual design & branding',
      'Interaction design',
      'Usability testing',
      'Design systems',
      'Responsive design'
    ],
    featuresUz: [
      'Foydalanuvchi tadqiqoti va personas',
      'Ma\'lumot arxitekturasi',
      'Wireframing va prototiplashtirish',
      'Vizual dizayn va brending',
      'Interaksiya dizayni',
      'Foydalanish qulayligi testi',
      'Dizayn tizimlari',
      'Responsive dizayn'
    ],
    technologies: [
      'Figma', 'Adobe XD', 'Sketch', 'InVision',
      'Photoshop', 'Illustrator', 'Principle', 'Framer'
    ],
    process: [
      {
        step: 1,
        title: 'Research',
        titleUz: 'Tadqiqot',
        description: 'Understanding users and business goals',
        descriptionUz: 'Foydalanuvchilar va biznes maqsadlarini tushunish'
      },
      {
        step: 2,
        title: 'Wireframing',
        titleUz: 'Wireframing',
        description: 'Creating low-fidelity layouts',
        descriptionUz: 'Past-aniqlikdagi layout yaratish'
      },
      {
        step: 3,
        title: 'Visual Design',
        titleUz: 'Vizual Dizayn',
        description: 'Applying colors, typography, and branding',
        descriptionUz: 'Ranglar, tipografiya va brendingni qo\'llash'
      },
      {
        step: 4,
        title: 'Prototyping',
        titleUz: 'Prototiplashtirish',
        description: 'Building interactive prototypes',
        descriptionUz: 'Interaktiv prototiplar yaratish'
      },
      {
        step: 5,
        title: 'Testing',
        titleUz: 'Testlash',
        description: 'User testing and feedback collection',
        descriptionUz: 'Foydalanuvchi testi va fikr-mulohazalar'
      },
      {
        step: 6,
        title: 'Handoff',
        titleUz: 'Topshirish',
        description: 'Delivering design assets to developers',
        descriptionUz: 'Dizayn materiallarini dasturchilarga topshirish'
      }
    ],
    pricing: {
      starting: '$3,000',
      duration: '2-4 weeks'
    },
    benefits: [
      'Increased user engagement',
      'Higher conversion rates',
      'Reduced development costs',
      'Brand consistency',
      'Competitive advantage',
      'User satisfaction'
    ],
    benefitsUz: [
      'Foydalanuvchilar jalb qilish oshishi',
      'Yuqori konversiya ko\'rsatkichlari',
      'Dasturlash xarajatlari kamaytirish',
      'Brend izchilligi',
      'Raqobat ustunligi',
      'Foydalanuvchi qoniqishi'
    ]
  },
  {
    id: '4',
    slug: 'consulting',
    title: 'Technical Consulting',
    titleUz: 'Texnik Konsalting',
    shortDescription: 'Expert guidance for your technical challenges',
    shortDescriptionUz: 'Texnik muammolaringiz uchun ekspert maslahat',
    fullDescription: 'Our experienced team provides strategic technical consulting to help you make informed decisions about technology, architecture, and development processes.',
    fullDescriptionUz: 'Tajribali jamoamiz texnologiya, arxitektura va dasturlash jarayonlari haqida ongli qarorlar qabul qilishda yordam beradigan strategik texnik konsalting xizmatini taqdim etadi.',
    icon: '💡',
    image: '/images/services/consulting.jpg',
    features: [
      'Technology stack selection',
      'Architecture design & review',
      'Code review & optimization',
      'Performance optimization',
      'Security audits',
      'DevOps & CI/CD setup',
      'Team training & mentorship',
      'Project rescue & recovery'
    ],
    featuresUz: [
      'Texnologiya stack\'ini tanlash',
      'Arxitektura dizayni va ko\'rib chiqish',
      'Kod ko\'rib chiqish va optimallashtirish',
      'Samaradorlik optimallashtirish',
      'Xavfsizlik auditlari',
      'DevOps va CI/CD sozlash',
      'Jamoa o\'qitish va mentorlik',
      'Loyiha qutqarish va tiklash'
    ],
    technologies: [
      'All Modern Stacks',
      'Cloud Platforms (AWS, Azure, GCP)',
      'DevOps Tools',
      'Monitoring & Analytics'
    ],
    process: [
      {
        step: 1,
        title: 'Assessment',
        titleUz: 'Baholash',
        description: 'Analyzing current situation and challenges',
        descriptionUz: 'Hozirgi vaziyat va muammolarni tahlil qilish'
      },
      {
        step: 2,
        title: 'Strategy',
        titleUz: 'Strategiya',
        description: 'Developing actionable recommendations',
        descriptionUz: 'Amaliy tavsiyalar ishlab chiqish'
      },
      {
        step: 3,
        title: 'Implementation',
        titleUz: 'Amalga oshirish',
        description: 'Guiding implementation of solutions',
        descriptionUz: 'Yechimlarni amalga oshirishda yo\'l ko\'rsatish'
      },
      {
        step: 4,
        title: 'Review',
        titleUz: 'Ko\'rib chiqish',
        description: 'Evaluating results and adjusting',
        descriptionUz: 'Natijalarni baholash va sozlash'
      }
    ],
    pricing: {
      starting: '$2,000',
      duration: 'Flexible'
    },
    benefits: [
      'Expert guidance',
      'Cost savings',
      'Risk mitigation',
      'Knowledge transfer',
      'Faster time to market',
      'Better decision making'
    ],
    benefitsUz: [
      'Ekspert maslahat',
      'Xarajatlarni tejash',
      'Xavflarni kamaytirish',
      'Bilim uzatish',
      'Tezroq bozorga chiqish',
      'Yaxshi qarorlar qabul qilish'
    ]
  },
  {
    id: '5',
    slug: 'maintenance',
    title: 'Maintenance & Support',
    titleUz: 'Xizmat va Qo\'llab-quvvatlash',
    shortDescription: 'Ongoing support to keep your systems running',
    shortDescriptionUz: 'Tizimlaringizni ishlab turishda doimiy qo\'llab-quvvatlash',
    fullDescription: 'We provide comprehensive maintenance and support services to ensure your applications remain secure, up-to-date, and performing optimally.',
    fullDescriptionUz: 'Ilovalaringiz xavfsiz, yangi va optimal ishlashini ta\'minlash uchun kompleks xizmat va qo\'llab-quvvatlash xizmatlarini taqdim etamiz.',
    icon: '🔧',
    image: '/images/services/maintenance.jpg',
    features: [
      'Bug fixes & troubleshooting',
      'Security updates & patches',
      'Performance monitoring',
      'Database optimization',
      'Feature enhancements',
      'Backup & disaster recovery',
      '24/7 monitoring',
      'Monthly reports'
    ],
    featuresUz: [
      'Xatolarni tuzatish va nosozliklarni bartaraf etish',
      'Xavfsizlik yangilanishlari va patch\'lar',
      'Samaradorlik monitoringi',
      'Ma\'lumotlar bazasi optimallashtirish',
      'Funksiya yaxshilanishlari',
      'Zaxira va falokatdan tiklash',
      '24/7 monitoring',
      'Oylik hisobotlar'
    ],
    technologies: [
      'Monitoring Tools',
      'CI/CD Pipelines',
      'Cloud Infrastructure',
      'Security Tools'
    ],
    process: [
      {
        step: 1,
        title: 'Monitoring',
        titleUz: 'Monitoring',
        description: 'Continuous system monitoring',
        descriptionUz: 'Doimiy tizim monitoringi'
      },
      {
        step: 2,
        title: 'Updates',
        titleUz: 'Yangilanishlar',
        description: 'Regular updates and patches',
        descriptionUz: 'Muntazam yangilanishlar va patch\'lar'
      },
      {
        step: 3,
        title: 'Optimization',
        titleUz: 'Optimallashtirish',
        description: 'Performance improvements',
        descriptionUz: 'Samaradorlik yaxshilanishlari'
      },
      {
        step: 4,
        title: 'Reporting',
        titleUz: 'Hisobot',
        description: 'Monthly performance reports',
        descriptionUz: 'Oylik samaradorlik hisobotlari'
      }
    ],
    pricing: {
      starting: '$500/month',
      duration: 'Monthly subscription'
    },
    benefits: [
      'Peace of mind',
      'Reduced downtime',
      'Better performance',
      'Security compliance',
      'Cost predictability',
      'Expert support'
    ],
    benefitsUz: [
      'Xotirjamlik',
      'Uzilishlar kamaytirish',
      'Yaxshi samaradorlik',
      'Xavfsizlik talablarga muvofiqlik',
      'Xarajatlar aniqlik',
      'Ekspert qo\'llab-quvvatlash'
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}