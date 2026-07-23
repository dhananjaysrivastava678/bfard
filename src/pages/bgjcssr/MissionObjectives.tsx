import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, CheckCircle, Lightbulb, Globe, BookOpen, Users, Layers } from 'lucide-react';

const objectives = [
  { icon: BookOpen, text: 'To publish original, high-quality, and impactful research contributions from scholars, academicians, and researchers worldwide.' },
  { icon: Layers,   text: 'To encourage interdisciplinary and multidisciplinary research by connecting diverse fields of knowledge.' },
  { icon: Globe,    text: 'To provide a global forum for sharing innovative ideas, theoretical insights, and practical research outcomes.' },
  { icon: Users,    text: 'To promote research in Cultural Studies, Social Sciences, Humanities, Education, and emerging areas of academic interest.' },
];

const MissionObjectives = () => {
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
            <Target className="h-3.5 w-3.5" />
            <span>Mission & Objectives</span>
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-4">
            Mission &amp; Objectives
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
            <Target className="h-4 w-4 text-blue-200" />
            BGJCSSR — Driving Academic Excellence Globally
          </span>
        </div>
      </div>

      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-5xl">

          {/* ── Mission ── */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-8">
              <span className="mt-1 w-1 h-10 bg-blue-600 rounded-full flex-shrink-0" />
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800">Our Mission</h2>
                <p className="text-slate-400 text-sm mt-1">What drives BGJCSSR forward</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10 relative overflow-hidden">
              {/* decorative quote */}
              <div className="absolute top-4 right-6 text-8xl font-playfair text-blue-50 select-none leading-none">"</div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Lightbulb className="h-7 w-7 text-white" />
                </div>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  The mission of <span className="font-bold text-slate-800">BHAGYASHREE Global Journal of Cultural Studies, Social Sciences and Research (BGJCSSR)</span> is
                  to provide an international platform for the dissemination of quality research, innovative ideas,
                  and scholarly perspectives in the fields of Cultural Studies, Social Sciences, Humanities,
                  Education, and interdisciplinary research. The journal aims to promote academic excellence,
                  encourage critical thinking, and support knowledge creation that contributes to social,
                  cultural, and intellectual development.
                </p>
              </div>
            </div>
          </div>

          {/* ── Objectives ── */}
          <div>
            <div className="flex items-start gap-4 mb-8">
              <span className="mt-1 w-1 h-10 bg-blue-600 rounded-full flex-shrink-0" />
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800">Key Objectives</h2>
                <p className="text-slate-400 text-sm mt-1">The goals that guide our publication</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {objectives.map((obj, idx) => {
                const Icon = obj.icon;
                return (
                  <div key={idx}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                    <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-600 text-sm leading-relaxed">{obj.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
              <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
                Through these objectives, <span className="font-semibold text-slate-800">BGJCSSR</span> strives
                to be a leading voice in international academic publishing, fostering research that matters.
              </p>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MissionObjectives;
