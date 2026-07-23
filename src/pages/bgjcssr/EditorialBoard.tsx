import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Mail, MapPin, ExternalLink } from 'lucide-react';

const boardMembers = [
  {
    name: 'Dr. Sirikarn Thongmak',
    role: 'Faculty of Multidisciplinary Sciences & Entrepreneurship, Department of English',
    institution: 'Thaksin University, Thailand — 93210',
    email: 'sirikarn.t@tsu.ac.th',
  },
  {
    name: 'Dr. Binay Shrestha',
    role: 'Campus Chief',
    institution: 'Birgunj Public College, Birgunj-12, Nepal — 44300',
    email: 'binay273@bpcbirgunj.edu.np',
  },
  {
    name: 'Dr. Puspita Sukla',
    role: 'Lecturer, P.G. Department of Odia',
    institution: 'Rama Devi Women\'s University, Bhubaneswar, Odisha, India',
    email: 'puspitasukla@rdwu.ac.in',
    orcid: '0009-0003-5152-0110',
  },
];

const getInitial = (name: string) =>
  name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.)\s*/i, '').trim()[0];

const EditorialBoard = () => {
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
            <Users className="h-3.5 w-3.5" />
            <span>Editorial Board</span>
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-4">
            Editorial Board
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl mx-auto">
            Distinguished academics committed to the highest standards of scholarly publishing at BGJCSSR
          </p>
        </div>
      </header>

      {/* Blue strip */}
      <div className="bg-blue-700 py-3">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="flex items-center gap-2 text-white font-semibold">
            <Users className="h-4 w-4 text-blue-200" />
            BGJCSSR Editorial Board Members
          </span>
          <span className="text-blue-200 text-xs md:text-sm">{boardMembers.length} Members</span>
        </div>
      </div>

      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-5xl">

          <div className="flex items-start gap-4 mb-10">
            <span className="mt-1 w-1 h-10 bg-blue-600 rounded-full flex-shrink-0" />
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800">Board Members</h2>
              <p className="text-slate-400 text-sm mt-1">International experts in Social Sciences & Humanities</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {boardMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden"
              >
                {/* top colour bar */}
                <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-700" />

                <div className="p-7">
                  {/* Avatar + name */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-white font-bold text-xl">{getInitial(member.name)}</span>
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 text-xs font-semibold mt-0.5">{member.role}</p>
                    </div>
                  </div>

                  {/* Institution */}
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-500 text-sm leading-snug">{member.institution}</p>
                  </div>

                  {/* ORCID if present */}
                  {member.orcid && (
                    <p className="text-xs text-slate-400 mb-4 pl-6">
                      ORCID: <span className="font-mono">{member.orcid}</span>
                    </p>
                  )}

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 text-xs font-semibold transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
              Our editorial board is continuously growing. If you are an established academic and wish to join,
              please contact us at{' '}
              <a href="mailto:bhagyashreefoundationfor@gmail.com" className="text-blue-600 hover:underline font-semibold">
                bhagyashreefoundationfor@gmail.com
              </a>
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EditorialBoard;
