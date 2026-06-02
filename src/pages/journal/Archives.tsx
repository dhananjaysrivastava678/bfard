// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';
// import { Archive, BookOpen, Calendar } from 'lucide-react';

// const Archives = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />
//       <div className="pt-32 section-padding">
//         <div className="container-custom">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
//               <Archive className="h-4 w-4" />
//               <span>Archives</span>
//             </div>
//             <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//               Archives
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Browse our collection of published volumes and issues of the Bhagyashree International Journal of Social Science.
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             {/* Coming Soon Notice */}
//             <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl border border-blue-100 p-12 md:p-16 text-center mb-10">
//               <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <BookOpen className="h-10 w-10 text-blue-600" />
//               </div>
//               <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800 mb-4">
//                 Archives Coming Soon
//               </h2>
//               <p className="text-slate-600 leading-relaxed max-w-xl mx-auto mb-6">
//                 Our journal archives are currently being compiled and will be available shortly. Published volumes and issues will be accessible here for easy browsing and download.
//               </p>
//               <div className="inline-flex items-center space-x-2 text-blue-600 text-sm font-medium">
//                 <Calendar className="h-4 w-4" />
//                 <span>First issue launching soon</span>
//               </div>
//             </div>

//             {/* Placeholder Volume Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//               {['Volume 1, Issue 1', 'Volume 1, Issue 2', 'Volume 2, Issue 1'].map((vol, i) => (
//                 <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 text-center opacity-40 cursor-not-allowed">
//                   <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                     <BookOpen className="h-5 w-5 text-slate-400" />
//                   </div>
//                   <p className="font-semibold text-slate-600 text-sm">{vol}</p>
//                   <p className="text-xs text-slate-400 mt-1">Upcoming</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Archives;
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';
// import { Archive, BookOpen, User, ExternalLink, FileText, ChevronRight, Calendar } from 'lucide-react';

// const articles = [
//   {
//     id: 1,
//     number: 'BIJSS-2025-001',
//     topic: 'Intelligent Classrooms: Human-AI Collaboration and the Future of Pedagogical Innovation',
//     author: 'Dr. Aftabuddin Ahammad',
//     pageRange: 'pp. 1–18',
//     category: 'Education & Technology',
//     abstract:
//       'This paper explores the transformative potential of artificial intelligence in modern classrooms, focusing on human-AI collaborative models that reshape teaching and learning paradigms.',
//     pdfLink: 'https://drive.google.com/file/d/1pgorw9rB_KAd7L38eOqrgyFrFAqekL8E/view?usp=sharing',
//   },
//   {
//     id: 2,
//     number: 'BIJSS-2025-002',
//     topic: 'Intention Towards Usage of Polythene',
//     author: 'Dr. A. Maria Bharathi',
//     pageRange: 'pp. 19–36',
//     category: 'Social Science',
//     abstract:
//       'An examination of systemic barriers faced by rural communities in accessing digital education, with policy recommendations for bridging socioeconomic gaps in the Indian subcontinent.',
//     pdfLink: 'https://drive.google.com/file/d/1E4jGE7-xwLTCB6GKv9QdcbsQkkITjZd7/view?usp=sharing',
//   },
//   {
//     id: 3,
//     number: 'BIJSS-2025-003',
//     topic: 'The Digital Stylus: Impact of Social Media on Modern Prose',
//     author: 'Pratik Roy',
//     pageRange: 'pp. 37–54',
//     category: 'Political Science',
//     abstract:
//       'This study analyses governance frameworks adopted by South Asian democracies during and after the COVID-19 pandemic, drawing comparative insights on community resilience and institutional capacity.',
//     pdfLink: 'https://drive.google.com/file/d/1MjzUyAZFfH29_KgBoHUTGVSGmtQrkypy/view?usp=sharing',
//   },
//   {
//     id: 4,
//     number: 'BIJSS-2025-004',
//     topic: 'Humanism and Universalism in the Thought of Rabindranath Tagore: A Critical Study',
//     author: 'Dr. Biswajeet Saha',
//     pageRange: 'pp. 55–72',
//     category: 'Economics',
//     abstract:
//       'Through a feminist economic lens, this paper scrutinises the disproportionate impact of platform-based gig work on women workers, highlighting precarious employment and wage disparities.',
//     pdfLink: 'https://drive.google.com/file/d/1bdhVGLu9rooAum26Twfo2NbEJTOCi-cz/view?usp=sharing',
//   },
//   // {
//   //   id: 5,
//   //   number: 'BIJSS-2025-005',
//   //   topic: 'Cultural Identity and Globalisation: Negotiating Heritage in the Digital Age',
//   //   author: 'Dr. Subhash Chandra Roy',
//   //   pageRange: 'pp. 73–90',
//   //   category: 'Cultural Studies',
//   //   abstract:
//   //     'An interdisciplinary inquiry into how globalisation and digital media simultaneously threaten and reinvent cultural identity, with field observations from north-east Indian communities.',
//   //   pdfLink: '#',
//   // },
// ];

