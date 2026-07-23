import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Globe, BookOpen, CheckCircle } from 'lucide-react';

const scopeAreas = [
  'Cultural Studies and Heritage Studies',
  'Social Sciences and Social Research',
  'Humanities and Liberal Arts',
  'Education and Learning Studies',
  'Sociology, Psychology and Human Development',
  'History, Literature and Language Studies',
  'Gender Studies and Social Issues',
  'Community Development and Sustainable Development',
  'Interdisciplinary and Multidisciplinary Research Perspectives',
  'Law & Governance',
  'Multidisciplinary Studies',
];

const AimScope = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ── Hero ── */}
      <header className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-0 -left-16 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl" />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/15 text-blue-300 border border-blue-400/20 px-4 py-1.5 rounded-full text-sm font-medium mb-7 backdrop-blur-sm">
            <Globe className="h-3.5 w-3.5" />
            <span>Aim & Scope</span>
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-4">
            Aim &amp; Scope
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl mx-auto">
            BHAGYASHREE Global Journal of Cultural Studies, Social Sciences and Research
          </p>
        </div>
      </header>

      {/* Blue strip */}
      <div className="bg-blue-700 py-3">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="flex items-center gap-2 text-white font-semibold">
            <Globe className="h-4 w-4 text-blue-200" />
            BGJCSSR — Research with Global Relevance and Societal Impact
          </span>
        </div>
      </div>

      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-5xl">

          {/* Intro */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10 mb-10">
            <div className="flex items-start gap-4 mb-6">
              <span className="mt-1 w-1 h-10 bg-blue-600 rounded-full flex-shrink-0" />
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800">
                Scope of the Journal
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-base">
              The journal welcomes research contributions in, but not limited to, the following areas.
              BGJCSSR encourages research with <span className="font-semibold text-slate-800">global relevance and societal impact</span> across
              all major and emerging fields of social sciences, humanities, and interdisciplinary studies.
            </p>
          </div>

          {/* Areas grid */}
          <div className="flex items-start gap-4 mb-8">
            <span className="mt-1 w-1 h-10 bg-blue-600 rounded-full flex-shrink-0" />
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800">Areas Covered</h2>
              <p className="text-slate-400 text-sm mt-1">{scopeAreas.length} research domains welcomed</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {scopeAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-center gap-4 hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-200">
                  <CheckCircle className="h-4 w-4 text-blue-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <p className="text-slate-700 text-sm font-medium leading-snug">{area}</p>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
            <BookOpen className="h-8 w-8 text-blue-500 mx-auto mb-3" />
            <p className="text-slate-700 font-semibold text-base mb-2">
              The journal encourages research with global relevance and societal impact.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
              <span className="font-semibold text-slate-700">BGJCSSR</span> welcomes scholars and researchers
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

export default AimScope;
