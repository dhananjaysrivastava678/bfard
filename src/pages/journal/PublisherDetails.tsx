import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Building, Mail, MapPin, Globe } from 'lucide-react';

const PublisherDetails = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building className="h-4 w-4" />
              <span>Publisher Details</span>
            </div>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Publisher Details
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official publisher information for the Bhagyashree International Journal of Social Science.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Main Publisher Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white mb-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="font-playfair text-2xl font-bold">Publisher</h2>
                  <p className="text-blue-200 text-sm">Official Publishing Body</p>
                </div>
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-2">
                BHAGYASHREE Foundation for Academic Research and Development
              </h3>
              <p className="text-blue-200 text-sm mt-2">BFARD</p>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm divide-y divide-slate-100">
              <div className="flex items-start space-x-4 p-6">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">Address</p>
                  <p className="text-slate-600 leading-relaxed">
                    Sri Krishna Puri, Gol Building Road, Taneja House,<br />
                    Manaitand, Dhanbad, Jharkhand, India<br />
                    <span className="font-medium">Pin: 826001</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">Email</p>
                  <a
                    href="mailto:info@bhagyashreefoundation.in"
                    className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  >
                    info@bhagyashreefoundation.in
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">Website</p>
                  <a
                    href="https://bhagyashreefoundation.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  >
                    bhagyashreefoundation.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PublisherDetails;
