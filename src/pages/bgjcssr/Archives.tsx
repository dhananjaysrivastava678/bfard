import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Archive, BookOpen, FileText, Layers } from 'lucide-react';

const BgjcssrArchives = () => {
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
            <Archive className="h-3.5 w-3.5" />
            <span>Archives</span>
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-4">
            Archives
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl mx-auto">
            BHAGYASHREE Global Journal of Cultural Studies, Social Sciences and Research
          </p>
          <p className="text-blue-400 text-sm font-semibold tracking-widest mt-1">BGJCSSR</p>
        </div>
      </header>

      {/* Blue strip */}
      <div className="bg-blue-700 py-3">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="flex items-center gap-2 text-white font-semibold">
            <BookOpen className="h-4 w-4 text-blue-200" />
            Volume 1 · Issue 1 · 2026
          </span>
          <span className="text-blue-200 text-xs md:text-sm">ISSN (Online): Applied / Awaited</span>
        </div>
      </div>

      {/* ── Body ── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-5xl">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { icon: FileText,  label: 'Articles', value: 'Upcoming' },
              { icon: Layers,    label: 'Volume',   value: 'Vol. 1'   },
              { icon: BookOpen,  label: 'Year',     value: '2026'     },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                <Icon className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <p className="font-playfair font-bold text-xl text-slate-800">{value}</p>
                <p className="text-slate-400 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* Coming soon notice */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Archives Coming Soon
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto mb-6">
              BGJCSSR is currently preparing its first issue for publication in 2026.
              Published articles will appear here once the first issue is released.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-100 px-5 py-2.5 rounded-xl text-sm font-semibold">
              <Archive className="h-4 w-4" />
              First Issue — 2026
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BgjcssrArchives;
