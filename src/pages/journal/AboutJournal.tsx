import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BookOpen, Award, Users, Globe } from 'lucide-react';

const AboutJournal = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              <span>About The Journal</span>
            </div>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About The Journal
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BHARGAVA Insights Multidisciplinary Research Journal
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12 mb-12 border border-blue-100">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Bhagyashree International Journal of Social Science
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                <strong>Bhagyashree International Journal of Social Science</strong> is an Academic Journal Dedicated To Publishing Research in The Field of Social Sciences and Related Disciplines. It Provides a Platform for Scholars, Researchers, And Academicians to Share Original Research, Theoretical Discussions, And Review Articles.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                The journal promotes ethical research practices and ensures transparency in the editorial and review process. All submissions undergo a strict double-blind peer review by subject experts.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The journal is dedicated to supporting emerging researchers as well as established academicians.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 text-lg mb-2">Peer Reviewed</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  All submissions undergo a strict double-blind peer review process conducted by subject matter experts ensuring research quality.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 text-lg mb-2">Global Platform</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Providing an international platform for scholars and researchers to publish and share original research with global academic community.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 text-lg mb-2">Ethical Research</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The journal promotes ethical research practices and ensures complete transparency throughout the editorial and review process.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 text-lg mb-2">Inclusive Community</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Dedicated to supporting both emerging researchers and established academicians in advancing social science research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutJournal;