// const categoryColors: Record<string, string> = {
//   'Education & Technology': 'bg-blue-50 text-blue-700 border-blue-200',
//   'Social Science': 'bg-emerald-50 text-emerald-700 border-emerald-200',
//   'Political Science': 'bg-violet-50 text-violet-700 border-violet-200',
//   'Economics': 'bg-amber-50 text-amber-700 border-amber-200',
//   'Cultural Studies': 'bg-rose-50 text-rose-700 border-rose-200',
// };

// const Archives = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />

//       {/* ── Hero / Header ── */}
//       <div className="pt-32 pb-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
//         {/* decorative circles */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-700/10 blur-3xl" />
//           <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-blue-500/10 blur-2xl" />
//         </div>

//         <div className="container-custom relative z-10 text-center">
//           <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
//             <Archive className="h-4 w-4" />
//             <span>Journal Archives</span>
//           </div>

//           <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
//             Archives
//           </h1>
//           <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
//             Browse published articles from the{' '}
//             <span className="font-semibold text-white">
//               Bhagyashree International Journal of Social Science
//             </span>
//             , Volume&nbsp;1, Issue&nbsp;1 (2025).
//           </p>

//           {/* Quick stats */}
//           <div className="mt-10 inline-flex items-center gap-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-4">
//             {[
//               { icon: BookOpen, label: 'Articles', value: '5' },
//               { icon: Calendar,  label: 'Year',     value: '2025' },
//               { icon: FileText,  label: 'Volume',   value: '1, Issue 1' },
//             ].map(({ icon: Icon, label, value }) => (
//               <div key={label} className="text-center">
//                 <Icon className="h-5 w-5 text-blue-400 mx-auto mb-1" />
//                 <p className="text-white font-bold text-lg leading-tight">{value}</p>
//                 <p className="text-blue-300 text-xs">{label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── Issue Header Strip ── */}
//       <div className="bg-blue-700 text-white py-4">
//         <div className="container-custom flex flex-wrap items-center justify-between gap-3">
//           <div className="flex items-center gap-3">
//             <BookOpen className="h-5 w-5 text-blue-200" />
//             <span className="font-semibold text-sm md:text-base">
//               Volume 1 &nbsp;·&nbsp; Issue 1 &nbsp;·&nbsp; January 2025
//             </span>
//           </div>
//           <span className="text-blue-200 text-sm">ISSN (Online): XXXX-XXXX</span>
//         </div>
//       </div>

//       {/* ── Article List ── */}
//       <section className="section-padding bg-slate-50">
//         <div className="container-custom max-w-5xl">

//           <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800 mb-10 flex items-center gap-3">
//             <span className="w-1 h-8 bg-blue-600 rounded-full inline-block" />
//             Published Articles
//           </h2>

//           <div className="flex flex-col gap-6">
//             {articles.map((article, idx) => (
//               <article
//                 key={article.id}
//                 className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden"
//               >
//                 {/* coloured left accent bar */}
//                 <div className="flex">
//                   <div className="w-1.5 flex-shrink-0 bg-gradient-to-b from-blue-500 to-blue-700 rounded-l-2xl" />

//                   <div className="flex-1 p-6 md:p-8">
//                     {/* top row: article number + category badge */}
//                     <div className="flex flex-wrap items-center gap-3 mb-4">
//                       {/* Article number badge */}
//                       <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 text-xs font-mono font-semibold px-3 py-1 rounded-full border border-slate-200">
//                         <FileText className="h-3.5 w-3.5 text-blue-500" />
//                         {article.number}
//                       </span>

//                       {/* Category */}
//                       <span className={`inline-flex text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[article.category]}`}>
//                         {article.category}
//                       </span>
//                     </div>

//                     {/* Article title */}
//                     <h3 className="font-playfair text-lg md:text-xl font-bold text-slate-800 leading-snug mb-3 group-hover:text-blue-700 transition-colors">
//                       {article.topic}
//                     </h3>

//                     {/* Abstract */}
//                     <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2">
//                       {article.abstract}
//                     </p>

//                     {/* Meta: author + page range */}
//                     <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm mb-6">
//                       <span className="inline-flex items-center gap-2 text-slate-700 font-medium">
//                         <User className="h-4 w-4 text-blue-500" />
//                         {article.author}
//                       </span>
//                       <span className="inline-flex items-center gap-2 text-slate-500">
//                         <BookOpen className="h-4 w-4 text-slate-400" />
//                         {article.pageRange}
//                       </span>
//                     </div>

//                     {/* CTA buttons */}
//                     <div className="flex flex-wrap items-center gap-3">
//                       <a
//                         href={article.pdfLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm
//                           ${article.pdfLink === '#'
//                             ? 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none'
//                             : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5'
//                           }`}
//                         onClick={article.pdfLink === '#' ? e => e.preventDefault() : undefined}
//                       >
//                         <ExternalLink className="h-4 w-4" />
//                         View Article
//                       </a>

//                       {article.pdfLink === '#' && (
//                         <span className="text-xs text-slate-400 italic">PDF coming soon</span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Index number — decorative right side */}
//                   <div className="hidden md:flex flex-col items-center justify-center w-16 flex-shrink-0 bg-slate-50 border-l border-slate-100">
//                     <span className="text-3xl font-playfair font-bold text-slate-200 select-none leading-none">
//                       {String(idx + 1).padStart(2, '0')}
//                     </span>
//                     <ChevronRight className="h-4 w-4 text-slate-300 mt-2 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* bottom notice */}
//           <div className="mt-12 text-center bg-blue-50 border border-blue-100 rounded-2xl p-8">
//             <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
//               More articles and volumes will be added as the journal continues publication.
//               For submission queries, please visit the{' '}
//               <a href="/journal/author-guidelines" className="text-blue-600 font-medium underline underline-offset-2 hover:text-blue-800">
//                 Author Guidelines
//               </a>{' '}
//               page.
//             </p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Archives;

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Archive,
  BookOpen,
  ExternalLink,
  FileText,
  BookMarked,
  Layers,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   ARTICLE DATA  (4 real published articles)
───────────────────────────────────────────── */
const articles = [
  {
    id: 1,
    number: 'BIJSS-2026-01',
    topic:
      'Humanism and Universalism in the Thought of Rabindranath Tagore: A Critical Study',
    author: 'Dr. Biswajeet Saha',
    pageRange: 'pp. 01-14',
    // category: 'Philosophy & Humanities',
    pdfLink:
      '/articles/BIJSS-2026-01.pdf',
  },
  //second
  {
    id: 2,
    number: 'BIJSS-2026-01',
    topic: 'Intention Towards Usage of Polythene',
    author: 'Dr. A. Maria Bharathi',
    pageRange: 'pp. 15–23',
    // category: 'Environmental Studies',
    pdfLink:
      '/articles/BIJSS-2026-02.pdf',
  },
  //third
  {
    id: 3,
    number: 'BIJSS-2026-01',
    topic: 'The Digital Stylus: Impact of Social Media on Modern Prose',
    author: 'Pratik Roy',
    pageRange: 'pp. 24–31',
    // category: 'Media & Communication',
    pdfLink:
    '/articles/BIJSS-2026-03.pdf',
  },
  //fourth
  {
    id: 4,
    number: 'BIJSS-2026-01',
    topic:
      'Intelligent Classrooms: Human-AI Collaboration and the Future of Pedagogical Innovation',
    author: 'Dr. Aftabuddin Ahammad',
    pageRange: 'pp. 32-41',
    // category: 'Education & Technology',
    pdfLink:
      '/articles/BIJSS-2026-04.pdf',
  },
    {
    id: 5,
    number: 'BIJSS-2026-01',
    topic:
      'From Devotion to Monstrosity:  Grotesque Masculinity and the  Transformation of Ranvijay in  Animal  by Sandeep Reddy Vanga ',
    author: 'Dr. Bomter Dirchi',
    pageRange: 'pp. 42-49',
    // category: 'Dr. Bomter Dirchi',
    pdfLink:
      '/articles/BIJSS-2026-05.pdf',
  },
];

/* ─────────────────────────────────────────────
   CATEGORY STYLES
───────────────────────────────────────────── */
// const categoryStyles: Record<string, { badge: string; bar: string; numColor: string; avatarBg: string }> = {
//   'Education & Technology': {
//     badge: 'bg-blue-50 text-blue-700 border-blue-200',
//     bar: 'from-blue-500 to-blue-700',
//     numColor: '#bfdbfe',
//     avatarBg: 'bg-blue-600',
//   },
//   'Environmental Studies': {
//     badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
//     bar: 'from-emerald-500 to-emerald-700',
//     numColor: '#a7f3d0',
//     avatarBg: 'bg-emerald-600',
//   },
//   'Media & Communication': {
//     badge: 'bg-violet-50 text-violet-700 border-violet-200',
//     bar: 'from-violet-500 to-violet-700',
//     numColor: '#ddd6fe',
//     avatarBg: 'bg-violet-600',
//   },
//   'Philosophy & Humanities': {
//     badge: 'bg-amber-50 text-amber-700 border-amber-200',
//     bar: 'from-amber-500 to-amber-600',
//     numColor: '#fde68a',
//     avatarBg: 'bg-amber-500',
//   },
// };

/* helper: get initials from author name (skip titles) */
const getInitial = (name: string) =>
  name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.)\s*/i, '').trim()[0];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
