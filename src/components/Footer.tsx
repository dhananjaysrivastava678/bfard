
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Mission & Vision', path: '/mission' },
    { name: 'Scope', path: '/scope' },
    { name: 'Events', path: '/events' },
  ];

  const supportLinks = [
    { name: 'Young Scholars', path: '/young-scholars' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'Publications', path: '/publications' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/bs-logo.png" 
                alt="BFARD Logo" 
                className="w-14 h-14 object-contain"
              />
              <div>
                <h3 className="font-inter font-bold text-lg text-slate-800">BFARD</h3>
                <p className="text-xs text-slate-500">Academic Excellence</p>
              </div>
            </Link>
            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
              BHAGYASHREE Foundation for Academic Research and Development - Advancing research, bridging borders, and shaping futures through international academic collaboration.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 bg-slate-100 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4 text-slate-600 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold text-base text-slate-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-600 hover:text-blue-600 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-slate-300 rounded-full mr-2 group-hover:bg-blue-600 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-inter font-semibold text-base text-slate-800 mb-4">Support & Resources</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-600 hover:text-blue-600 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-slate-300 rounded-full mr-2 group-hover:bg-blue-600 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-inter font-semibold text-base text-slate-800 mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-slate-600">info@bfard.org</p>
                  <p className="text-slate-600">research@bfard.org</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-slate-600">+91 9065309022</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <p className="text-slate-600 text-sm">
                  BHAGYASHREE Foundation for Academic Research and Development <br />
                  Dhanbad, Jharkhand, 826001
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <Globe className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <p className="text-slate-600 text-sm">www.bfard.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-slate-500 text-xs">
              <p>&copy; {currentYear} BHAGYASHREE Foundation for Academic Research and Development. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4 text-xs">
              <Link to="/privacy" className="text-slate-500 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-500 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-slate-500 hover:text-blue-600 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 