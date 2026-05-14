import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const AuthorGuidelines = () => {
  const submissionGuidelines = [
    { label: 'Manuscript', value: 'Must be Original and Unpublished' },
    { label: 'Language', value: 'English, Hindi' },
    { label: 'Font', value: 'Times New Roman' },
    { label: 'Font Size', value: '12' },
    { label: 'Line Spacing', value: '1.5' },
    { label: 'Referencing Style', value: 'MLA/APA (7th Edition)' },
    { label: 'Word Limit', value: '3000–8000 words' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="h-4 w-4" />
              <span>Author Guidelines</span>
            </div>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Author Guidelines
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read the following guidelines carefully before submitting your manuscript.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Submission Guidelines */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-5">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-white" />
                  <h2 className="font-playfair text-xl font-bold text-white">Submission Guidelines</h2>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {submissionGuidelines.map((item, index) => (
                    <div key={index} className="flex items-start justify-between py-3 border-b border-slate-100 last:border-0">
                      <span className="text-slate-500 font-medium text-sm w-40 flex-shrink-0">{item.label}</span>
                      <span className="text-slate-800 font-semibold text-sm flex-1 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Review Process */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-5">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <h2 className="font-playfair text-xl font-bold text-white">Review Process</h2>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-700 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Double-Blind Peer Review</p>
                    <p className="text-slate-600 text-sm mt-1">All manuscripts are reviewed anonymously by at least two subject matter experts.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-700 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Review Time: 2–3 weeks</p>
                    <p className="text-slate-600 text-sm mt-1">Authors can expect feedback within 2 to 3 weeks after submission.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-700font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Decision via Email</p>
                    <p className="text-slate-600 text-sm mt-1">The final editorial decision will be communicated to the author via email.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Plagiarism Policy */}
            <div className="bg-amber-50 rounded-2xl border border-amber-200 overflow-hidden">
              <div className="px-8 py-5 bg-amber-100 border-b border-amber-200">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-700" />
                  <h2 className="font-playfair text-xl font-bold text-amber-800">Plagiarism Policy</h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-amber-900 leading-relaxed">
                  Manuscripts must not exceed <strong>20% similarity index</strong> (excluding references). Any manuscript found to exceed this limit will be rejected without review. Authors are advised to run a plagiarism check before submission.
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

export default AuthorGuidelines;