const Archives = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ══════════════════════════════════════
          HERO HEADER
      ══════════════════════════════════════ */}
      <header className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-0 -left-16 w-80 h-80 rounded-full bg-sky-400/8 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-32 bg-blue-800/10 blur-2xl rounded-full" />
        </div>
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="container-custom relative z-10 text-center">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 bg-blue-500/15 text-blue-300 border border-blue-400/20 px-4 py-1.5 rounded-full text-sm font-medium mb-7 backdrop-blur-sm">
            <Archive className="h-3.5 w-3.5" />
            <span>Journal Archives</span>
          </div>

          {/* Main title */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-4">
            Archives
          </h1>

          {/* Journal name */}
          <p className="text-white font-semibold text-base md:text-lg mb-1">
            Bhagyashree International Journal of Social Science
          </p>
          <p className="text-blue-300 text-sm mb-11">
            Volume 1 &nbsp;·&nbsp; Issue 1 &nbsp;·&nbsp; Aprail-June 2026
          </p>

          {/* Stats strip */}
          <div className="inline-grid grid-cols-3 divide-x divide-white/10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden mx-auto">
            {[
              { icon: FileText,   label: 'Articles Published', value: '5' },
              { icon: Layers,     label: 'Volume / Issue',     value: 'Vol.1 · Iss.1' },
              { icon: BookMarked, label: 'Publication Year',   value: '2026' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="px-6 md:px-9 py-5 text-center">
                <Icon className="h-4 w-4 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-bold text-lg md:text-xl font-playfair leading-none mb-1">
                  {value}
                </p>
                <p className="text-blue-300/80 text-xs whitespace-nowrap">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════
          ISSUE IDENTITY STRIP
      ══════════════════════════════════════ */}
      <div className="bg-blue-700 py-3">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="flex items-center gap-2 text-white font-semibold">
            <BookOpen className="h-4 w-4 text-blue-200" />
            Volume 1 &nbsp;·&nbsp; Issue 1 &nbsp;·&nbsp; Aprail-June 2026
          </span>
          <span className="text-blue-200 text-xs md:text-sm">
            ISSN (Online): XXXX-XXXX &nbsp;|&nbsp; Open Access
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════
          ARTICLE LIST
      ══════════════════════════════════════ */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-5xl">

          {/* Section heading */}
          <div className="flex items-start gap-4 mb-10">
            <span className="mt-1 w-1 h-10 bg-blue-600 rounded-full flex-shrink-0" />
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800">
                Published Articles
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                5 articles &nbsp;·&nbsp; Volume 1, Issue 1 (2025)
              </p>
            </div>
          </div>

          {/* Article cards */}
          <div className="flex flex-col gap-5">
            {articles.map((article, idx) => {
              // const s = categoryStyles[article.category] ?? {
              //   badge: 'bg-slate-100 text-slate-600 border-slate-200',
              //   bar: 'from-slate-400 to-slate-600',
              //   numColor: '#e2e8f0',
              //   avatarBg: 'bg-slate-500',
              // };

              return (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden"
                >
                  <div className="flex min-h-[1px]">

                    {/* Left accent bar */}
                    {/* <div className={`w-1.5 flex-shrink-0 bg-gradient-to-b ${s.bar}`} /> */}

                    {/* Content */}
                    <div className="flex-1 p-6 md:p-8">

                      {/* ① Article number + Category */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-4">
                        <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-500 text-xs font-mono font-semibold px-3 py-1 rounded-full border border-slate-200">
                          <FileText className="h-3 w-3 text-blue-500" />
                          {article.number}
                        </span>
                        {/* <span className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border ${s.badge}`}>
                          {article.category}
                        </span> */}
                      </div>

                      {/* ② Topic / Title */}
                      <h3 className="font-playfair text-lg md:text-xl font-bold text-slate-800 leading-snug mb-5 group-hover:text-blue-700 transition-colors duration-200">
                        {article.topic}
                      </h3>

                      {/* ③ Author + ④ Page Range */}
                      <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mb-7">
                        {/* Author */}
                        <span className="inline-flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                          {/* <span className={`w-7 h-7 rounded-full ${s.avatarBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                            {getInitial(article.author)}
                          </span> */}
                          {article.author}
                        </span>

                        {/* Divider */}
                        <span className="hidden sm:block w-px h-4 bg-slate-200" />

                        {/* Page range */}
                        <span className="inline-flex items-center gap-2 text-sm text-slate-500">
                          <BookOpen className="h-4 w-4 text-slate-400" />
                          <span className="font-semibold text-slate-600">{article.pageRange}</span>
                        </span>
                      </div>

                      {/* View button */}
                      <a
                        href={article.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Article
                      </a>
                    </div>

                    {/* Decorative index — desktop only */}
                    <div className="hidden md:flex flex-col items-center justify-center w-20 flex-shrink-0 bg-slate-50/80 border-l border-slate-100">
                      <span
                        className="font-playfair font-bold text-5xl select-none leading-none group-hover:scale-110 transition-transform duration-300"
                        // style={{ color: s.numColor, WebkitTextStroke: `1.5px #cbd5e1` }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
            <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
              Additional articles and upcoming volumes will appear here as the journal
              grows. To submit a manuscript, visit the{' '}
              <a
                href="/journal/author-guidelines"
                className="text-blue-600 font-semibold underline underline-offset-2 hover:text-blue-800 transition-colors"
              >
                Author Guidelines
              </a>{' '}
              page.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Archives;
