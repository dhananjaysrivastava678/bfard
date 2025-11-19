
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Users, Globe, Calendar, Phone, FileText, UserPlus, ChevronDown, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/', icon: BookOpen },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Mission', path: '/mission', icon: Globe },
    { name: 'Scope', path: '/scope', icon: Target },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-slate-200' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={handleNavClick}>
            <img 
              src="/bs-logo.png" 
              alt="BFARD Logo" 
              className="w-16 h-16 lg:w-20 lg:h-20 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="block">
              <h1 className="font-playfair font-bold text-xl lg:text-2xl text-slate-800">BFARD</h1>
              <p className="text-xs text-slate-500 -mt-1 hidden sm:block">Academic Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  <Icon className={`h-4 w-4 transition-transform group-hover:scale-110 ${
                    isActive ? 'text-white' : 'text-slate-500 group-hover:text-blue-700'
                  }`} />
                  <span className="font-medium text-sm">{item.name}</span>
                </Link>
              );
            })}

            {/* Brochure Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700">
                  <FileText className="h-4 w-4 text-slate-500" />
                  <span className="font-medium text-sm">Brochure</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white border-slate-200 shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <a 
                    href="https://drive.google.com/file/d/1j-NNzKk789CZVoivHHER2nq-WbYZ8LAU/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 cursor-pointer text-slate-700 hover:bg-slate-50"
                  >
                    <FileText className="h-4 w-4" />
                    <span>ICSSER Sponsored National Conference Brochure </span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="/brochures/Award pdf.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 cursor-pointer text-slate-700 hover:bg-slate-50"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Awards</span>
                  </a>
                </DropdownMenuItem>
                {/* <DropdownMenuItem asChild>
                  <a 
                    href="/brochures/ICSSER Sponsored National Conference Brochure (3).pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 cursor-pointer text-slate-700 hover:bg-slate-50"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Events Brochure</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="/brochures/research.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 cursor-pointer text-slate-700 hover:bg-slate-50"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Research Brochure</span>
                  </a>
                </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Register Button */}
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all duration-200 px-6 py-3 rounded-lg ml-2">
              <Link to="/register" className="flex items-center space-x-2" onClick={handleNavClick}>
                <UserPlus className="h-4 w-4" />
                <span className="font-medium">Register</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-blue-600 hover:bg-blue-50 border border-blue-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="container-custom py-4">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={handleNavClick}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium text-sm">{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Brochure Link */}
              <div className="space-y-1">
                <p className="text-xs text-slate-500 px-3 py-1 font-medium">Brochures</p>
                <a
                  href="https://drive.google.com/file/d/1j-NNzKk789CZVoivHHER2nq-WbYZ8LAU/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                  onClick={handleNavClick}
                >
                  <FileText className="h-4 w-4" />
                  <span className="font-medium text-sm">ICSSER Sponsored National Conference Brochure</span>
                </a>
                <a
                  href="/brochures/Award pdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                  onClick={handleNavClick}
                >
                  <FileText className="h-4 w-4" />
                  <span className="font-medium text-sm">Awards</span>
                </a>
                {/* <a
                  href="/brochures/events.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                  onClick={handleNavClick}
                >
                  <FileText className="h-4 w-4" />
                  <span className="font-medium text-sm">Awards</span>
                </a> */}
                {/* <a
                  href="/brochures/research.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                  onClick={handleNavClick}
                >
                  <FileText className="h-4 w-4" />
                  <span className="font-medium text-sm">Research Brochure</span>
                </a> */}
              </div>

              {/* Mobile Register Link */}
              <Link
                to="/register"
                onClick={handleNavClick}
                className="flex items-center space-x-3 p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
              >
                <UserPlus className="h-4 w-4" />
                <span className="font-medium text-sm">Register</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;