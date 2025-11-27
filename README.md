<div align="center">

# **DUALFORGE LABS**

### *Where Innovation Meets Excellence*

---

**Modern Web Solutions | Enterprise Architecture | Cutting-Edge Technology**

---

</div>

> A comprehensive, modern web platform built with Next.js 14, featuring advanced architecture and seamless Telegram integration for client communication.

---

## Architecture Overview

This is a production-ready [Next.js](https://nextjs.org) application, initialized with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and enhanced with enterprise-grade structure and functionality.

---

## Quick Start

### Development Environment

Execute the development server using your preferred package manager:

```bash
npm run dev
# alternatively
yarn dev
# or
pnpm dev
# or
bun dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the application in your browser.

The entry point is `app/page.tsx` with hot-reload capabilities for instant feedback during development.

### Font Optimization

This project leverages [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font) — Vercel's proprietary font family, ensuring superior typography and performance.

---

## Project Structure

### Core Directories

#### `/app` - Saytning Barcha Sahifalari

**Asosiy Fayllar**
- `layout.tsx` — Saytning umumiy tuzilishi (Navbar, Footer, SEO ma'lumotlari)
- `page.tsx` — Bosh sahifa (Hero bo'limi, statistika, tanlangan loyihalar, xizmatlar)
- `globals.css` — Umumiy dizayn stillari (Tailwind konfiguratsiyasi, maxsus uslublar)

**Biz Haqimizda Bo'limi** `/app/about/`
- `page.tsx` — Kompaniya haqida umumiy ma'lumot
- `history/page.tsx` — Jamoa tarixi va kompaniya qanday boshlanganligi
- `mission/page.tsx` — Missiyamiz, qadriyatlarimiz, maqsadlarimiz
- `achievements/page.tsx` — Yutuqlar, sertifikatlar, mukofotlar

**Xizmatlar Bo'limi** `/app/services/`
- `page.tsx` — Barcha xizmatlar katalogi
- `web-development/page.tsx` — Web dasturlash xizmatlari va texnik tavsifi
- `mobile-apps/page.tsx` — Mobil ilovalar yaratish xizmatlari
- `ui-ux-design/page.tsx` — Dizayn va foydalanuvchi tajribasi yechimlari
- `consulting/page.tsx` — Strategik konsalting xizmatlari
- `maintenance/page.tsx` — Texnik qo'llab-quvvatlash va xizmat ko'rsatish

**Loyihalar Bo'limi** `/app/projects/`
- `page.tsx` — Loyihalar portfoliosi (grid ko'rinish)
- `[slug]/page.tsx` — Alohida loyiha batafsil ma'lumoti (dinamik marshrut)
- `categories/web/page.tsx` — Web dasturlash loyihalari
- `categories/mobile/page.tsx` — Mobil ilovalar ko'rgazmasi
- `categories/ecommerce/page.tsx` — Elektron savdo yechimlari
- `categories/landing/page.tsx` — Landing page dizaynlari
- `case-studies/page.tsx` — Batafsil loyiha o'rganishlari (case study)

**Jamoa Bo'limi** `/app/team/`
- `page.tsx` — To'liq jamoa a'zolari ro'yxati
- `[member]/page.tsx` — Alohida jamoa a'zosi profili (dinamik marshrut)
- `developers/page.tsx` — Dasturchilar jamoasi
- `designers/page.tsx` — Dizaynerlar jamoasi
- `culture/page.tsx` — Kompaniya madaniyati va ish muhiti

**Texnologiyalar Bo'limi** `/app/technologies/`
- `page.tsx` — Texnologiyalar to'plami umumiy ko'rinishi
- `frontend/page.tsx` — Frontend texnologiyalar (React, Next.js ekotizimi)
- `backend/page.tsx` — Backend stack (Node.js, Python, ma'lumotlar bazalari)
- `tools/page.tsx` — Dasturlash vositalari va DevOps infratuzilmasi
- `learning/page.tsx` — Yangi o'rganilayotgan texnologiyalar

**Ish Jarayoni Bo'limi** `/app/process/`
- `page.tsx` — To'liq ish oqimi tavsifi
- `planning/page.tsx` — Loyihani rejalashtirish metodologiyasi
- `development/page.tsx` — Dasturlash hayot sikli va amaliyotlar
- `testing/page.tsx` — Sifat nazorati va test protokollari
- `deployment/page.tsx` — Deploy strategiyalari va CI/CD

**Narxlar Bo'limi** `/app/pricing/`
- `page.tsx` — Xizmat paketlari va narx darajalari
- `calculator/page.tsx` — Interaktiv loyiha narxi kalkulyatori

**Blog Bo'limi** `/app/blog/`
- `page.tsx` — Blog postlar arxivi
- `[slug]/page.tsx` — Alohida blog maqola (dinamik marshrut)
- `categories/tutorials/page.tsx` — Texnik qo'llanmalar
- `categories/news/page.tsx` — Sanoat yangiliklari va yangiliklarni
- `categories/tips/page.tsx` — Professional maslahatlar va eng yaxshi amaliyotlar

**Resurslar Bo'limi** `/app/resources/`
- `page.tsx` — Resurslar markazi asosiy sahifasi
- `templates/page.tsx` — Bepul yuklab olinadigan shablonlar
- `tools/page.tsx` — Tanlangan dasturlash vositalari
- `guides/page.tsx` — Texnik hujjatlar va qo'llanmalar

**Bog'lanish Bo'limi** `/app/contact/`
- `page.tsx` — Telegram bot integratsiyasi bilan aloqa sahifasi
- `quote/page.tsx` — Loyiha narxini so'rash formasi
- `faq/page.tsx` — Ko'p so'raladigan savollar

**Karyera Bo'limi** `/app/careers/`
- `page.tsx` — Ish imkoniyatlari umumiy ko'rinishi
- `openings/page.tsx` — Hozirgi ochiq vakansiyalar
- `internship/page.tsx` — Amaliyot dasturi tafsilotlari

**Huquqiy Bo'lim** `/app/legal/`
- `privacy/page.tsx` — Maxfiylik siyosati hujjatlari
- `terms/page.tsx` — Xizmat ko'rsatish shartlari shartnomasi

---

#### `/components` - Qayta Ishlatiladigan UI Komponentlar

**Layout Komponentlari** `/components/layout/`
- `Navbar.tsx` — Mega menyu bilan asosiy navigatsiya
- `Footer.tsx` — Linklar va ijtimoiy tarmoqlar bilan sayt footeri
- `Sidebar.tsx` — Yig'iladigan yon panel navigatsiyasi
- `Breadcrumbs.tsx` — Ierarxik navigatsiya yo'li (masalan: Bosh sahifa > Loyihalar > Web)

**Bosh Sahifa Komponentlari** `/components/home/`
- `Hero.tsx` — Call-to-action bilan hero bo'limi
- `FeaturedProjects.tsx` — Tanlangan loyihalar karuseli
- `ServicesPreview.tsx` — Xizmatlar taqdimoti kartochkalari
- `Stats.tsx` — Animatsiyali statistika hisoblagichi
- `Testimonials.tsx` — Mijozlar sharhlari slayderi
- `TechStack.tsx` — Texnologiyalar to'plami ko'rgazmasi
- `CTA.tsx` — Strategik call-to-action bo'limlari

**Loyiha Komponentlari** `/components/projects/`
- `ProjectCard.tsx` — Hover effektlari bilan loyiha kartochkasi
- `ProjectGrid.tsx` — Responsive grid layout
- `ProjectFilter.tsx` — Kategoriya va texnologiya filtrlash
- `ProjectDetail.tsx` — Batafsil loyiha ma'lumotlarini ko'rsatish
- `ProjectGallery.tsx` — Lightbox bilan rasm galereyasi

**Jamoa Komponentlari** `/components/team/`
- `TeamCard.tsx` — Jamoa a'zosi kartochkasi komponenti
- `TeamGrid.tsx` — Jamoa ro'yxati grid layout
- `MemberProfile.tsx` — Batafsil a'zo profili ko'rinishi
- `SkillsBadge.tsx` — Ko'nikma va tajriba belgilari

**Xizmat Komponentlari** `/components/services/`
- `ServiceCard.tsx` — Xizmat taklifi kartochkasi
- `ServiceDetail.tsx` — To'liq xizmat tafsilotlari
- `ProcessTimeline.tsx` — Loyiha ish oqimi timeline
- `PricingCard.tsx` — Narx darajasini taqqoslash kartochkalari

**Blog Komponentlari** `/components/blog/`
- `BlogCard.tsx` — Blog post oldindan ko'rish kartochkasi
- `BlogGrid.tsx` — Blog arxivi grid layout
- `BlogContent.tsx` — Markdown kontentni render qilish

**Bog'lanish Komponentlari** `/components/contact/`
- `ContactForm.tsx` — Telegram-integratsiyalangan aloqa formasi
- `ContactInfo.tsx` — Kontakt ma'lumotlarini ko'rsatish
- `Map.tsx` — Interaktiv joylashuv xaritasi

**Universal UI Komponentlar** `/components/ui/`
- `Button.tsx` — Ko'p variantli tugma komponenti
- `Card.tsx` — Moslashuvchan kartochka konteyneri
- `Modal.tsx` — Modal dialog tizimi
- `Tabs.tsx` — Tab interfeys komponenti
- `Accordion.tsx` — Yig'iladigan kontent bo'limlari
- `ScrollProgress.tsx` — Sahifa scroll progressi indikatori
- `BackToTop.tsx` — Yuqoriga scroll funksiyasi
- `Loading.tsx` — Yuklash holatlari va animatsiyalar

---

#### `/lib` - Biznes Logika va Ma'lumotlar Qatlami

**Telegram Integratsiyasi** `/lib/`
- `telegram.ts` — Telegram Bot API integratsiyasi (xabar yuborish, forma yuborishlar)

**Ma'lumotlar Boshqaruvi** `/lib/data/`
- `projects.ts` — Loyihalar portfoliosi ma'lumotlar strukturasi
- `team.ts` — Jamoa a'zolari ma'lumotlar bazasi
- `services.ts` — Xizmatlar takliflari katalogi
- `blog.ts` — Blog kontent boshqaruvi
- `testimonials.ts` — Mijozlar sharhlari to'plami

**Yordamchi Funksiyalar** `/lib/`
- `utils.ts` — Yordamchi funksiyalar (sana formatlash, slug generatsiyasi, className utilities)

---

#### `/types` - TypeScript Ta'riflari

- `index.ts` — Markazlashtirilgan type ta'riflari va interfacelar (Project, TeamMember, Service, BlogPost va boshqalar)

---

#### `/styles` - Qo'shimcha Stillar

- `animations.css` — Maxsus CSS animatsiyalar va o'tishlar

---

#### `/public` - Statik Fayllar

**Rasmlar** `/public/images/`
- `team/` — Jamoa a'zolari fotosuratlari
- `projects/` — Loyihalar screenshot va mockuplar
- `blog/` — Blog post asosiy rasmlari
- `logos/` — Kompaniya va texnologiya logotiplari

**Ikonlar** `/public/icons/`
- Favicon va ilova ikonlari

---

### Konfiguratsiya Fayllari

- `tsconfig.json` — TypeScript kompilyator konfiguratsiyasi
- `next.config.js` — Next.js framework konfiguratsiyasi
- `tailwind.config.js` — Tailwind CSS sozlanishi
- `package.json` — Loyiha bog'liqliklari va skriptlar

---

## Development Workflow

### Amalga Oshirish Bosqichlari

**1-Bosqich: Poydevor**
1. TypeScript konfiguratsiyasi (`tsconfig.json`)
2. Global stillarni sozlash (`app/globals.css`)
3. Type ta'riflari (`types/index.ts`)
4. Yordamchi funksiyalar (`lib/utils.ts`)

**2-Bosqich: Layout Tizimi**
1. Navigatsiya komponenti (`components/layout/Navbar.tsx`)
2. Footer komponenti (`components/layout/Footer.tsx`)
3. Breadcrumb navigatsiya (`components/layout/Breadcrumbs.tsx`)
4. Root layout (`app/layout.tsx`)

**3-Bosqich: UI Komponentlar Kutubxonasi**
1. Button komponenti (`components/ui/Button.tsx`)
2. Card komponenti (`components/ui/Card.tsx`)
3. Yuklash holatlari (`components/ui/Loading.tsx`)

**4-Bosqich: Ma'lumotlar Qatlami**
1. Loyiha ma'lumotlar strukturasi (`lib/data/projects.ts`)
2. Jamoa ma'lumotlari (`lib/data/team.ts`)
3. Xizmatlar katalogi (`lib/data/services.ts`)

**5-Bosqich: Bosh Sahifani Joriy Qilish**
1. Hero bo'limi (`components/home/Hero.tsx`)
2. Statistika ko'rinishi (`components/home/Stats.tsx`)
3. Tanlangan loyihalar (`components/home/FeaturedProjects.tsx`)
4. Bosh sahifa integratsiyasi (`app/page.tsx`)

**6-Bosqich: Kontent Sahifalari**
- Loyihalar, Jamoa, Xizmatlar va qo'shimcha bo'limlar

**7-Bosqich: Telegram Integratsiyasi**
1. Telegram API sozlash (`lib/telegram.ts`)
2. Aloqa formasi (`components/contact/ContactForm.tsx`)
3. Aloqa sahifasi (`app/contact/page.tsx`)

---

## Key Features

### Technical Capabilities
- **Server-Side Rendering (SSR)** for optimal SEO and performance
- **Static Site Generation (SSG)** for content pages
- **Dynamic Routing** for scalable content management
- **API Routes** for backend functionality
- **Image Optimization** via Next.js Image component
- **Font Optimization** with automatic subsetting
- **TypeScript** for type-safe development
- **Tailwind CSS** for rapid, consistent styling

### Business Features
- **Portfolio Management** with filtering and categorization
- **Team Profiles** with skills and expertise showcase
- **Service Catalog** with detailed offerings
- **Blog Platform** with markdown support
- **Pricing Calculator** for project estimates
- **Telegram Integration** for instant client communication
- **Contact Forms** with bot notification system
- **Resource Center** with downloadable content

---

## Learning Resources

### Next.js Documentation
- [Official Next.js Documentation](https://nextjs.org/docs) — Comprehensive feature reference and API documentation
- [Next.js Tutorial](https://nextjs.org/learn) — Interactive learning path for framework mastery

### Community & Contribution
Explore the [Next.js GitHub Repository](https://github.com/vercel/next.js) — contributions, feedback, and discussions are encouraged.

---

## Deployment

### Recommended Platform: Vercel

The optimal deployment solution is the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) — created by the Next.js development team for seamless integration.

#### Deployment Features
- **Zero-Configuration Deployment** — automatic optimization and scaling
- **Global CDN** — worldwide content delivery
- **Automatic HTTPS** — SSL certificates included
- **Preview Deployments** — every git push generates a preview URL
- **Analytics** — performance monitoring and insights

### Alternative Deployment Options
- **Self-Hosted** — Node.js server deployment
- **Docker** — containerized deployment
- **Static Export** — for static hosting platforms

Consult the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying) for comprehensive deployment strategies.

---

## Environment Configuration

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

---

## Performance Optimization

This project implements industry best practices:
- **Code Splitting** — automatic route-based splitting
- **Lazy Loading** — component-level code splitting
- **Image Optimization** — automatic WebP conversion and responsive images
- **Font Optimization** — subsetting and preloading
- **CSS Optimization** — automatic purging of unused styles
- **Caching Strategy** — intelligent cache headers

---

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

---

<div align="center">

## **DUALFORGE LABS**

*Innovation • Excellence • Performance*

---

**Built with precision. Deployed with confidence. Maintained with excellence.**

---

</div>