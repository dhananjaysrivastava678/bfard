import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Info, Calendar, BookOpen, Globe, Languages, Mail, Phone, MapPin, ShieldCheck, FileText, Layers, Unlock, Hash, Building2,  } from 'lucide-react';

const journalDetails = [
  { icon: BookOpen,    label: 'Journal Title',            value: 'BHAGYASHREE Global Journal of Cultural Studies, Social Sciences and Research (BGJCSSR)', wide: true,  accent: true  },
  { icon: Calendar,    label: 'Journal Start Year',        value: 'July 2026',                              wide: false, accent: false },
  { icon: Hash,        label: 'e-ISSN',                   value: 'Applied / Awaited',                      wide: false, accent: false },
  { icon: Layers,      label: 'Frequency of Publication', value: 'Bimonthly (6 Issues per Year)',           wide: false, accent: false },
  { icon: Globe,       label: 'Subject',                  value: 'Multidisciplinary Subjects',             wide: false, accent: false },
  { icon: Languages,      label: 'Languages',            value: 'English, Hindi, Bengali, Assamese, Odia, Maithili, Sanskrit, Santhali',                            wide: false, accent: false },
  { icon: Unlock,      label: 'Accessibility',            value: 'Open Access',                            wide: false, accent: false },

  { icon: ShieldCheck, label: 'Peer Review Process',      value: 'Double Blind Peer Review Process',       wide: false, accent: false },
  { icon: FileText,    label: 'Publication Format',       value: 'Online',                                 wide: false, accent: false },
];

const languages = [
  { name: 'English',   native: 'English',    symbol: 'A',  color: 'bg-blue-50   border-blue-200   text-blue-700'   },
  { name: 'Hindi',     native: 'हिन्दी',      symbol: 'अ',  color: 'bg-orange-50 border-orange-200 text-orange-700' },
  { name: 'Bengali',   native: 'বাংলা',       symbol: 'অ',  color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { name: 'Assamese',  native: 'অসমীয়া',     symbol: 'অ',  color: 'bg-green-50  border-green-200  text-green-700'  },
  { name: 'Odia',      native: 'ଓଡ଼ିଆ',       symbol: 'ଅ',  color: 'bg-rose-50   border-rose-200   text-rose-700'   },
  { name: 'Maithili',  native: 'मैथिली',      symbol: 'म',  color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
  { name: 'Sanskrit',  native: 'संस्कृतम्',   symbol: 'ॐ',  color: 'bg-amber-50  border-amber-200  text-amber-700'  },
  { name: 'Santhali',  native: 'ᱥᱟᱱᱛᱟᱲᱤ',    symbol: 'ᱥ',  color: 'bg-teal-50   border-teal-200   text-teal-700'   },
];

const contactDetails = [
  { icon: Phone,  label: 'Contact No.', value: '+91-9065309022',                   href: 'tel:+919065309022',                          wide: false },
  { icon: Mail,   label: 'Email',       value: 'bhagyashreefoundationfor@gmail.com', href: 'mailto:bhagyashreefoundationfor@gmail.com', wide: false },
  { icon: MapPin, label: 'Address',     value: 'Manitand, Dhanbad, Jharkhand, 826001, India', href: null,                              wide: true  },
];

const JournalInfo = () => {
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
            <Info className="h-3.5 w-3.5" />
            <span>Journal Information</span>
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-4">
            Journal Info
          </h1>
          <p className="text-white font-semibold text-base md:text-lg mb-2">
            BHAGYASHREE Global Journal of Cultural Studies, Social Sciences and Research
          </p>
          <p className="text-blue-300 text-sm">Open Access · Double Blind Peer Review · Bimonthly · Online</p>
        </div>
      </header>

      {/* Blue strip */}
      <div className="bg-blue-700 py-3">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="flex items-center gap-2 text-white font-semibold">
            <Building2 className="h-4 w-4 text-blue-200" />
            Bhagyashree Foundation for Academic Research and Development
          </span>
          <span className="text-blue-200 text-xs md:text-sm">Est. July 2026 | Online Publication</span>
        </div>
      </div>

      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-5xl">

          {/* ── Journal Details ── */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-8">
              <span className="mt-1 w-1 h-10 bg-blue-600 rounded-full flex-shrink-0" />
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800">Journal Details</h2>
                <p className="text-slate-400 text-sm mt-1">Core information about BGJCSSR</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {journalDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className={`bg-white rounded-2xl border shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-all duration-200
                    ${item.wide ? 'md:col-span-2' : ''}
                    ${item.accent ? 'border-blue-200 bg-gradient-to-r from-blue-50 to-white' : 'border-slate-200'}`}>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${item.accent ? 'bg-blue-600' : 'bg-slate-100'}`}>
                      <Icon className={`h-5 w-5 ${item.accent ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className={`font-semibold leading-snug ${item.accent ? 'text-blue-800 text-base md:text-lg font-playfair' : 'text-slate-800 text-sm md:text-base'}`}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Languages ── */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-8">
              <span className="mt-1 w-1 h-10 bg-blue-600 rounded-full flex-shrink-0" />
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800">Languages of Publication</h2>
                <p className="text-slate-400 text-sm mt-1">Articles accepted in 8 languages</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 mb-5">
                {languages.map((lang) => (
                  <div key={lang.name} className={`flex flex-col items-center justify-center border rounded-xl p-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${lang.color}`}>
                    <span className="text-2xl font-bold mb-1 leading-none">{lang.symbol}</span>
                    <span className="text-xs font-bold leading-tight mb-0.5">{lang.native}</span>
                    <span className="text-xs font-medium opacity-60">{lang.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 bg-slate-50 rounded-xl py-3 px-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                <p className="text-xs text-slate-500 text-center">Articles are accepted and published in all of the above languages.</p>
              </div>
            </div>
          </div>

          {/* ── Contact & Address ── */}
          <div>
            <div className="flex items-start gap-4 mb-8">
              <span className="mt-1 w-1 h-10 bg-blue-600 rounded-full flex-shrink-0" />
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800">Contact & Address</h2>
                <p className="text-slate-400 text-sm mt-1">Reach the editorial office</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className={`bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-all duration-200 ${item.wide ? 'md:col-span-2' : ''}`}>
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-blue-600 font-semibold text-sm md:text-base hover:text-blue-800 hover:underline underline-offset-2 transition-colors break-all">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-800 font-semibold text-sm md:text-base leading-relaxed">{item.value}</p>
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
