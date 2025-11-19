
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Users, BookOpen, Target, Award, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

const Scope = () => {
  const scopeAreas = [
    {
      icon: BookOpen,
      title: "Research Excellence",
      description: "Promoting high-quality research across diverse academic disciplines with focus on innovation and impact.",
      highlights: ["Interdisciplinary Research", "Quality Standards", "Innovation Focus"]
    },
    {
      icon: Users,
      title: "Academic Collaboration",
      description: "Facilitating partnerships between institutions, researchers, and scholars across Asia and beyond.",
      highlights: ["International Networks", "Cross-border Projects", "Knowledge Exchange"]
    },
    {
      icon: Target,
      title: "Sustainable Development",
      description: "Addressing global challenges through research that contributes to sustainable development goals.",
      highlights: ["Environmental Research", "Social Impact", "Economic Development"]
    },
    {
      icon: Globe,
      title: "Cultural Integration",
      description: "Bridging cultural gaps through academic exchange and promoting diversity in research perspectives.",
      highlights: ["Cultural Studies", "Language Research", "Heritage Preservation"]
    },
    {
      icon: Award,
      title: "Excellence Recognition",
      description: "Acknowledging outstanding contributions to research and academic development in Asian countries.",
      highlights: ["Research Awards", "Academic Recognition", "Merit Scholarships"]
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      description: "Fostering technological advancement and innovation through collaborative research initiatives.",
      highlights: ["Tech Innovation", "Digital Transformation", "Future Technologies"]
    }
  ];

  const keyObjectives = [
    "Advance academic research standards across Asian institutions",
    "Facilitate international collaboration and knowledge exchange",
    "Support emerging researchers and young scholars",
    "Promote sustainable development through research",
    "Foster innovation and technological advancement",
    "Strengthen academic networks and partnerships"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Our Scope & Vision
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive academic excellence spanning research, collaboration, and innovation 
              across diverse disciplines and cultural boundaries.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="bg-slate-50 border-slate-200 mb-16">
            <CardContent className="p-8 text-center">
              <h2 className="font-playfair text-2xl font-bold text-slate-800 mb-4">
                Our Mission Scope
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-4xl mx-auto">
                BFARD operates with a comprehensive scope that encompasses research development, 
                academic collaboration, cultural integration, and innovation promotion across Asian 
                countries and international partners. We strive to create a unified platform for 
                academic excellence that transcends geographical and cultural boundaries.
              </p>
            </CardContent>
          </Card>

          {/* Scope Areas */}
          <div className="mb-16">
            <h2 className="font-playfair text-3xl font-bold text-slate-800 text-center mb-12">
              Areas of Focus
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scopeAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Card key={index} className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-playfair text-xl font-bold text-slate-800 mb-3">
                        {area.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {area.description}
                      </p>
                      <div className="space-y-2">
                        {area.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Key Objectives */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-slate-800 mb-6">
                  Key Objectives
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Our objectives define the roadmap for achieving academic excellence and 
                  fostering meaningful collaborations that create lasting impact in the 
                  research and academic community.
                </p>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Learn More About Our Mission
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <Card className="bg-white border-slate-200">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {keyObjectives.map((objective, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{objective}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Impact Areas */}
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl font-bold text-slate-800 mb-4">
                  Global Impact Areas
                </h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  Our scope extends across multiple continents, fostering academic excellence 
                  and research collaboration on a global scale.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-slate-800 mb-2">Asian Focus</h3>
                  <p className="text-slate-600">
                    Primary focus on Asian countries with expanding networks across the region.
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-slate-800 mb-2">International Reach</h3>
                  <p className="text-slate-600">
                    Collaborations extending beyond Asia to include global academic partners.
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-slate-800 mb-2">Future Expansion</h3>
                  <p className="text-slate-600">
                    Continuous growth and expansion of our academic network and influence.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Scope;
