import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, BookOpen, Globe, Users, FileText } from 'lucide-react';

const AimScope = () => {
  const aims = [
    { text: 'Promote research in social science disciplines', icon: BookOpen },
    { text: 'Encourage interdisciplinary studies', icon: Users },
    { text: 'Provide a global platform for academic discussion', icon: Globe },
    { text: 'Publish original research articles, review papers, and case studies', icon: FileText },
  ];

  const areas = [
    'Sociology', 'Political Science', 'Economics', 'History',
    'Geography', 'Education', 'Public Administration', 'Social Work',
    'Anthropology', 'Other related social science subjects',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              <span>Aim & Scope</span>
            </div>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Aim & Scope
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The journal encourages research with global relevance and societal impact.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Aims Section */}
            <div className="mb-14">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                The Journal Aims To
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {aims.map((aim, index) => {
                  const Icon = aim.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border border-blue-100">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-slate-700 leading-relaxed font-medium">{aim.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Areas Covered */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                Areas Covered
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {areas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-slate-50 hover:bg-blue-50 hover:border-blue-200 border border-slate-200 transition-colors group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                    <span className="text-slate-700 text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>            
  );
};

export default AimScope;
