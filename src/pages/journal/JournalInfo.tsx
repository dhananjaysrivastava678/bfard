import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Info,
  Calendar,
  BookOpen,
  Globe,
  Languages,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  FileText,
  Layers,
  Unlock,
  Hash,
} from 'lucide-react';

/* ─────────────────────────────────────
   DATA
───────────────────────────────────── */
const journalDetails = [
  {
    icon: BookOpen,
    label: 'Journal Title',
    value: 'Bhagyashree International Journal of Social Science',
    wide: true,
    accent: true,
  },
  {
    icon: Calendar,
    label: 'Journal Start Year',
    value: 'April 2026',
    wide: false,
    accent: false,
  },
  {
    icon: Hash,
    label: 'e-ISSN',
    value: 'Applied / Awaited',
    wide: false,
    accent: false,
  },
  {
    icon: Layers,
    label: 'Frequency of Publication',
    value: 'Quarterly (4 Issues per Year)',
    wide: false,
    accent: false,
  },
  {
    icon: Languages,
    label: 'Languages',
    value: 'Multiple languages: English, Hindi,Sanskrit, Bengali, Urdu, etc. ',
    wide: false,
    accent: false,
  },
  {
    icon: Unlock,
    label: 'Accessibility',
    value: 'Open Access',
    wide: false,
    accent: false,
  },
  {
    icon: ShieldCheck,
    label: 'Peer Review Process',
    value: 'Double Blind Peer Review Process',
    wide: false,
    accent: false,
  },
  {
    icon: Globe,
    label: 'Subject',
    value: 'Social Science',
    wide: false,
    accent: false,
  },
  {
    icon: FileText,
    label: 'Publication Format',
    value: 'Online',
    wide: false,
    accent: false,
  },
];

const contactDetails = [
  {
    icon: Phone,
    label: 'Contact No.',
    value: '+91-9065309022',
    href: 'tel:+919065309022',
    wide: false,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'bhagyashreefoundationfor@gmail.com',
    href: 'mailto:bhagyashreefoundationfor@gmail.com',
    wide: false,
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'https://bhagyashreefoundation.in/',
    href: 'https://bhagyashreefoundation.in/',
    wide: false,
  },
  {
    icon: MapPin,
    label: 'Address',
    value:
      'Manitand Dhanbad, Jharkhand, 826001',
    href: null,
    wide: true,
  },
];

/* ─────────────────────────────────────
   PAGE
───────────────────────────────────── */
const JournalInfo = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ══════════════════════
          HERO
      ══════════════════════ */}
      <header className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        {/* blurs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-0 -left-16 w-80 h-80 rounded-full bg-sky-500/8 blur-3xl" />
        </div>
        {/* dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="container-custom relative z-10 text-center">
          {/* pill */}
          <div className="inline-flex items-center gap-2 bg-blue-500/15 text-blue-300 border border-blue-400/20 px-4 py-1.5 rounded-full text-sm font-medium mb-7 backdrop-blur-sm">
            <Info className="h-3.5 w-3.5" />
            <span>Journal Information</span>
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-4">
            Journal Info
          </h1>
          <p className="text-white font-semibold text-base md:text-lg mb-2">
            Bhagyashree International Journal of Social Science
          </p>
          <p className="text-blue-300 text-sm">
            Open Access &nbsp;·&nbsp; Double Blind Peer Review &nbsp;·&nbsp; Quarterly &nbsp;·&nbsp; Online
          </p>
        </div>
      </header>

      {/* blue strip */}
      <div className="bg-blue-700 py-3">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="flex items-center gap-2 text-white font-semibold">
            <BookOpen className="h-4 w-4 text-blue-200" />
            Bhagyashree Foundation for Academic Research and Development
          </span>
          <span className="text-blue-200 text-xs md:text-sm">
            Est. April 2026 &nbsp;|&nbsp; Online Publication
          </span>
        </div>
      </div>

      {/* ══════════════════════
          BODY
      ══════════════════════ */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-5xl">

          {/* ── SECTION 1: Journal Details ── */}
          <div className="mb-14">
            {/* section heading */}
            <div className="flex items-start gap-4 mb-8">
              <span className="mt-1 w-1 h-10 bg-blue-600 rounded-full flex-shrink-0" />
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800">
                  Journal Details
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  Core information about the journal
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {journalDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`
                      bg-white rounded-2xl border shadow-sm p-6 flex items-start gap-4
                      hover:shadow-md transition-all duration-200
                      ${item.wide ? 'md:col-span-2' : ''}
                      ${item.accent
                        ? 'border-blue-200 bg-gradient-to-r from-blue-50 to-white'
                        : 'border-slate-200'}
                    `}
                  >
                    {/* icon box */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                        ${item.accent ? 'bg-blue-600' : 'bg-slate-100'}`}
                    >
                      <Icon
                        className={`h-5 w-5 ${item.accent ? 'text-white' : 'text-blue-600'}`}
                      />
                    </div>

                    {/* text */}
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p
                        className={`font-semibold leading-snug
                          ${item.accent
                            ? 'text-blue-800 text-base md:text-xl font-playfair'
                            : 'text-slate-800 text-sm md:text-base'}`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── SECTION 2: Contact & Address ── */}
          <div>
            {/* section heading */}
            <div className="flex items-start gap-4 mb-8">
              <span className="mt-1 w-1 h-10 bg-blue-600 rounded-full flex-shrink-0" />
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800">
                  Contact &amp; Address
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  Reach the editorial office
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`
                      bg-white rounded-2xl border border-slate-200 shadow-sm p-6
                      flex items-start gap-4 hover:shadow-md transition-all duration-200
                      ${item.wide ? 'md:col-span-2' : ''}
                    `}
                  >
                    {/* icon box */}
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>

                    {/* text */}
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.label === 'Website' ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-blue-600 font-semibold text-sm md:text-base hover:text-blue-800 hover:underline underline-offset-2 transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-800 font-semibold text-sm md:text-base leading-relaxed">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JournalInfo;