import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const JournalContact = () => {
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
            <Mail className="h-3.5 w-3.5" />
            <span>Contact Us</span>
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-4">
            Contact Us
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl mx-auto">
            Get in touch with the BGJCSSR editorial office
          </p>
        </div>
      </header>

      {/* Blue strip */}
      <div className="bg-blue-700 py-3">
        <div className="container-custom text-sm">
          <span className="flex items-center gap-2 text-white font-semibold">
            <Mail className="h-4 w-4 text-blue-200" />
            BHAGYASHREE Global Journal of Cultural Studies, Social Sciences and Research
          </span>
        </div>
      </div>

      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-5xl">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">

            {/* Phone */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-4 shadow-md">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Phone</p>
              <a href="tel:+919065309022" className="text-blue-600 font-bold text-base hover:text-blue-800 transition-colors">
                +91-9065309022
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-4 shadow-md">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Email</p>
              <a href="mailto:bhagyashreefoundationfor@gmail.com"
                className="text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors break-all">
                bhagyashreefoundationfor@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-4 shadow-md">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Address</p>
              <p className="text-slate-700 font-semibold text-sm leading-relaxed">
                Manitand, Dhanbad,<br />Jharkhand, 826001,<br />India
              </p>
            </div>

          </div>

          {/* Quick message prompt */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <Send className="h-10 w-10 text-blue-200 mx-auto mb-4" />
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3">
              Submit Your Research
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed max-w-lg mx-auto mb-6">
              Ready to contribute to BGJCSSR? Send your manuscript or inquiry directly
              to our editorial office and our team will respond promptly.
            </p>
            <a
              href="mailto:bhagyashreefoundationfor@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-md"
            >
              <Mail className="h-4 w-4" />
              Email Editorial Office
            </a>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default JournalContact;
