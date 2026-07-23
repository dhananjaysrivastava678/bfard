import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BookOpen, Globe, Shield, Users, Lightbulb, Award } from 'lucide-react';

const AboutJournal = () => {
  const highlights = [
    {
      icon: Globe,
      title: 'International Platform',
      desc: 'A global forum for researchers, academicians, educators, and professionals worldwide.',
    },
    {
      icon: Shield,
      title: 'Peer Reviewed',
      desc: 'Double blind peer review process ensuring highest standards of academic integrity.',
    },
    {
      icon: Users,
      title: 'Multidisciplinary',
      desc: 'Covers Cultural Studies, Social Sciences, Humanities, Education and more.',
    },
    {
      icon: Lightbulb,
      title: 'Original Research',
      desc: 'Welcomes original articles, review papers, conceptual studies and case studies.',
    },
    {
      icon: Award,
      title: 'Open Access',
      desc: 'Freely accessible to readers worldwide promoting knowledge dissemination.',
    },
    {
      icon: BookOpen,
      title: 'Ethical Publishing',
      desc: 'Committed to academic excellence, originality, transparency and quality standards.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ── Hero ── */}
      <header className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-0 -left-16 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/15 text-blue-300 border border-blue-400/20 px-4 py-1.5 rounded-full text-sm font-medium mb-7 backdrop-blur-sm">
            <BookOpen className="h-3.5 w-3.5" />
            <span>About the Journal</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
            BHAGYASHREE Global Journal
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-2">
            of Cultural Studies, Social Sciences and Research
          </p>
          <p className="text-blue-400 text-sm font-semibold tracking-widest">
            BGJCSSR
          </p>
        </div>
      </header>

      {/* Blue strip */}
      <div className="bg-blue-700 py-3">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="flex items-center gap-2 text-white font-semibold">
            <BookOpen className="h-4 w-4 text-blue-200" />
            International · Peer Reviewed · Multidisciplinary · Open Access
          </span>
          <span className="text-blue-200 text-xs md:text-sm">Est. July 2026</span>
        </div>
      </div>

      {/* ── Body ── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-5xl">

          {/* About text */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 mb-10">
            <div className="flex items-start gap-4 mb-6">
              <span className="mt-1 w-1 h-10 bg-blue-600 rounded-full flex-shrink-0" />
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800">
                About the Journal
              </h2>
            </div>

            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                <span className="font-bold text-slate-800">BHAGYASHREE Global Journal of Cultural Studies, Social Sciences and Research (BGJCSSR)</span> is
                an international, peer-reviewed, multidisciplinary academic journal dedicated to promoting
                high-quality research and scholarly discussions across the fields of Cultural Studies,
                Social Sciences, Humanities, Education, and related interdisciplinary areas.
              </p>
              <p>
                The journal provides a global platform for researchers, academicians, educators, professionals,
                and scholars to share innovative ideas, theoretical perspectives, empirical studies, and
                emerging knowledge that contribute to the advancement of society and human understanding.
              </p>
              <p>
                BGJCSSR encourages original research articles, review papers, conceptual studies, case studies,
                and scholarly contributions that explore diverse dimensions of culture, society, human development,
                education, social transformation, and contemporary issues. The journal aims to bridge different
                disciplines and promote meaningful academic exchange at national and international levels.
              </p>
              <p>
                The journal follows ethical research practices and maintains a commitment to academic excellence,
                originality, transparency, and quality publication standards. Through its multidisciplinary
                approach, <span className="font-semibold text-slate-800">BHAGYASHREE Global Journal of Cultural Studies, Social Sciences and Research</span> seeks
                to support knowledge creation, encourage interdisciplinary collaboration, and contribute to
                global research development.
              </p>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="flex items-start gap-4 mb-8">
            <span className="mt-1 w-1 h-10 bg-blue-600 rounded-full flex-shrink-0" />
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800">
                Key Highlights
              </h2>
              <p className="text-slate-400 text-sm mt-1">What makes BGJCSSR stand out</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-playfair font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom note */}
          <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
              <span className="font-semibold text-slate-800">BGJCSSR</span> welcomes scholars and researchers
              worldwide to contribute towards building a meaningful and inclusive platform for academic
              innovation and knowledge dissemination.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutJournal;
