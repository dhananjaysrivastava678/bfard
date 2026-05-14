import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, CheckCircle } from 'lucide-react';

const PublicationEthics = () => {
  const policies = [
    {
      title: 'Double-Blind Peer Review',
      description: 'All submitted manuscripts are reviewed anonymously by at least two qualified reviewers. The identities of both authors and reviewers are kept confidential throughout the process.',
    },
    {
      title: 'Plagiarism Check',
      description: 'Every manuscript is checked for plagiarism using professional tools. A similarity index of more than 20% (excluding references) will result in immediate rejection.',
    },
    {
      title: 'Conflict of Interest Disclosure',
      description: 'Authors, reviewers, and editors must disclose any conflicts of interest that could influence the research, review, or publication decisions.',
    },
    {
      title: 'Copyright Policy',
      description: 'Upon acceptance, authors transfer copyright to the journal. Authors retain the right to use their own work for non-commercial academic purposes.',
    },
    {
      title: 'Withdrawal Policy',
      description: 'Authors may withdraw their manuscript before the review process begins. Post-review withdrawal requests must be submitted with valid justification.',
    },
    {
      title: 'Anti-Plagiarism Compliance',
      description: 'The journal is strictly committed to anti-plagiarism standards. Any form of academic misconduct will lead to permanent rejection and may be reported to the authors\' institution.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              <span>Publication Ethics</span>
            </div>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Publication Ethics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The journal follows strict ethical guidelines to maintain integrity, transparency, and academic excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100 mb-10">
              <p className="text-slate-700 leading-relaxed text-lg text-center">
                Bhagyashree International Journal of Social Science is committed to upholding the highest standards of publication ethics. The following guidelines apply to all parties involved in the act of publishing.
              </p>
            </div>

            {/* Ethics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {policies.map((policy, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">{policy.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{policy.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PublicationEthics;
