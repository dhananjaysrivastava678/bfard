
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get in touch with our team. We're here to help with your research and academic collaboration needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white border-slate-200 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="font-playfair text-2xl font-bold text-slate-800 mb-6">
                    Head Office
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Address</h3>
                        <p className="text-slate-600">
                          Dhanbad, Jharkhand, 826001<br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                        <p className="text-slate-600">
                          <a href="tel:+919065309022" className="hover:text-blue-600 transition-colors">
                            +91 9065309022
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                        <p className="text-slate-600">
                          <a href="mailto:info@bfard.org" className="hover:text-blue-600 transition-colors">
                            info@bfard.org
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Office Hours</h3>
                        <p className="text-slate-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Actions */}
              <Card className="bg-slate-50 border-slate-200">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-xl font-bold text-slate-800 mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <Button 
                      asChild 
                      className="w-full bg-blue-600 text-white hover:bg-blue-700"
                    >
                      <a href="tel:+919065309022" className="flex items-center justify-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Call Now</span>
                      </a>
                    </Button>
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-slate-300 text-slate-700 hover:bg-slate-50"
                    >
                      <a href="mailto:info@bfard.org" className="flex items-center justify-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Send Email</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Message Form */}
            <Card className="bg-white border-slate-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-playfair text-2xl font-bold text-slate-800 mb-6">
                  Send us a Message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                      placeholder="Tell us about your research interests, collaboration ideas, or any questions you have..."
                      required
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="mt-16">
            <Card className="bg-white border-slate-200">
              <CardContent className="p-8 text-center">
                <h2 className="font-playfair text-2xl font-bold text-slate-800 mb-4">
                  Connect with Academic Excellence
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  BFARD is committed to fostering international academic collaboration across Asia and beyond. 
                  Whether you're a researcher, academic institution, or organization interested in partnership opportunities, 
                  we welcome your inquiry and look forward to exploring how we can work together to advance research excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact