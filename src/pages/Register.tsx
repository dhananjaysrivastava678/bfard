
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Users, Calendar, Award, UserPlus, Globe, BookOpen } from 'lucide-react';
import { Mail, Phone } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="section-padding pt-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
                Register for BFARD
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join our community of researchers and academicians from across Asia
              </p>
            </div>

            {/* Registration Form Container */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-lift border border-gray-200">
              <div className="bg-gray-50 p-8 text-center">
                <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-2">
                  Conference Registration
                </h2>
                <p className="text-gray-600">
                  Please fill out the form below to register for our upcoming conferences and events
                </p>
              </div>

              <div className="p-8">
                {/* Placeholder for Google Form */}
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <UserPlus className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2">
                    Google Form Integration
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The registration form will be embedded here once the Google Form link is provided.
                  </p>
                  <div className="text-sm text-gray-600">
                    <p>Form features will include:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Personal information fields</li>
                      <li>Academic background details</li>
                      <li>Research interests selection</li>
                      <li>Conference preferences</li>
                      <li>Payment information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md card-lift border border-gray-200">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                  International Network
                </h3>
                <p className="text-gray-600">
                  Connect with researchers and academics from over 50 countries across Asia and beyond.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md card-lift border border-gray-200">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                  Research Excellence
                </h3>
                <p className="text-gray-600">
                  Participate in high-quality conferences and gain recognition for your research work.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md card-lift border border-gray-200">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                  Young Scholar Support
                </h3>
                <p className="text-gray-600">
                  Access grants and scholarships for conference participation and academic development.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md card-lift border border-gray-200">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                  Publication Opportunities
                </h3>
                <p className="text-gray-600">
                  Get your research published in our peer-reviewed journals and conference proceedings.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-16 bg-blue-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-playfair font-semibold mb-4">
                Need Help with Registration?
              </h3>
              <p className="text-blue-100 mb-6">
                Our team is here to assist you with the registration process
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-200" />
                  <span>+91 9065309022</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-200" />
                  <span>info@bfard.org</span>
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

export default Register;