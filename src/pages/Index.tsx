
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Globe, Calendar, Award, ChevronDown, Play, Sparkles, Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: 1425, suffix: '', label: 'International Conferences', icon: Globe },
    { number: 744, suffix: '', label: 'Scientific Presentations', icon: BookOpen },
    { number: 4565, suffix: '', label: 'Journal Publications', icon: Award },
    { number: 2342, suffix: '', label: 'Webinars', icon: Users },
  ];

  const featuredPrograms = [
    {
      title: 'International Research Conferences',
      description: 'Annual conferences bringing together scholars from across Asia and beyond to share groundbreaking research and foster academic collaboration.',
      icon: Globe,
      link: '/events',
    },
    {
      title: 'Cross-Border Collaborations',
      description: 'Facilitating research partnerships between institutions across different countries, promoting Asia-wide academic exchange.',
      icon: Users,
      link: '/about',
    },
    {
      title: 'Academic Publishing & Resources',
      description: 'Supporting researchers with publication opportunities and providing comprehensive resources for academic excellence.',
      icon: Award,
      link: '/contact',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center pt-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1646579886135-068c73800308?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
          }}
        />
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-white mr-3 animate-pulse" />
                <span className="text-white font-medium tracking-wide uppercase text-sm">
                  International Academic Excellence
                </span>
                <Sparkles className="h-8 w-8 text-white ml-3 animate-pulse" />
              </div>
              
              <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
                BHAGYASHREE
                <span className="block text-blue-300 mt-2">Foundation</span>
              </h1>
              
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-8 font-medium">
                for Academic Research and Development
              </h2>
              
              <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
                <em className="font-playfair text-3xl">"Advancing Research. Bridging Borders. Shaping Futures."</em>
              </p>
              
              {/* <p className="text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed text-lg">
                BHAGYASHREE Foundation for Academic Research and Development is a culmination of like-minded eminent researchers who joined together to build and strengthen research across Asia, the largest continent pooling in experts from more than 50 countries. We facilitate cross-border research collaboration, connecting researchers globally and converting lab results into field applications.
              </p> */}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* <Button 
                  asChild 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg transition-all duration-300 hover:scale-105 px-8 py-6 text-lg font-semibold border-0"
                >
                  <Link to="/events" className="flex items-center space-x-2">
                    <span>Explore Events</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button> */}
                
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-6 text-lg font-medium transition-all duration-300"
                >
                  <Link to="/about" className="flex items-center space-x-2">
                    <Play className="h-5 w-5" />
                    <span>Learn More</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div> */}
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Fostering academic excellence and international collaboration across Asia and beyond
              </p>
            </div>
            
            <Card className="bg-white border border-slate-200 shadow-lg">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    The intense motivation drive behind this intellectual gathering is promoting research across Asia. This will be a research replica platform where research conducted in one country can be conducted with necessary adaptation in other countries of Asia through the members of this Association.
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    The research works will gain wide recognition and authenticity for their country-wise interpretation, which will provide multifaceted credibility. This platform will also serve as a channel in bridging young career-seeking professionals with experts of that field.
                  </p>

                  <p className="text-slate-600 leading-relaxed">
                    This firm aims to include societal responsibility among researchers of Asia, converting the lab results as field applications. This association facilitates confidential research networking, ruling out research barriers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Measuring our commitment to academic excellence and international collaboration across Asia and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="font-playfair text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                      <AnimatedCounter 
                        end={stat.number} 
                        suffix={stat.suffix}
                        duration={2500}
                      />
                    </div>
                    <p className="text-slate-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Key Initiatives
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover our flagship programs designed to advance academic research and foster global collaboration across Asia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="group bg-white border border-slate-200 hover:shadow-xl transition-all duration-500 hover:scale-105 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-2 bg-blue-600"></div>
                    <div className="p-8">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {program.description}
                      </p>
                      <Link 
                        to={program.link}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
            Ready to Shape the Future of Research?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our global community of researchers, scholars, and institutions committed to advancing academic excellence across Asia and beyond
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 text-lg font-semibold border-0"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Get Involved</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-medium"
            >
              <Link to="/register">
                Register Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
